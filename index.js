const G = 9.80665
//plat weight per litre
const platinumWeight = 21.27;
const oreWeight = 1 / 0.37;
var cargoContainersEnabled = true
var showVanilla = true

function initInputHandlers() {
    $('#gravityOptions').children('a').click(gravitySelectEvent);
    $('#containerMultiplierOptions').children('a').click(containerMulSelectEvent);
    $('#shipSizeSelect').change(shipSizeListener);
    // $('#shipSizeSelect').change(updateInput);
    $('#weightInputVal').on('input', updateOutput);
    $('#gravityInputVal').on('input', updateOutput);
    $('#containerInputVal').on('input', updateOutput);
    $('#ThrustEffVal').on('input', updateOutput);

    $('#smContainerInput').on('input', updateOutput)
    $('#lgContainerInput').on('input', updateOutput)
    $('#medContainerInput').on('input', updateOutput)
    $('#modContainerInput').on('input', updateOutput)
}

function shipSizeListener() {
    // cargoContainersEnabled = !cargoContainersEnabled
    if (isSmallShip()) {
        initThrusterList(smallShipThrusters);
    }
    if (isSmallShip() && cargoContainersEnabled) {
        showMediumCargoContainer();
        showModularCargoContainer();
    };
    if (!isSmallShip()) {
        initThrusterList(largeShipThrusters);
        hideMediumCargoContainer();
        hideModularCargoContainer();
    };
    updateOutput();
}

function getShipWeight() {
    return $('#weightInputVal').val()
}

function getGravity() {
    return $('#gravityInputVal').val()
}

function getShipSize() {
    return $('#shipSizeSelect').val()
}

function isSmallShip() {
    return (getShipSize() == 'smallShip')
}

function getThrustEfficiency() {
    return $('#ThrustEffVal').val()
}

function gravitySelectEvent(event) {
    var option = gravityOptions[event.currentTarget.innerHTML.toLowerCase()]
    if (option) $('#gravityInputVal').val(option)
    updateOutput()
}

function containerMulSelectEvent(event) {
    var option = containerMultiplierOptions[event.currentTarget.innerHTML.toLowerCase()]
    if (option) $('#containerInputVal').val(option)
    updateOutput()
}

function getShipNewtons() {
    var shipWeight = Number(getShipWeight())
    var shipCargoWeight = getCargoWeight()
    var gravity = G * getGravity()
    return (shipWeight + shipCargoWeight) * gravity;
}

function getCargoWeight() {
    if (!cargoContainersEnabled) return 0;
    var weight = 0

    var count = getInputValues().cargo;
    if (isSmallShip()) {
        weight += count.small * smallShipCargo.small.size
        weight += count.medium * smallShipCargo.medium.size
        weight += count.large * smallShipCargo.large.size
        weight += count.modular * smallShipCargo.modular.size
    } else {
        weight += count.small * largeShipCargo.small.size
        weight += count.large * largeShipCargo.large.size
    }

    return weight * oreWeight * count.multiplier
}


function parseNewtons(n) {
    var ext = 'Newtons'
    if (n >= 10000) {
        n = n / 1000
        ext = 'kN'
    }
    var numFormat = new Intl.NumberFormat({
        style: 'decimal',
        maximumSignificantDigits: 2
    })
    return numFormat.format(n) + ' ' + ext;
}

function updateOutput() {
    $("#calculatedNewts").html(parseNewtons(getShipNewtons()))
    initThrusterList(isSmallShip() ? smallShipThrusters : largeShipThrusters)
    updateThrusterList();
}

function initThrusterList(list){
    document.getElementById("requirementThrusterList").innerHTML = "";
    for (var key in list){
        var e = $('<li id=' + key + '" class="list-group-item"></li>');
        let thruster = list[key]
        if (!showVanilla && thruster.vanilla) continue;
        e.text(thruster.name);
        e.html(e.html() + '<span class="float-right" id="' + key + 'Amnt">N/A</span>')
        $('#requirementThrusterList').append(e);
    }
}
    
function updateThrusterList(){
    let thrusterList = (isSmallShip()) ? smallShipThrusters : largeShipThrusters
    for (var key in thrusterList){
        let thruster = thrusterList[key]
        if (!showVanilla && thruster.vanilla) continue;
        let count = 0
        let shipForce = getShipNewtons()
        let thrusterForce = 0
        let thrustEff = getThrustEfficiency() / 100
        let initialGap = shipForce - thrusterForce
        let isPossible = true;
        while (thrusterForce < shipForce){
            let newCount = Math.ceil((shipForce - thrusterForce) / (thruster.thrust * thrustEff))
            thrusterForce += newCount * (thruster.thrust * thrustEff)
            let newThrusterWeightTotal = getNewtonsFromWeight(thruster.weight * newCount)
            shipForce += newThrusterWeightTotal
            count += newCount            
            let newGap = shipForce - thrusterForce
            if (newGap > initialGap) isPossible = false
            if (!isPossible) break;
        }
        let s = (isPossible) ? `${count} (${parseNewtons(thrusterForce)})` : 'N/A'
        $(`#${key}Amnt`).html(s);
    }
}

function getNewtonsFromWeight(weight){
    return (G * getGravity()) * weight
}
    
function getCargoContainerMultiplier(){
    return $('#containerInputVal').val()
}


function getInputValues() {
    return {
        weight: getShipWeight(),
        gravity: getGravity(),
        size: getShipSize(),
        thrustEff: getThrustEfficiency(),
        cargo: {
            large: Number($('#lgContainerInput').val()),
            medium: Number($('#medContainerInput').val()),
            small: Number($('#smContainerInput').val()),
            modular: Number($('#modContainerInput').val()),
            multiplier: Number($('#containerInputVal').val())
        }
    }
}

function toggleVanilla() {
    showVanilla = !showVanilla
    initThrusterList(isSmallShip() ? smallShipThrusters : largeShipThrusters)
    updateThrusterList()
}

function toggleCargoContainers() {
    cargoContainersEnabled = !cargoContainersEnabled
    $($('.cargoContainerElement')[0]).toggle();
    $($('.cargoContainerElement')[1]).toggle();
    $($('.cargoContainerElement')[2]).toggle();
    // $($('.cargoContainerElement')[2]).toggle();
    if (isSmallShip()) {
        toggleMediumCargoContainer();
        toggleModularCargoContainer();
    };
    $($('.cargoContainerElement')[4]).toggle();
    updateOutput()
}


let mediumCargoContainer = `$('.cargoContainerElement')[3]`
function toggleMediumCargoContainer() {
    $($('.cargoContainerElement')[3]).toggle();
}
function toggleModularCargoContainer() {
    $($('.cargoContainerElement')[5]).toggle();
}

function showMediumCargoContainer() {
    $($('.cargoContainerElement')[3]).css('display', 'flex');
    console.log($('.cargoContainerElement'));
}

function hideMediumCargoContainer() {
    $($('.cargoContainerElement')[3]).css('display', 'none');
}

function showModularCargoContainer() {
    $($('.cargoContainerElement')[5]).css('display', 'flex');
}

function hideModularCargoContainer() {
    $($('.cargoContainerElement')[5]).css('display', 'none');
    
}


for (var e of $('span.input-group-text'))
    e.style.width = '12.5rem';
// console.log(smallShipThrusters)

$('#cargoCheckboxLabel').addClass('input-group-text');
$('#cargoCheckboxSpan').addClass('input-group-text');
$('#cargoCheckbox').change(toggleCargoContainers)
$('#hideVanilla').change(toggleVanilla)

initInputHandlers()
initThrusterList(smallShipThrusters)
updateOutput()

toggleCargoContainers()
// toggleMediumCargoContainer()
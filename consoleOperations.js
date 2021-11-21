var consoleLogBtn = document.getElementById('console-log');
var consoleErrBtn = document.getElementById('console-error');
var consoleCntBtn = document.getElementById('console-count');
var consoleWrnBtn = document.getElementById('console-warn');
var consoleAstBtn = document.getElementById('console-assert');
var consoleClrBtn = document.getElementById('console-clear');
var consoleDirBtn = document.getElementById('console-dir');
var consoleDirxmlBtn = document.getElementById('console-dirxml');
var consoleGroupStrBtn = document.getElementById('console-group-start');
var consoleGroupEndBtn = document.getElementById('console-group-end');
var consoleTblBtn = document.getElementById('console-table');
var consoleStrTimerBtn = document.getElementById('start-timer');
var consoleEndTimerBtn = document.getElementById('end-timer');
var consoleTraceBtn = document.getElementById('console-trace');
var consoleGlobalErrBtn = document.getElementById('global-error');

const label = 'console.group';

consoleLogBtn.addEventListener('click', consoleLogFunc);
consoleErrBtn.addEventListener('click', consoleErrFunc);
consoleCntBtn.addEventListener('click', consoleCntFunc);
consoleWrnBtn.addEventListener('click', consoleWrnFunc);
consoleAstBtn.addEventListener('click', consoleAstFunc);
consoleClrBtn.addEventListener('click', consoleClrFunc);
consoleDirBtn.addEventListener('click', consoleDirFunc);
consoleDirxmlBtn.addEventListener('click', consoleDirxmlFunc);
consoleGroupStrBtn.addEventListener('click', consoleGroupStartFunc);
consoleGroupEndBtn.addEventListener('click', consoleGroupEndFunc);
consoleTblBtn.addEventListener('click', consoleTableFunc);
consoleStrTimerBtn.addEventListener('click', consoleStartTimerFunc);
consoleEndTimerBtn.addEventListener('click', consoleEndTimerFunc);
consoleTraceBtn.addEventListener('click', handleBtnClick);
consoleGlobalErrBtn.addEventListener('click', globalErrorFunc);

function consoleLogFunc() {
    console.log('Console Log Demo');
}
function consoleErrFunc() {
    console.error('Console Error Demo');
}
function consoleCntFunc() {
    console.count('Count Buttons');
}
function consoleWrnFunc() {
    console.warn('Console Warn Demo');
}
function consoleAstFunc() {
    const number = 2;
    const asserting = "The number does not equal 3";
    console.assert(2 == 3, {number, asserting});
}
function consoleClrFunc() {
    console.clear();
}
function consoleDirFunc() {
    console.dir(document.getElementById('console-dir'));
}
function consoleDirxmlFunc() {
    console.dirxml(document.getElementById('console-dirxml'));
}
function consoleGroupStartFunc() {
    console.group(label);
}
function consoleGroupEndFunc() {
    console.groupEnd(label);
}
function consoleTableFunc() {
    console.table([
        {
            name: "Software Engineering",
            length: 110,
        },
        {
            name: "Programming Language",
            length: 130,
        },
        {
            name: "Advanced Software",
            length:112,
        }
      ]);
}
function consoleStartTimerFunc() {
    console.time();
}
function consoleEndTimerFunc() {
    console.timeEnd();
}
function handleBtnClick() {
    const deep = () => { deeper(); };
    const deeper = () => { deepest(); };
    const deepest = () => { console.trace(); };
    deep();
}
function globalErrorFunc() {
    window.onerror = function() {
    };
    boon
}
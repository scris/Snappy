/**
 * Created by axxessio on 26.05.17.
 */
function DemoTest() {
    //all Blocks Visible
    Full = {'motion': [],'looks': [], 'sound':[], 'pen':[], 'control':[], 'sensing':[], 'operators':[], 'variables':[]};
    advanced = {'motion': [],'looks': [], 'sound':[], 'pen':[], 'control':[], 'sensing':[], 'operators':[], 'variables':[]};
    starter = {'motion': [],'looks': [], 'sound':[], 'pen':[], 'control':[], 'sensing':[], 'operators':[], 'variables':[]};

    //motion
    categ = [
        ['forward', 'Block'],
        ['turn', 'Block'],
        ['turnLeft', 'Block'],
        ['-','control'],
        ['setHeading', 'Block'],
        ['doFaceTowards', 'Block'],
        ['-','control'],
        ['gotoXY', 'Block'],
        ['doGotoObject', 'Block'],
        ['doGlide', 'Block'],
        ['-','control'],
        ['changeXPosition', 'Block'],
        ['setXPosition', 'Block'],
        ['changeYPosition', 'Block'],
        ['setYPosition', 'Block'],
        ['-','control'],
        ['bounceOffEdge', 'Block'],
        ['-','control'],
        ['xPosition', 'watcher'],
        ['yPosition', 'watcher'],
        ['direction', 'watcher']
    ];
    Full['motion'] = categ;

    categ = [
        ['forward', 'Block'],
        ['turn', 'Block'],
        ['turnLeft', 'Block'],
        ['-','control'],
        ['setHeading', 'Block'],
        ['doFaceTowards', 'Block'],
        ['-','control'],
        ['gotoXY', 'Block'],
        ['doGotoObject', 'Block'],
        ['doGlide', 'Block'],
        ['-','control'],
        ['changeXPosition', 'Block'],
        ['setXPosition', 'Block'],
        ['changeYPosition', 'Block'],
        ['setYPosition', 'Block'],
        ['-','control'],
        ['bounceOffEdge', 'Block']
    ];
    advanced['motion'] = categ;

    categ = [
        ['forward', 'Block'],
        ['turn', 'Block'],
        ['turnLeft', 'Block']
    ];
    starter['motion'] = categ;

    //locks
    categ = [
        ['doSwitchToCostume', 'Block'],
        ['doWearNextCostume', 'Block'],
        ['getCostumeIdx', 'watcher'],
        ['-','control'],
        ['doSayFor', 'Block'],
        ['bubble', 'Block'],
        ['doThinkFor', 'Block'],
        ['doThink', 'Block'],
        ['-','control'],
        ['changeEffect', 'Block'],
        ['setEffect', 'Block'],
        ['clearEffects', 'Block'],
        ['-','control'],
        ['changeScale', 'Block'],
        ['setScale', 'Block'],
        ['getScale', 'watcher'],
        ['-','control'],
        ['show', 'Block'],
        ['hide', 'Block'],
        ['-','control'],
        ['comeToFront', 'Block'],
        ['goBack', 'Block']
    ];
    Full['looks'] = categ;

    categ = [
        ['doSwitchToCostume', 'Block'],
        ['doWearNextCostume', 'Block'],
        ['-','control'],
        ['doSayFor', 'Block'],
        ['bubble', 'Block'],
        ['doThinkFor', 'Block'],
        ['doThink', 'Block'],
        ['-','control'],
        ['changeEffect', 'Block'],
        ['setEffect', 'Block'],
        ['-','control'],
        ['changeScale', 'Block'],
        ['setScale', 'Block'],
        ['-','control'],
        ['show', 'Block'],
        ['hide', 'Block'],
        ['-','control'],
        ['comeToFront', 'Block'],
        ['goBack', 'Block']
    ];
    advanced['looks'] = categ;

    categ = [
        ['doSwitchToCostume', 'Block'],
        ['doWearNextCostume', 'Block'],
        ['-','control'],
        ['doSayFor', 'Block'],
        ['bubble', 'Block'],
        ['doThinkFor', 'Block'],
        ['doThink', 'Block'],
        ['-','control'],
        ['show', 'Block'],
        ['hide', 'Block']
    ];
    starter['looks'] = categ;

    //sound
    categ = [
        ['playSound', 'Block'],
        ['doPlaySoundUntilDone', 'Block'],
        ['doStopAllSounds', 'Block'],
        ['-','control'],
        ['doRest', 'Block'],
        ['-','control'],
        ['doPlayNote', 'Block'],
        ['-','control'],
        ['doChangeTempo', 'Block'],
        ['doSetTempo', 'Block'],
        ['getTempo', 'watcher']
    ];
    Full['sound'] = categ;

    categ = [
        ['playSound', 'Block'],
        ['doPlaySoundUntilDone', 'Block'],
        ['doStopAllSounds', 'Block'],
        ['-','control'],
        ['doRest', 'Block'],
        ['-','control'],
        ['doPlayNote', 'Block'],
        ['-','control'],
        ['doChangeTempo', 'Block'],
        ['doSetTempo', 'Block']
    ];
    advanced['sound'] = categ;

    categ = [
        ['playSound', 'Block'],
        ['-','control'],
        ['doPlayNote', 'Block']
    ];
    starter['sound'] = categ;

    //Pen
    categ = [
        ['clear', 'Block'],
        ['-','control'],
        ['down', 'Block'],
        ['up', 'Block'],
        ['-','control'],
        ['setColor', 'Block'],
        ['changeHue', 'Block'],
        ['setHue', 'Block'],
        ['-','control'],
        ['changeBrightness', 'Block'],
        ['setBrightness', 'Block'],
        ['-','control'],
        ['changeSize', 'Block'],
        ['setSize', 'Block'],
        ['-','control'],
        ['doStamp', 'Block']
    ];
    Full['pen'] = categ;

    categ = [
        ['clear', 'Block'],
        ['-','control'],
        ['down', 'Block'],
        ['up', 'Block'],
        ['-','control'],
        ['setColor', 'Block'],
        ['changeHue', 'Block'],
        ['setHue', 'Block'],
        ['-','control'],
        ['changeBrightness', 'Block'],
        ['setBrightness', 'Block'],
        ['-','control'],
        ['changeSize', 'Block'],
        ['setSize', 'Block'],
        ['-','control'],
        ['doStamp', 'Block']
    ];
    advanced['pen'] = categ;

    categ = [
        ['clear', 'Block'],
        ['-','control'],
        ['down', 'Block'],
        ['up', 'Block'],
        ['-','control'],
        ['changeBrightness', 'Block'],
        ['setBrightness', 'Block'],
        ['-','control'],
        ['changeSize', 'Block'],
        ['setSize', 'Block']
    ];
    starter['pen'] = categ;

    //Control
    categ = [
        ['receiveGo', 'Block'],
        ['receiveKey', 'Block'],
        ['receiveInteraction', 'Block'],
        ['receiveMessage', 'Block'],
        ['-','control'],
        ['doBroadcast', 'Block'],
        ['doBroadcastAndWait', 'Block'],
        ['getLastMessage', 'watcher'],
        ['-','control'],
        ['doWarp', 'Block'],
        ['-','control'],
        ['doWait', 'Block'],
        ['doWaitUntil', 'Block'],
        ['-','control'],
        ['doForever', 'Block'],
        ['doRepeat', 'Block'],
        ['doUntil', 'Block'],
        ['-','control'],
        ['doIf', 'Block'],
        ['doIfElse', 'Block'],
        ['-','control'],
        ['doReport', 'Block'],
        ['-','control'],
        ['doStopThis', 'Block'],
        ['doStopOthers', 'Block'],
        ['-','control'],
        ['doRun', 'Block'],
        ['fork', 'Block'],
        ['evaluate', 'Block'],
        ['-','control'],
        ['doCallCC', 'Block'],
        ['reportCallCC', 'Block'],
        ['-','control'],
        ['receiveOnClone', 'Block'],
        ['createClone', 'Block'],
        ['removeClone', 'Block'],
        ['-','control'],
        ['doPauseAll', 'Block']
    ];
    Full['control'] = categ;

    categ = [
        ['receiveGo', 'Block'],
        ['receiveKey', 'Block'],
        ['receiveInteraction', 'Block'],
        ['receiveMessage', 'Block'],
        ['-','control'],
        ['getLastMessage', 'watcher'],
        ['-','control'],
        ['doWait', 'Block'],
        ['doWaitUntil', 'Block'],
        ['-','control'],
        ['doForever', 'Block'],
        ['doRepeat', 'Block'],
        ['doUntil', 'Block'],
        ['-','control'],
        ['doIf', 'Block'],
        ['doIfElse', 'Block'],
        ['-','control'],
        ['doStopThis', 'Block'],
        ['doStopOthers', 'Block'],
        ['-','control'],
        ['receiveOnClone', 'Block'],
        ['createClone', 'Block'],
        ['removeClone', 'Block']
    ];
    advanced['control'] = categ;

    categ = [
        ['receiveGo', 'Block'],
        ['receiveKey', 'Block'],
        ['receiveInteraction', 'Block'],
        ['-','control'],
        ['getLastMessage', 'watcher'],
        ['-','control'],
        ['doWait', 'Block'],
        ['doWaitUntil', 'Block'],
        ['-','control'],
        ['doForever', 'Block'],
        ['doRepeat', 'Block'],
        ['doUntil', 'Block'],
        ['-','control'],
        ['doIf', 'Block'],
        ['doIfElse', 'Block']
    ];
    starter['control'] = categ;

    //Sensing
    categ = [
        ['reportTouchingObject', 'Block'],
        ['reportTouchingColor', 'Block'],
        ['reportColorIsTouchingColor', 'Block'],
        ['-','control'],
        ['doAsk', 'Block'],
        ['getLastAnswer', 'watcher'],
        ['-','control'],
        ['reportMouseX', 'watcher'],
        ['reportMouseY', 'watcher'],
        ['reportMouseDown', 'Block'],
        ['-','control'],
        ['reportKeyPressed', 'Block'],
        ['-','control'],
        ['reportDistanceTo', 'Block'],
        ['-','control'],
        ['doResetTimer', 'Block'],
        ['getTimer', 'watcher'],
        ['-','control'],
        ['reportAttributeOf', 'Block'],
        ['-','control'],
        ['reportURL', 'Block'],
        ['-','control'],
        ['reportIsFastTracking', 'Block'],
        ['doSetFastTracking', 'Block'],
        ['-','control'],
        ['reportDate', 'Block']
    ];
    Full['sensing'] = categ;

    categ = [
        ['reportTouchingObject', 'Block'],
        ['reportTouchingColor', 'Block'],
        ['reportColorIsTouchingColor', 'Block'],
        ['-','control'],
        ['doAsk', 'Block'],
        ['getLastAnswer', 'watcher'],
        ['-','control'],
        ['reportMouseDown', 'Block'],
        ['-','control'],
        ['reportKeyPressed', 'Block']
    ];
    advanced['sensing'] = categ;

    categ = [
        ['reportTouchingObject', 'Block'],
        ['reportTouchingColor', 'Block'],
        ['-','control'],
        ['reportKeyPressed', 'Block']
    ];
    starter['sensing'] = categ;

    //Operators
    categ = [
        ['reifyScript', 'Block'],
        ['reifyReporter', 'Block'],
        ['reifyPredicate', 'Block'],
        ['#','control'],
        ['-','control'],
        ['reportSum', 'Block'],
        ['reportDifference', 'Block'],
        ['reportProduct', 'Block'],
        ['reportQuotient', 'Block'],
        ['-','control'],
        ['reportModulus', 'Block'],
        ['reportRound', 'Block'],
        ['reportMonadic', 'Block'],
        ['reportRandom', 'Block'],
        ['-','control'],
        ['reportLessThan', 'Block'],
        ['reportEquals', 'Block'],
        ['reportGreaterThan', 'Block'],
        ['-','control'],
        ['reportAnd', 'Block'],
        ['reportOr', 'Block'],
        ['reportNot', 'Block'],
        ['-','control'],
        ['reportTrue', 'Block'],
        ['reportFalse', 'Block'],
        ['-','control'],
        ['reportJoinWords', 'Block'],
        ['reportTextSplit', 'Block'],
        ['reportLetter', 'Block'],
        ['reportStringSize', 'Block'],
        ['-','control'],
        ['reportUnicode', 'Block'],
        ['reportUnicodeAsLetter', 'Block'],
        ['-','control'],
        ['reportIsA', 'Block'],
        ['reportIsIdentical', 'Block'],
        ['-','control'],
        ['reportJSFunction', 'Block']
    ];
    Full['operators'] = categ;

    categ = [
        ['reifyScript', 'Block'],
        ['reifyReporter', 'Block'],
        ['reifyPredicate', 'Block'],
        ['#','control'],
        ['-','control'],
        ['reportSum', 'Block'],
        ['reportDifference', 'Block'],
        ['reportProduct', 'Block'],
        ['reportQuotient', 'Block'],
        ['-','control'],
        ['reportRandom', 'Block'],
        ['-','control'],
        ['reportLessThan', 'Block'],
        ['reportEquals', 'Block'],
        ['reportGreaterThan', 'Block'],
        ['-','control'],
        ['reportAnd', 'Block'],
        ['reportOr', 'Block'],
        ['reportNot', 'Block'],
        ['-','control'],
        ['reportJoinWords', 'Block']
    ];
    advanced['operators'] = categ;

    categ = [
        ['reifyScript', 'Block'],
        ['reifyReporter', 'Block'],
        ['reifyPredicate', 'Block'],
        ['#','control'],
        ['-','control'],
        ['reportSum', 'Block'],
        ['reportDifference', 'Block'],
        ['reportProduct', 'Block'],
        ['reportQuotient', 'Block'],
        ['-','control'],
        ['reportLessThan', 'Block'],
        ['reportEquals', 'Block'],
        ['reportGreaterThan', 'Block'],
        ['-','control'],
        ['reportAnd', 'Block'],
        ['reportOr', 'Block'],
        ['reportNot', 'Block']
    ];
    starter['operators'] = categ;

    //Variables
    categ = [
        //TODO: unterpunkt variablen erg�nzen. startet mit butten!!
    ];
    Full['variables'] = categ;

    // end initilise

    return starter ;//Full;
}
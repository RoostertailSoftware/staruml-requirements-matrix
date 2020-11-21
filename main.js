/*
 * copyright (c) 2020 Roostertail Software. All right reserved.
 *
 */

const REQUIREMENTTYPE = "SysMLRequirementView"
const ERRORS = {
    ERROR_01: "Error 01 is happening right now.",
    ERROR_02: "Error 02 is happening right now."
}

let buildMatrix = () => {
    let views = app.selections.getSelectedViews()
    if ( views.length < 1 ) {
        app.toast.info( ERRORS.ERROR_01 );
        return;
    }

    return;
};

let init = () => {
    app.commands.register( 'staruml-requirements-matrix:start-matrix', buildMatrix );
}

exports.init = init;

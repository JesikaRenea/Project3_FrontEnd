import React from 'react';
import Navtabs from "./Navtabs"
import SkillsTable from "./SkillsTable";
import UserInputs from "./UserInputs"


const Definitions = props => {
    return (

        <div class="row mainRow1">
            <div class="col s2">
                <SkillsTable />
            </div>
            <div class="col s10">
                <Navtabs />
                <UserInputs />
            </div>
        </div>

    );
};

export default Definitions
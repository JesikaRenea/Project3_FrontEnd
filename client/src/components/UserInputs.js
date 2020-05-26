import React from 'react';
import SkillInput from "./SkillInput";
import DefinitionInput from "./DefinitionInput";
import LibraryInput from "./LibraryInput";

const UserInputs = props => {
    return (
        <div>
            <SkillInput />
            <DefinitionInput />
            <LibraryInput />
        </div>

    );
};

export default UserInputs
import React from 'react';
import SectionServicos from './SectionServicos';
import SectionPortal from './SectionPortal';
import SectionNova from './SectionNova';

function Main() {
    return (
        <main>
            <p>Sou o main da página</p>
            <SectionServicos/>
            <SectionPortal/>
            <SectionNova/>
        </main>
    );
}

export default Main;
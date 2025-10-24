import { useState } from 'react';

import { CORE_CONCEPTS } from './data.js';
import { EXAMPLES } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';

function App() {
  const [tabContent, setTabContent] = useState();

  function handleClickConcept(tabContent) {
    setTabContent(tabContent);
  }

  return (
    <div>
      <Header />
      <main>
        <section id ="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]}/>
            <CoreConcept {...CORE_CONCEPTS[1]}/>
            <CoreConcept {...CORE_CONCEPTS[2]}/>
            {/* Alternatively the long version: */}
            <CoreConcept 
              title={CORE_CONCEPTS[3].title} 
              description={CORE_CONCEPTS[3].description}
              image={CORE_CONCEPTS[3].image}/>
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onClick={() => {handleClickConcept(`Components`)}}>Components</TabButton>
            <TabButton onClick={() => {handleClickConcept(`JSX`)}}>JSX</TabButton>
            <TabButton onClick={() => {handleClickConcept(`Props`)}}>Props</TabButton>
            <TabButton onClick={() => {handleClickConcept(`State`)}}>State</TabButton>
          </menu>
          {!tabContent ? <p>Please select a topic.</p> : 
            <div id="tab-content">
              <h3>{EXAMPLES[tabContent.toLowerCase()].title}</h3>
              <p>{EXAMPLES[tabContent.toLowerCase()].description}</p>
              <pre>
                <code>
                  {EXAMPLES[tabContent.toLowerCase()].code}
                </code>
              </pre>
            </div>}

        </section>
      </main>
    </div>
  );
}

export default App;
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
            {
            CORE_CONCEPTS.map((concept) => (
              <CoreConcept {...concept}/>))
            }
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          
          <menu>
            <TabButton isSelected={tabContent === "Components"} onClick={() => {handleClickConcept("Components")}}>Components</TabButton>
            <TabButton isSelected={tabContent === "JSX"} onClick={() => {handleClickConcept("JSX")}}>JSX</TabButton>
            <TabButton isSelected={tabContent === "Props"} onClick={() => {handleClickConcept("Props")}}>Props</TabButton>
            <TabButton isSelected={tabContent === "State"} onClick={() => {handleClickConcept("State")}}>State</TabButton>
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
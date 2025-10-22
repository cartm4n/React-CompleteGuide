import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';

function App() {
  function handleClickConcept(title) {
    console.log(`You clicked the ${title} concept`);
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
          Dynamic Content
        </section>
      </main>
    </div>
  );
}

export default App;
import React from 'react'
import TabButton from './TabButton'
import { EXAMPLES } from '../data';
import { useState } from 'react';
import Section from './Section';
import Tabs from './Tabs';
export default function Examples() {
    const [selectedTopic, setSelectedTopic] = useState()
    function handleSelect(selectedButton) {


        setSelectedTopic(selectedButton);
    }
    let tabContent = <p>Please Select Menu</p>;
    if (selectedTopic) {
        tabContent = <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
        </div>
    }
    return (
        <Section id="examples">
            <h2>Examples</h2>
            <Tabs ButtonContainer='menu' 
             button={<>
                <TabButton
                    isSelected={selectedTopic === 'components'}
                    onSelect={() => handleSelect('components')}>Components</TabButton>
                <TabButton
                    isSelected={selectedTopic === 'jsx'}
                    onSelect={() => handleSelect('jsx')}>Jsx</TabButton>
                <TabButton
                    isSelected={selectedTopic === 'props'}
                    onSelect={() => handleSelect('props')}>Props</TabButton>
                <TabButton
                    isSelected={selectedTopic === 'state'}
                    onSelect={() => handleSelect('state')}>State</TabButton>
            </>}>
                
                    {tabContent}
            </Tabs>
            
        </Section>
    )
}

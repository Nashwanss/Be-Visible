
import { Disclosure } from '@headlessui/react'
import Toggle from 'react-styled-toggle';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faAngleUp } from '@fortawesome/free-solid-svg-icons';


import { faAngleRight, faPenToSquare } from '@fortawesome/free-solid-svg-icons';

import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

const Section = (props) => {
    return (
        <div className={"section " + props.cname}>
            {props.children}
        </div>
    );
}
const SectionTwo = (props) => {
    return (        
        <div className={"section " + props.cname}>
            {props.children}
        </div>
    );
}


const ProfDisclosure = (props) => {
    return <Section cname={"disclosure " + props.cname}>
        <Disclosure>
            {({ open }) => (
                <>  <div className="label">
                    <Disclosure.Button className={"button-disclosure"}>
                        <FontAwesomeIcon icon={props.icon} />
                        <h2>
                            {props.title}
                        </h2>
                        <FontAwesomeIcon icon={faAngleRight} className={`${open ? "arrow rotate-90" : "arrow"}`} />
                    </Disclosure.Button>
                    <div className="disclosure-edit">
                        {props.toggle === false ? null : <Toggle width={"40"} height={"24"} sliderWidth={"16"} sliderHeight={"16"} translate={"16"} backgroundColorChecked={"#3c8891"} onChange={() => props.editMode()} />}

                        {/* <FontAwesomeIcon className='edit' icon={faPenToSquare} onClick={() => props.editMode()} /> */}
                    </div>
                </div>
                    <Disclosure.Panel>{props.children}</Disclosure.Panel>
                </>
            )}
        </Disclosure>
    </Section>
}

const FilterDisclosure = (props) => {
    return <SectionTwo cname={"disclosure " + props.cname}>
        <Disclosure>
            {({ open }) => (  
                <>  <div className="label">
                    <Disclosure.Button className={"button-disclosure"}>
                        <FontAwesomeIcon icon={props.icon} />  
                         <h2>  
                            {props.title}   
                        </h2>
                        <FontAwesomeIcon icon={faAngleRight} className={`${open ? "arrow rotate-90" : "arrow"}`} />
                    </Disclosure.Button>
                </div>
                    <Disclosure.Panel>  
                        {props.children}</Disclosure.Panel>
                </>
            )}
        </Disclosure>
    </SectionTwo>
}                   

export { Section, SectionTwo, FilterDisclosure, ProfDisclosure }
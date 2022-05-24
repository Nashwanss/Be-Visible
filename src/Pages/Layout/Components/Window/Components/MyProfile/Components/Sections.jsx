
import { Disclosure } from '@headlessui/react'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faPenToSquare } from '@fortawesome/free-solid-svg-icons';


const Section = (props) => {
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
                    <Disclosure.Button>
                        <FontAwesomeIcon icon={props.icon} />
                        <h2>
                            {props.title}
                        </h2>
                        <FontAwesomeIcon icon={faAngleUp} className={`${open ? "arrow rotate-180" : "arrow"}`} />
                    </Disclosure.Button>
                    <div className="disclosure-edit">
                        <FontAwesomeIcon className='edit' icon={faPenToSquare} onClick={() => props.editMode()} />
                    </div>
                </div>
                    <Disclosure.Panel>{props.children}</Disclosure.Panel>
                </>
            )}
        </Disclosure>
    </Section>
}

export { Section, ProfDisclosure }
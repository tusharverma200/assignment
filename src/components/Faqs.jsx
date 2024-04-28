import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import 'tailwindcss/tailwind.css';

export default function AccordionUsage() {
    return (
        <div className="ml-10 bg-white mt-12 mb-72 "> {/* Add left margin using 'ml-10' class */}
            <h1 className="text-[40px] text-blue-900  font-bold mb-4">FAQ</h1>
            {/* Container for accordion components */}
            <div className="flex flex-col space-y-8 w-3/4"> {/* Use 'space-y-4' for margin between accordions and 'w-3/4' for width */}
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        <p>Can education flashcards be used for all age groups?</p>
                    </AccordionSummary>
                    <AccordionDetails>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                    >
                        <p>How do education flashcards work?</p>
                    </AccordionSummary>
                    <AccordionDetails>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </AccordionDetails>
                </Accordion>
                <Accordion defaultExpanded>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3-content"
                        id="panel3-header"
                    >
                        <p>Can education flashcards be used for test preparation?</p>
                    </AccordionSummary>
                    <AccordionDetails>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </AccordionDetails>
                    <AccordionActions>
                        <Button>Cancel</Button>
                        <Button>Agree</Button>
                    </AccordionActions>
                </Accordion>
            </div>
        </div>
    );
}

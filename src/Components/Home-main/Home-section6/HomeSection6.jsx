import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import pic1 from "../../../assests/image/Group 7.png";
import pic2 from "../../../assests/image/Group 6.png";
import pic3 from "../../../assests/image/Group 9.png";
import docsPic1 from "../../../assests/image/Rectangle 31.png";
import styles from "./HomeSection6.style.module.css";
import Button from '../../buttons/button.component';
import line from "../../../assests/image/Line 1.png";


const Homesection6 = () => {
    const [docs , setDocs] = React.useState([
        {"pic" : docsPic1 , "title" : "Lorem ipsum dolor sit amet consectetur. Magna." , "text" : "Lorem ipsum dolor sit amet consectetur. Etiam aliquet tristique turpis ultrices ac augue eu adipiscing turpis. Ultricies rhoncus semper in id nec faucibus non vulputate vestibulum. Pharetra a elementum in."},
        {"pic" : docsPic1 , "title" : "Lorem ipsum dolor sit amet consectetur. Magna." , "text" : "Lorem ipsum dolor sit amet consectetur. Etiam aliquet tristique turpis ultrices ac augue eu adipiscing turpis. Ultricies rhoncus semper in id nec faucibus non vulputate vestibulum. Pharetra a elementum in."},
        {"pic" : docsPic1 , "title" : "Lorem ipsum dolor sit amet consectetur. Magna." , "text" : "Lorem ipsum dolor sit amet consectetur. Etiam aliquet tristique turpis ultrices ac augue eu adipiscing turpis. Ultricies rhoncus semper in id nec faucibus non vulputate vestibulum. Pharetra a elementum in."}
    ])
    const [expanded , setExpanded] = React.useState({
        "case1": true,
        "case2" : true,
        "case3" : true,
        "case4" : true

});
    const addArticle = () =>{
        setDocs(prevDocs => ([...prevDocs , {"pic" : docsPic1 , "title" : "Lorem ipsum dolor sit amet consectetur. Magna." , "text" : "Lorem ipsum dolor sit amet consectetur. Etiam aliquet tristique turpis ultrices ac augue eu adipiscing turpis. Ultricies rhoncus semper in id nec faucibus non vulputate vestibulum. Pharetra a elementum in."} ,  {"pic" : docsPic1 , "title" : "Lorem ipsum dolor sit amet consectetur. Magna." , "text" : "Lorem ipsum dolor sit amet consectetur. Etiam aliquet tristique turpis ultrices ac augue eu adipiscing turpis. Ultricies rhoncus semper in id nec faucibus non vulputate vestibulum. Pharetra a elementum in."}]))
    }
    const handlechange = Case =>
    {
        if(Case === "case1"){
            if(expanded[Case] === true){setExpanded((prevExpanded) => ( {...prevExpanded, case1 : false}))}
            if(expanded[Case] === false){setExpanded((prevExpanded) => ( {...prevExpanded, case1 : true}))}
        }
        if(Case === "case2"){
            if(expanded[Case] === true){setExpanded((prevExpanded) => ( {...prevExpanded, case2 : false}))}
            if(expanded[Case] === false){setExpanded((prevExpanded) => ( {...prevExpanded, case2 : true}))}
        }
        if(Case === "case3"){
            if(expanded[Case] === true){setExpanded((prevExpanded) => ( {...prevExpanded, case3 : false}))}
            if(expanded[Case] === false){setExpanded((prevExpanded) => ( {...prevExpanded, case3 : true}))}
        }
        if(Case === "case4"){
            if(expanded[Case] === true){setExpanded((prevExpanded) => ( {...prevExpanded, case4 : false}))}
            if(expanded[Case] === false){setExpanded((prevExpanded) => ( {...prevExpanded, case4 : true}))}
        }

    }
    return (
        <div className='flex flex-col items-center align-middle justify-items-center '>
        <div className={styles.articles_bg}>
        <h4 className={styles.articlesSection_title}>latest Articles</h4>
        <div className={styles.articles_list}>{
            docs.map(element => {
                return(
                    <div className={styles.article}>
                  
                    <div className='  w-full  flex flex-col lg:flex-row justify-between items-center p-5  align-middle'>
                        <img  className={styles.articlePic} alt='' src={element.pic} />
                        <div className={styles.articleContext}>
                            <h5>{element.title}</h5>
                            <p>{element.text}</p>
                        </div>
                        <img alt='' className={styles.articleImg} src={line} />
                        <Button>Read</Button>
                    </div>
                    </div>
                )
            })
        }</div>
        <Button onClick={addArticle}>See all</Button>
        </div>
        <div className='flex flex-col align-middle justify-items-center md:justify-items-start items-center  md:items-start'>
            <h4 className={styles.section6_title}>Most Frequently Asked Questions</h4>
            <div className='flex flex-row align-middle  justify-around items-center'>
            <div className={styles.section6_list}>
            <Accordion className={styles.section6_accordion} onChange={()=>{
                handlechange("case1")
            }}>
        <AccordionSummary
          expandIcon={ expanded.case1 === true ?<AddOutlinedIcon/> : <RemoveOutlinedIcon/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={styles.Accordion_title}>Lorem ipsum dolor sit amet consectetur. Est ut vulputate scelerisque nibh?</Typography>
        </AccordionSummary>
        <AccordionDetails expandIcon={<Accordion/>}>
          <Typography>
          Lorem ipsum dolor sit amet consectetur. Urna non sit non quisque. Mauris purus neque accumsan purus elementum. Proin faucibus in suspendisse malesuada. Egestas nisl arcu sit non mi a. Tortor sed.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={styles.section6_accordion} onChange={()=>{
                handlechange("case2")
            }}>
        <AccordionSummary
          expandIcon={ expanded.case2 === true ?<AddOutlinedIcon/> : <RemoveOutlinedIcon/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Lorem ipsum dolor sit amet consectetur. Donec at ut diam sit vitae gravida nisi viverra augue?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={styles.section6_accordion} onChange={()=>{
                handlechange("case3")
            }}>
        <AccordionSummary
          expandIcon={ expanded.case3 === true ?<AddOutlinedIcon/> : <RemoveOutlinedIcon/>}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={styles.section6_accordion} onChange={()=>{
                handlechange("case4")
            }}>
        <AccordionSummary
          expandIcon={ expanded.case4 === true ?<AddOutlinedIcon/> : <RemoveOutlinedIcon/>}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
        </div>
        <div className={styles.Accordionlist_imges}>
            <img alt='' src={pic1} />
            <img alt='' src={pic2} />
            <img alt='' src={pic3} />
        </div>
            </div>
        </div>
        </div>
       
    );
}
 
export default Homesection6;

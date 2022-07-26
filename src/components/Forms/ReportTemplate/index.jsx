import React, { useState } from 'react'
import styles from "./styles.module.css"
import Input from '../Input'
import Select from '../../Select'
import DateInput from '../DateInput'
import FileInput from '../FileUpload/index'

import { TextArea } from '../..'
const ReportTemplate = () => {
  const [QAserialNumber,setQAserialNumber] = useState("");
  const [email,setEmail] =useState("")
  const [date,setDate]=useState("")
  const [solutionInitiate,setSolutionInitiate] = useState("")
  const [typeOfIntiative,setTypeOfIntiative]=useState("")
  const [status,setStatus] = useState("")
  const [QAEngineer,setQAEngineer] = useState("")
  const [phase,setPhase] = useState("")
  const [qualityStageGate,setQualityStageGate]= useState("")
  const [deliveryPhase,setDeliveryPhase]= useState("")
  const [riskIssues,setRiskIssues] = useState("")
  const [supportingDocument,setSupportingDocument] = useState("")
  const data = [
    {value:"bussiness solution"},
    {value:"data and AI"}
  ]
  return (
    <div className={styles.container}>
      <div className={styles.section1}>
        <div className={styles.inputContainer}>
          <Input title={"QA Serial Number"} 
          onChange={(e)=>setQAserialNumber(e.target.value)}
          value={QAserialNumber}
          type={"text"}/>
        </div>
        <div className={styles.inputContainer}>
          <Input title={"Email"} 
          onChange={(e)=>setEmail(e.target.value)}
          value={email}
          type={"email"}/>
        </div>
        <div className={styles.inputContainer}>
          <DateInput title={"Date"} 
          onChange={(e)=>setDate(e.target.value)}
          value={date}
          type={date}/>
        </div>
        <div className={styles.inputContainer}>
          <Input title={"Solution/Initiate"} 
          onChange={(e)=>setSolutionInitiate(e.target.value)}
          value={solutionInitiate}
          type={"text"}/>
        </div>
        <div className={styles.inputContainer}>
          <Select title={"Type of Intiative"}
          value={typeOfIntiative}
          options={data}
          onChange={(e)=>setTypeOfIntiative(e.target.value)}
          />
        </div>
        <div className={styles.inputContainer}>
          <Select title={"Status"}
          value={status}
          options={data}
          onChange={(e)=>setStatus(e.target.value)}/>
        </div>
        <div className={styles.inputContainer}>
          <Input title={"QA Engineer"} 
          onChange={(e)=>setQAEngineer(e.target.value)}
          value={QAEngineer}
          type={"text"}/>
        </div>
        <div className={styles.inputContainer}>
          <Select title={"Phase"}
          value={phase}
          options={data}
          onChange={(e)=>setPhase(e.target.value)}/>
        </div>
        <div className={styles.inputContainer}>
          <Input title={"Quality Stage Gate"} 
          onChange={(e)=>setQualityStageGate(e.target.value)}
          value={qualityStageGate}
          type={"text"}/>
        </div>
        <div className={styles.inputContainer}>
          <Input title={"Delivery Phase"} 
          onChange={(e)=>setDeliveryPhase(e.target.value)}
          value={deliveryPhase}
          type={"text"}/>
        </div>
        <div className={styles.inputContainer}>
          <TextArea title={"Risk/Issues"} 
          onChange={(e)=>setRiskIssues(e.target.value)}
          value={riskIssues}
          />
          </div>
          <div className={styles.inputContainer}>
          <FileInput title={"Supporting Document"} 
          onChange={(e)=>setSupportingDocument(e.target.value)}
          value={supportingDocument}
          type={"file"}
          />
        </div>
      </div>

      <h1>Conformance Status</h1> 

      <div className={styles.section2}>
      <div className={styles.inputContainer_left}>
          Title
      </div>

      <div className={styles.inputContainer_middle}>
      <div className={styles.qps}>Conformance</div>
          <div className={styles.weight} >Weight</div>
          <div className={styles.qps}>Qps</div>
      </div>
      <div className={styles.inputContainer_left}>
      Comment
    </div>

    <div className={styles.inputContainer_left}>
         Entrance
      </div>
      <div className={styles.inputContainer_middle}>
        <div className={styles.qps}>
        
        </div>
          <div className={styles.weight} ></div>
          <div className={styles.qps}></div>
        </div>

      <div className={styles.inputContainer_left}>
        
      </div>

       <div className={styles.inputContainer_left}>
          kicking off 
      </div>
      <div className={styles.inputContainer_middle}>
        <div className={styles.qps}>
        <Select title={"Phase"}
          value={phase}
          options={data}
          onChange={(e)=>setPhase(e.target.value)}/>
        </div>
      
          <div className={styles.weight} >10</div>
          <div className={styles.qps}>10</div>
      </div>
      <div className={styles.inputContainer_left}>
      
          <TextArea title={"Email"} 
          onChange={(e)=>setEmail(e.target.value)}
          value={email}
          type={"email"}/>
        
      </div>

      <div className={styles.inputContainer_left}>
         
      </div>
      <div className={styles.inputContainer_middle}>
        <div className={styles.qps}>
        Total
        </div>
          <div className={styles.weight} >20</div>
          <div className={styles.qps}>20</div>
        </div>
        
      <div className={styles.inputContainer_left}>
        
      </div>

      <div className={styles.inputContainer_left}>
         High Level Objectives
      </div>
      <div className={styles.inputContainer_middle}>
        <div className={styles.qps}>
        
        </div>
          <div className={styles.weight} ></div>
          <div className={styles.qps}></div>
        </div>

      <div className={styles.inputContainer_left}>
        
      </div>

      <div className={styles.inputContainer_left}>
          kicking off 
      </div>
      <div className={styles.inputContainer_middle}>
        <div className={styles.qps}>
        <Select title={"Phase"}
          value={phase}
          options={data}
          onChange={(e)=>setPhase(e.target.value)}/>
        </div>
      
          <div className={styles.weight} >10</div>
          <div className={styles.qps}>10</div>
      </div>
      <div className={styles.inputContainer_left}>
      
          <TextArea title={"Email"} 
          onChange={(e)=>setEmail(e.target.value)}
          value={email}
          type={"email"}/>
        
      </div>

      <div className={styles.inputContainer_left}>
          kicking off 
      </div>
      <div className={styles.inputContainer_middle}>
        <div className={styles.qps}>
        <Select title={"Phase"}
          value={phase}
          options={data}
          onChange={(e)=>setPhase(e.target.value)}/>
        </div>
      
          <div className={styles.weight} >10</div>
          <div className={styles.qps}>10</div>
      </div>
      <div className={styles.inputContainer_left}>
      
          <TextArea title={"Email"} 
          onChange={(e)=>setEmail(e.target.value)}
          value={email}
          type={"email"}/>
        
      </div>

      <div className={styles.inputContainer_left}>
          kicking off 
      </div>
      <div className={styles.inputContainer_middle}>
        <div className={styles.qps}>
        <Select title={"Phase"}
          value={phase}
          options={data}
          onChange={(e)=>setPhase(e.target.value)}/>
        </div>
      
          <div className={styles.weight} >10</div>
          <div className={styles.qps}>10</div>
      </div>
      <div className={styles.inputContainer_left}>
      
          <TextArea title={"Email"} 
          onChange={(e)=>setEmail(e.target.value)}
          value={email}
          type={"email"}/>
        
      </div>

      <div className={styles.inputContainer_left}>
         
         </div>
         <div className={styles.inputContainer_middle}>
           <div className={styles.qps}>
           Total
           </div>
             <div className={styles.weight} >20</div>
             <div className={styles.qps}>20</div>
           </div>
           
         <div className={styles.inputContainer_left}>
           
         </div>
         <div className={styles.inputContainer_left}>
         Exit
      </div>
      <div className={styles.inputContainer_middle}>
        <div className={styles.qps}>
        
        </div>
          <div className={styles.weight} ></div>
          <div className={styles.qps}></div>
        </div>

      <div className={styles.inputContainer_left}>
        
      </div>
      
      <div className={styles.inputContainer_left}>
          kicking off 
      </div>
      <div className={styles.inputContainer_middle}>
        <div className={styles.qps}>
        <Select title={"Phase"}
          value={phase}
          options={data}
          onChange={(e)=>setPhase(e.target.value)}/>
        </div>
      
          <div className={styles.weight} >10</div>
          <div className={styles.qps}>10</div>
      </div>
      <div className={styles.inputContainer_left}>
      
          <TextArea title={"Email"} 
          onChange={(e)=>setEmail(e.target.value)}
          value={email}
          type={"email"}/>
        
      </div>
      <div className={styles.inputContainer_left}>
          kicking off 
      </div>
      <div className={styles.inputContainer_middle}>
        <div className={styles.qps}>
        <Select title={"Phase"}
          value={phase}
          options={data}
          onChange={(e)=>setPhase(e.target.value)}/>
        </div>
      
          <div className={styles.weight} >10</div>
          <div className={styles.qps}>10</div>
      </div>
      <div className={styles.inputContainer_left}>
      
          <TextArea title={"Email"} 
          onChange={(e)=>setEmail(e.target.value)}
          value={email}
          type={"email"}/>
        
      </div>
      <div className={styles.inputContainer_left}>
          kicking off 
      </div>
      <div className={styles.inputContainer_middle}>
        <div className={styles.qps}>
        <Select title={"Phase"}
          value={phase}
          options={data}
          onChange={(e)=>setPhase(e.target.value)}/>
        </div>
      
          <div className={styles.weight} >10</div>
          <div className={styles.qps}>10</div>
      </div>
      <div className={styles.inputContainer_left}>
      
          <TextArea title={"Email"} 
          onChange={(e)=>setEmail(e.target.value)}
          value={email}
          type={"email"}/>
        
      </div>
      <div className={styles.inputContainer_left}>
          kicking off 
      </div>
      <div className={styles.inputContainer_middle}>
        <div className={styles.qps}>
        <Select title={"Phase"}
          value={phase}
          options={data}
          onChange={(e)=>setPhase(e.target.value)}/>
        </div>
      
          <div className={styles.weight} >10</div>
          <div className={styles.qps}>10</div>
      </div>
      <div className={styles.inputContainer_left}>
      
          <TextArea title={"Email"} 
          onChange={(e)=>setEmail(e.target.value)}
          value={email}
          type={"email"}/>
        
      </div>
      <div className={styles.inputContainer_left}>
          kicking off 
      </div>
      <div className={styles.inputContainer_middle}>
        <div className={styles.qps}>
        <Select title={"Phase"}
          value={phase}
          options={data}
          onChange={(e)=>setPhase(e.target.value)}/>
        </div>
      
          <div className={styles.weight} >10</div>
          <div className={styles.qps}>10</div>
      </div>
      <div className={styles.inputContainer_left}>
      
          <TextArea title={"Email"} 
          onChange={(e)=>setEmail(e.target.value)}
          value={email}
          type={"email"}/>
        
      </div>
      <div className={styles.inputContainer_left}>
         
      </div>
      <div className={styles.inputContainer_middle}>
        <div className={styles.qps}>
        Total
        </div>
          <div className={styles.weight} >20</div>
          <div className={styles.qps}>20</div>
        </div>
        
      <div className={styles.inputContainer_left}>
        
      </div>
      <div className={styles.inputContainer_left}>
         
      </div>
      <div className={styles.inputContainer_middle}>
        <div className={styles.qps}>
        Total
        </div>
          <div className={styles.weight} >20</div>
          <div className={styles.qps}>20</div>
        </div>
        
      <div className={styles.inputContainer_left}>
        
      </div>
      </div>

    </div>
  )
}

export default ReportTemplate
import React, { useState } from 'react'
import styles from "./styles.module.css"
import Input from '../Input'
import Select from '../../Select'
import Select2 from '../../Select/select2'
import DateInput from '../DateInput'
import FileInput from '../FileUpload/index'
import { TextArea } from '../..'
import Textarea2 from '../Textarea/textarea2'
const ReportTemplate = ({ABR_onchange_conformance,
  ABR_comment_value,
  ABR_comment_onchange,
  ABR_data,
  ABR_value_conformance,
  ABR_qps,
  ABR_weight,
  Entrance_qps_total,
  Entrance_weight_total,
KOM_onchange_conformance,
KOM_comment_value,
KOM_comment_onchange,
KOM_data,
KOM_value_conformance,
KOM_qps,
KOM_weight,
RA_comment_onchange,
RA_onchange_conformance,
RA_value_conformance,
RA_data,
RA_qps,
RA_weight,
RA_comment_value,
ESBI_comment_onchange,
ESBI_comment_value,
ESBI_data,
ESBI_onchange_conformance,
ESBI_qps,
ESBI_weight,
ESBI_value_conformance,
DPS_comment_onchange,
DPS_comment_value,
DPS_data,
DPS_onchange_conformance,
DPS_qps,
DPS_value_conformance,
DPS_weight,
DPP_comment_onchange,
DPP_comment_value,
DPP_data,
DPP_onchange_conformance,
DPP_qps,
DPP_value_conformance,
DPP_weight,
AIA_comment_onchange,
AIA_comment_value,
AIA_data,
AIA_onchange_conformance,
AIA_qps,
AIA_value_conformance,
AIA_weight,
LTM_comment_onchange,
LTM_comment_value,
LTM_data,
LTM_onchange_conformance,
LTM_qps,
LTM_value_conformance,
LTM_weight,
ROG_comment_onchange,
ROG_comment_value,
ROG_data,
ROG_onchange_conformance,
ROG_qps,
ROG_value_conformance,
ROG_weight,
SCU_comment_onchange,
SCU_comment_value,
SCU_data,
SCU_onchange_conformance,
SCU_qps,
SCU_value_conformance,
SCU_weight,
HLO_qps_total,
HLO_weight_total,
Exit_qps_total,
Exit_weight_total,
Gate_qps_total,
Gate_weight_total,
QAserialNumber_value,
QAserial_onchange,
email_onchange,
email_value,
date_onchange,
date_value,
solutionInitiate_onchange,
solutionInitiate_value,
typeOfIntiative_onchange,
typeOfIntiative_value,
status_onchange,
status_value,
QAEngineer_onchange,
QAEngineer_value,
phase_onchange,
phase_value,
qualityStageGate_onchange,
qualityStageGate_value,
deliveryPhase_value,
DeliveryPhase_onchange,
riskIssues_value,
RiskIssues_onchange,
supportingDocument_value,
SupportingDocument_onchange
}) => {
  
  
  
  
  
  // const [phase,setPhase] = useState("")
  // const [qualityStageGate,setQualityStageGate]= useState("")
  // const [deliveryPhase,setDeliveryPhase]= useState("")
  // const [riskIssues,setRiskIssues] = useState("")
  // const [supportingDocument,setSupportingDocument] = useState("")
  const data = [
    {value:"bussiness solution"},
    {value:"data and AI"}
  ]
  return (
    <div className={styles.container}>
      <div className={styles.section1}>
        <div className={styles.inputContainer}>
          <Input title={"QA Serial Number"} 
          onChange={QAserial_onchange}
          value={QAserialNumber_value}
          type={"text"}/>
        </div>
        <div className={styles.inputContainer}>
          <Input title={"Email"} 
          onChange={email_onchange}
          value={email_value}
          type={"email"}/>
        </div>
        <div className={styles.inputContainer}>
          <DateInput title={"Date"} 
          onChange={date_onchange}
          value={date_value}
          type={"date"}/>
        </div>
        <div className={styles.inputContainer}>
          <Input title={"Solution/Initiate"} 
          onChange={solutionInitiate_onchange}
          value={solutionInitiate_value}
          type={"text"}/>
        </div>
        
        <div className={styles.inputContainer}>
          <Select title={"Type of Intiative"}
          value={typeOfIntiative_value}
          options={data}
          onChange={typeOfIntiative_onchange}
          />
        </div>
        <div className={styles.inputContainer}>
          <Select title={"Status"}
          value={status_value}
          options={data}
          onChange={status_onchange}/>
        </div>
        <div className={styles.inputContainer}>
          <Input title={"QA Engineer"} 
          onChange={QAEngineer_onchange}
          value={QAEngineer_value}
          type={"text"}/>
        </div>
        <div className={styles.inputContainer}>
          <Select title={"Phase"}
          value={phase_value}
          options={data}
          onChange={phase_onchange}/>
        </div>
        <div className={styles.inputContainer}>
          <Input title={"Quality Stage Gate"} 
          onChange={qualityStageGate_onchange}
          value={qualityStageGate_value}
          type={"text"}/>
        </div>
        <div className={styles.inputContainer}>
          <Input title={"Delivery Phase"} 
          onChange={DeliveryPhase_onchange}
          value={deliveryPhase_value}
          type={"text"}/>
        </div>
        <div className={styles.inputContainer}>
          <TextArea title={"Risk/Issues"} 
          onChange={RiskIssues_onchange}
          value={riskIssues_value}
          />
          </div>
          <div className={styles.inputContainer}>
          <FileInput title={"Supporting Document"} 
          onChange={SupportingDocument_onchange}
          value={supportingDocument_value}
          type={"file"}
          />
        </div>
      </div>

      <h1>Conformance Status</h1> 

      <div className={`${styles.section2 } ${styles.purple}`}>
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
    </div>


    <div className={`${styles.section2 } ${styles.gray}`}>
      <div className={styles.inputContainer_left}>
          Entrance
      </div>

      <div className={styles.inputContainer_middle}>
      <div className={styles.qps}></div>
          <div className={styles.weight} ></div>
          <div className={styles.qps}></div>
      </div>
      <div className={styles.inputContainer_left}>
      
    </div>
    </div>


    <div className={styles.section2}>
    <div className={`${styles.inputContainer_left} ${styles.border}` }>
         Approved Bussiness Requirement
      </div>
      <div className={`${styles.inputContainer_middle} ${styles.border_middle}`}>
        <div className={styles.qps}>
        <Select2 title={"Select a value"}
          value={ABR_value_conformance}
          options={ABR_data}
          onChange={ABR_onchange_conformance}/>
        </div>
          <div className={`${styles.weight} ${styles.weight_border}`} >{ABR_weight}</div>
          <div className={styles.qps}>{ABR_qps}</div>
        </div>

      <div className={`${styles.inputContainer_left} ${styles.border}` }>
      <Textarea2
          onChange={ABR_comment_onchange}
          value={ABR_comment_value}
          type={"text"}/>
      </div>
</div>

<div className={styles.section2}>
      <div className={`${styles.inputContainer_left} ${styles.border}` }>
          
      </div>

      <div className={`${styles.inputContainer_middle} ${styles.purple}`}>
      <div className={styles.qps}>Total</div>
          <div className={styles.weight}  >{Entrance_weight_total}</div>
          <div className={styles.qps}>{Entrance_qps_total}</div>
      </div>
      <div div className={`${styles.inputContainer_left} ${styles.border}` }>
  </div>
   </div>

   <div className={`${styles.section2 } ${styles.gray}`}>
      <div className={styles.inputContainer_left}>
          High Level Objective
      </div>

      <div className={styles.inputContainer_middle}>
      <div className={styles.qps}></div>
          <div className={styles.weight} ></div>
          <div className={styles.qps}></div>
      </div>
      <div className={styles.inputContainer_left}>
      
    </div>
    </div>

    <div className={styles.section2}>
    <div className={`${styles.inputContainer_left} ${styles.border}` }>
         Kick off meeting
      </div>
      <div className={`${styles.inputContainer_middle} ${styles.border_middle}`}>
        <div className={styles.qps}>
        <Select2 title={"Select a value"}
          value={KOM_value_conformance}
          options={KOM_data}
          onChange={KOM_onchange_conformance}/>
        </div>
          <div className={`${styles.weight} ${styles.weight_border}`} >
          <Select2 title={"Select a value"}
          value={KOM_value_conformance}
          options={KOM_data}
          onChange={KOM_onchange_conformance}/>
            </div>
          <div className={styles.qps}>{KOM_qps}</div>
        </div>

      <div className={`${styles.inputContainer_left} ${styles.border}` }>
      <Textarea2
          onChange={KOM_comment_onchange}
          value={KOM_comment_value}
          type={"text"}/>
      </div>
</div>

<div className={styles.section2}>
    <div className={`${styles.inputContainer_left} ${styles.border}` }>
         Risk Assessment
      </div>
      <div className={`${styles.inputContainer_middle} ${styles.border_middle}`}>
        <div className={styles.qps}>
        <Select2 title={"Select a value"}
          value={RA_value_conformance}
          options={RA_data}
          onChange={RA_onchange_conformance}/>
        </div>
          <div className={`${styles.weight} ${styles.weight_border}`} >{RA_weight}</div>
          <div className={styles.qps}>{RA_qps}</div>
        </div>

      <div className={`${styles.inputContainer_left} ${styles.border}` }>
      <Textarea2
          onChange={RA_comment_onchange}
          value={RA_comment_value}
          type={"text"}/>
      </div>
</div>

<div className={styles.section2}>
    <div className={`${styles.inputContainer_left} ${styles.border}` }>
         Evaluate System & Bussiness Impact
      </div>
      <div className={`${styles.inputContainer_middle} ${styles.border_middle}`}>
        <div className={styles.qps}>
        <Select2 title={"Select a value"}
          value={ESBI_value_conformance}
          options={ESBI_data}
          onChange={ESBI_onchange_conformance}/>
        </div>
          <div className={`${styles.weight} ${styles.weight_border}`} >{ESBI_weight}</div>
          <div className={styles.qps}>{ESBI_qps}</div>
        </div>

      <div className={`${styles.inputContainer_left} ${styles.border}` }>
      <Textarea2
          onChange={ESBI_comment_onchange}
          value={ESBI_comment_value}
          type={"text"}/>
      </div>
</div>
<div className={styles.section2}>
      <div className={`${styles.inputContainer_left} ${styles.border}` }>
          
      </div>

      <div className={`${styles.inputContainer_middle} ${styles.purple}`}>
      <div className={styles.qps}>Total</div>
          <div className={styles.weight}  >{HLO_weight_total}</div>
          <div className={styles.qps}>{HLO_qps_total}</div>
      </div>
      <div div className={`${styles.inputContainer_left} ${styles.border}` }>
  </div>
   </div>
   <div className={`${styles.section2 } ${styles.gray}`}>
      <div className={styles.inputContainer_left}>
          Exit
      </div>

      <div className={styles.inputContainer_middle}>
      <div className={styles.qps}></div>
          <div className={styles.weight} ></div>
          <div className={styles.qps}></div>
      </div>
      <div className={styles.inputContainer_left}>
      
    </div>
    </div>
    <div className={styles.section2}>
    <div className={`${styles.inputContainer_left} ${styles.border}` }>
          Draft Project Scope
      </div>
      <div className={`${styles.inputContainer_middle} ${styles.border_middle}`}>
        <div className={styles.qps}>
        <Select2 title={"Select a value"}
          value={DPS_value_conformance}
          options={DPS_data}
          onChange={DPS_onchange_conformance}/>
        </div>
          <div className={`${styles.weight} ${styles.weight_border}`} >{DPS_weight}</div>
          <div className={styles.qps}>{DPS_qps}</div>
        </div>

      <div className={`${styles.inputContainer_left} ${styles.border}` }>
      <Textarea2
          onChange={DPS_comment_onchange}
          value={DPS_comment_value}
          type={"text"}/>
      </div>
</div>
<div className={styles.section2}>
    <div className={`${styles.inputContainer_left} ${styles.border}` }>
          Draft Project Plan
      </div>
      <div className={`${styles.inputContainer_middle} ${styles.border_middle}`}>
        <div className={styles.qps}>
        <Select2 title={"Select a value"}
          value={DPP_value_conformance}
          options={DPP_data}
          onChange={DPP_onchange_conformance}/>
        </div>
          <div className={`${styles.weight} ${styles.weight_border}`} >{DPP_weight}</div>
          <div className={styles.qps}>{DPP_qps}</div>
        </div>

      <div className={`${styles.inputContainer_left} ${styles.border}` }>
      <Textarea2
          onChange={DPP_comment_onchange}
          value={DPP_comment_value}
          type={"text"}/>
      </div>
</div>

<div className={styles.section2}>
    <div className={`${styles.inputContainer_left} ${styles.border}` }>
          AIA Project
      </div>
      <div className={`${styles.inputContainer_middle} ${styles.border_middle}`}>
        <div className={styles.qps}>
        <Select2 title={"Select a value"}
          value={AIA_value_conformance}
          options={AIA_data}
          onChange={AIA_onchange_conformance}/>
        </div>
          <div className={`${styles.weight} ${styles.weight_border}`} >{AIA_weight}</div>
          <div className={styles.qps}>{AIA_qps}</div>
        </div>

      <div className={`${styles.inputContainer_left} ${styles.border}` }>
      <Textarea2
          onChange={AIA_comment_onchange}
          value={AIA_comment_value}
          type={"text"}/>
      </div>
</div>

<div className={styles.section2}>
    <div className={`${styles.inputContainer_left} ${styles.border}` }>
          LTM Model on Abacus
      </div>
      <div className={`${styles.inputContainer_middle} ${styles.border_middle}`}>
        <div className={styles.qps}>
        <Select2 title={"Select a value"}
          value={LTM_value_conformance}
          options={LTM_data}
          onChange={LTM_onchange_conformance}/>
        </div>
          <div className={`${styles.weight} ${styles.weight_border}`} >{LTM_weight}</div>
          <div className={styles.qps}>{LTM_qps}</div>
        </div>

      <div className={`${styles.inputContainer_left} ${styles.border}` }>
      <Textarea2
          onChange={LTM_comment_onchange}
          value={LTM_comment_value}
          type={"text"}/>
      </div>
</div>

<div className={styles.section2}>
    <div className={`${styles.inputContainer_left} ${styles.border}` }>
          Risk OG
      </div>
      <div className={`${styles.inputContainer_middle} ${styles.border_middle}`}>
        <div className={styles.qps}>
        <Select2 title={"Select a value"}
          value={ROG_value_conformance}
          options={ROG_data}
          onChange={ROG_onchange_conformance}/>
        </div>
          <div className={`${styles.weight} ${styles.weight_border}`} >{ROG_weight}</div>
          <div className={styles.qps}>{ROG_qps}</div>
        </div>

      <div className={`${styles.inputContainer_left} ${styles.border}` }>
      <Textarea2
          onChange={ROG_comment_onchange}
          value={ROG_comment_value}
          type={"text"}/>
      </div>
</div>

<div className={styles.section2}>
    <div className={`${styles.inputContainer_left} ${styles.border}` }>
          Service Catalog Update
      </div>
      <div className={`${styles.inputContainer_middle} ${styles.border_middle}`}>
        <div className={styles.qps}>
        <Select2 title={"Select a value"}
          value={SCU_value_conformance}
          options={SCU_data}
          onChange={SCU_onchange_conformance}/>
        </div>
          <div className={`${styles.weight} ${styles.weight_border}`} >{SCU_weight}</div>
          <div className={styles.qps}>{SCU_qps}</div>
        </div>

      <div className={`${styles.inputContainer_left} ${styles.border}` }>
      <Textarea2
          onChange={SCU_comment_onchange}
          value={SCU_comment_value}
          type={"text"}/>
      </div>
</div>

<div className={styles.section2}>
      <div className={`${styles.inputContainer_left} ${styles.border}` }>
          
      </div>

      <div className={`${styles.inputContainer_middle} ${styles.purple}`}>
      <div className={styles.qps}>Total</div>
          <div className={styles.weight}  >{Exit_weight_total}</div>
          <div className={styles.qps}>{Exit_qps_total}</div>
      </div>
      <div div className={`${styles.inputContainer_left} ${styles.border}` }>
  </div>
   </div>
   <div></div>
   <div className={styles.section2}>
      <div className={`${styles.inputContainer_left} ${styles.border}` }>
          
      </div>

      <div className={`${styles.inputContainer_middle} ${styles.purple}`}>
      <div className={styles.qps}>Gate total</div>
          <div className={styles.weight}  >{Gate_weight_total}</div>
          <div className={styles.qps}>{Gate_qps_total}</div>
      </div>
      <div div className={`${styles.inputContainer_left} ${styles.border}` }>
  </div>
   </div>
    </div>
  )
}

export default ReportTemplate
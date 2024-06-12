import AkashImage from "../images/Akash.jpeg";
import EmmilyImage from "../images/Emilly.avif";
import NathanImage from "../images/Nathan.avif";
import JessicaImage from "../images/Jessica.jpeg";
import RyanImage from "../images/Ryan.jpeg";
import SamanthaImage from "../images/Samantha.webp";
import TylerImage from "../images/Tyler.jpeg";
import OliviaImage from "../images/Olivia.jpeg";



const data = [
  {
      name: 'Akash',
      gender: 'Male',
      contact: '9882234285',
      dob:'13 may, 2002',
      age:'22',
      emergencyContact: '7219749197',
      insuranceProvider: 'LIC',
      respiratoryRate: '20',
      Temperature: '98.6',
      heartRate: '78',
      image : AkashImage,
      diagnosticList: [{
          problem: 'Hypertension',
          description: 'Chronic high blood pressure',
          status: 'Under Observation',
      }],
      labTest: [
          {
              testName: 'CBC',
          },
          {
              testName: 'ECG',
          },
          {
              testName: 'ECG',
          },
          {
              testName: 'ECG',
          },
          {
              testName: 'ECG',
          },
      ]


  },
  {
      name: 'Emilly Williams',
      gender: 'Female',
      dob:'13 April, 2004',
      age:'20',
      contact: '8234567890',
      emergencyContact: '0987654321',
      insuranceProvider: 'Bajaj Allianz',
      respiratoryRate: '18',
      Temperature: '98.4',
      heartRate: '72',
      image : EmmilyImage,
      diagnosticList: [{
          problem: 'Diabetes',
          description: 'High blood sugar levels',
          status: 'Active',
      }],
      labTest: [
          {
              testName: 'Urine Test',
          },
          {
              testName: 'Blood Test',
          },
          {
              testName: 'X-ray',
          },
      ]
  },
  {
      name: 'Nathan Evans',
      gender: 'Male',
      contact: '9876543210',     
         age:'24',

      dob:'10 June, 2000',
      emergencyContact: '1234567890',
      insuranceProvider: 'Care Insurance',
      respiratoryRate: '16',
      Temperature: '99.2',
      heartRate: '80',
      image : NathanImage,
      diagnosticList: [{
          problem: 'Asthma',
          description: 'Chronic inflammation of the airways',
          status: 'Under Treatment',
      }],
      labTest: [
          {
              testName: 'Stress Test',
          },
          {
              testName: 'CT Scan',
          },
          {
              testName: 'Blood Test',
          },
      ]
  },

  {
    name: 'Jessica Taylor',
    gender: 'Female',
    contact: '8882233485',
    dob:'26 feb, 1999',
    age:'25',
    emergencyContact: '7219749197',
    insuranceProvider: 'Bajaj',
    respiratoryRate: '25',
    Temperature: '99.6',
    heartRate: '70',
    image : JessicaImage,
    diagnosticList: [{
        problem: 'Asthma',
        description: 'Loss of breath',
        status: 'Under Observation',
    }],
    labTest: [
        {
            testName: 'FeNO',
        },
        {
            testName: 'ECG',
        },
        {
            testName: 'CBC',
        },
        {
            testName: 'ECG',
        },
        {
            testName: 'ECG',
        },
    ]


},

{
    name: 'Ryan Evans',
    gender: 'Male',
    contact: '7876543210',     
       age:'27',

    dob:'29 June, 1997',
    emergencyContact: '8234567890',
    insuranceProvider: 'Star Insurance',
    respiratoryRate: '22',
    Temperature: '96.2',
    heartRate: '85',
    image : RyanImage,
    diagnosticList: [{
        problem: 'Asthma',
        description: 'Chronic inflammation of the airways',
        status: 'Under Treatment',
    }],
    labTest: [
        {
            testName: 'Stress Test',
        },
        {
            testName: 'CT Scan',
        },
        {
            testName: 'Blood Test',
        },
    ]
},
{
name: 'Samantha',
gender: 'Female',
contact: '8876548210',     
   age:'26',

dob:'29 June, 1998',
emergencyContact: '8234567890',
insuranceProvider: 'Acno Insurance',
respiratoryRate: '12',
Temperature: '98.2',
heartRate: '82',
image : SamanthaImage,
diagnosticList: [{
    problem: 'Asthma',
    description: 'Chronic inflammation of the airways',
    status: 'Under Treatment',
}],
labTest: [
    {
        testName: 'Stress Test',
    },
    {
        testName: 'CT Scan',
    },
    {
        testName: 'Blood Test',
    },
]
},

{
    name: 'Tyler Davis',
    gender: 'Male',
    contact: '6876543210',     
       age:'34',

    dob:'23 July, 1990',
    emergencyContact: '8234567778',
    insuranceProvider: 'Magma Insurance',
    respiratoryRate: '16',
    Temperature: '98.5',
    heartRate: '88',
    image : TylerImage,
    diagnosticList: [{
        problem: 'Asthma',
        description: 'Chronic inflammation of the airways',
        status: 'Under Treatment',
    }],
    labTest: [
        {
            testName: 'Stress Test',
        },
        {
            testName: 'CT Scan',
        },
        {
            testName: 'Blood Test',
        },
    ]
},


{
    name: 'Olivia Brwon',
    gender: 'Female',
    contact: '7876548210',     
       age:'27',
    
    dob:'29 June, 1997',
    emergencyContact: '8234567890',
    insuranceProvider: 'Oriental Insurance',
    respiratoryRate: '16',
    Temperature: '98.6',
    heartRate: '75',
    image : OliviaImage,
    diagnosticList: [{
        problem: 'Asthma',
        description: 'Chronic inflammation of the airways',
        status: 'Under Treatment',
    }],
    labTest: [
        {
            testName: 'Stress Test',
        },
        {
            testName: 'CT Scan',
        },
        {
            testName: 'Blood Test',
        },
    ]
    },


]
export default data;
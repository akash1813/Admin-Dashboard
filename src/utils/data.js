import AkashImage from "../images/Pc.jpeg";
import EmmilyImage from "../images/Jessica.jpeg";
import NathanImage from "../images/Tyler.jpeg";
import JessicaImage from "../images/Olivia.jpeg";
import RyanImage from "../images/Ryan.jpeg";
import SamanthaImage from "../images/Samantha.webp";
import TylerImage from "../images/Nathan.avif";
import OliviaImage from "../images/Emilly.avif";
import AnmolImage from "../images/Anmol.jpeg";
import GitImage from "../images/Git.avif";
import RanbirImage from "../images/Ranbir.jpeg";



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
      }, 
      {
        problem: 'Diabetes',
        description: 'High blood sugar levels',
        status: 'Active',
    },
    {
        problem: 'Diabetes',
        description: 'High blood sugar levels',
        status: 'Active',
    },
    {
        problem: 'Diabetes',
        description: 'High blood sugar levels',
        status: 'Active',
    },
    
],
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
          {
            testName: 'ECG',
        },
        {
            testName: 'ECG',
        },
      ],

      lineChartData : {
        labels:[
            "Oct, 2023",
            "Nov, 2023",
            "Dec, 2023",
            "Jan, 2024",
            "Feb, 2024",
            "Mar, 2024",
        ],
        datasets:[
            {
                label: "Systolic",
                data: [120, 119, 160,155, 124, 138],
                borderColor: '#E66FD2',
                lineTension:0.4,
                pointRadius : 5,
                pointBackgroundColor: '#E66FD2',

                
            },
            {
                label: "Diastolic",
                data: [60,70, 80,100,90,60],
                borderColor:'#8C6FE6',
                lineTension:0.4,
                pointRadius : 5,
                pointBackgroundColor: '#8C6FE6',
            }


        ]


    
      }


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
      ],
      lineChartData : {
        labels:[
            "Oct, 2023",
            "Nov, 2023",
            "Dec, 2023",
            "Jan, 2024",
            "Feb, 2024",
            "Mar, 2024",
        ],
        datasets:[
            {
                label: "Systolic",
                data: [110, 125, 160,155, 135, 140],
                borderColor: '#E66FD2',
                lineTension:0.4,
                pointRadius : 5,
                pointBackgroundColor: '#E66FD2',

                
            },
            {
                label: "Diastolic",
                data: [80,50, 60,100,90,55],
                borderColor:'#8C6FE6',
                lineTension:0.4,
                pointRadius : 5,
                pointBackgroundColor: '#8C6FE6',
            }


        ]


    
      }

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
      ],
      lineChartData : {
        labels:[
            "Oct, 2023",
            "Nov, 2023",
            "Dec, 2023",
            "Jan, 2024",
            "Feb, 2024",
            "Mar, 2024",
        ],
        datasets:[
            {
                label: "Systolic",
                data: [140, 129, 180,150, 124, 138],
                borderColor: '#E66FD2',
                lineTension:0.4,
                pointRadius : 5,
                pointBackgroundColor: '#E66FD2',

                
            },
            {
                label: "Diastolic",
                data: [90,70, 76,100,60,88],
                borderColor:'#8C6FE6',
                lineTension:0.4,
                pointRadius : 5,
                pointBackgroundColor: '#8C6FE6',
            }


        ]


    
      }

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
        problem: 'Hypertension',
        description: 'Chronic high blood pressure',
        status: 'Under Observation',
    }, 
        
        
        {
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
    ],
    lineChartData : {
        labels:[
            "Oct, 2023",
            "Nov, 2023",
            "Dec, 2023",
            "Jan, 2024",
            "Feb, 2024",
            "Mar, 2024",
        ],
        datasets:[
            {
                label: "Systolic",
                data: [100, 130, 180,155, 120, 155],
                borderColor: '#E66FD2',
                lineTension:0.4,
                pointRadius : 5,
                pointBackgroundColor: '#E66FD2',

                
            },
            {
                label: "Diastolic",
                data: [100,70, 85,97,60,78],
                borderColor:'#8C6FE6',
                lineTension:0.4,
                pointRadius : 5,
                pointBackgroundColor: '#8C6FE6',
            }


        ]


    
      }



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
        problem: 'Diabetes',
        description: 'High blood sugar levels',
        status: 'Active',
    },
        
        {
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
    ],
    lineChartData : {
        labels:[
            "Oct, 2023",
            "Nov, 2023",
            "Dec, 2023",
            "Jan, 2024",
            "Feb, 2024",
            "Mar, 2024",
        ],
        datasets:[
            {
                label: "Systolic",
                data: [130, 120, 160,180, 124, 132],
                borderColor: '#E66FD2',
                lineTension:0.4,
                pointRadius : 5,
                pointBackgroundColor: '#E66FD2',

                
            },
            {
                label: "Diastolic",
                data: [67,79, 88,100,90,70],
                borderColor:'#8C6FE6',
                lineTension:0.4,
                pointRadius : 5,
                pointBackgroundColor: '#8C6FE6',
            }


        ]


    
      }

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
],
lineChartData : {
    labels:[
        "Oct, 2023",
        "Nov, 2023",
        "Dec, 2023",
        "Jan, 2024",
        "Feb, 2024",
        "Mar, 2024",
    ],
    datasets:[
        {
            label: "Systolic",
            data: [180, 119, 150,135, 122, 160],
            borderColor: '#E66FD2',
            lineTension:0.4,
            pointRadius : 5,
            pointBackgroundColor: '#E66FD2',

            
        },
        {
            label: "Diastolic",
            data: [93,70, 80,60,90,100],
            borderColor:'#8C6FE6',
            lineTension:0.4,
            pointRadius : 5,
            pointBackgroundColor: '#8C6FE6',
        }


    ]



  }

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
        problem: 'Hypertension',
        description: 'Chronic high blood pressure',
        status: 'Under Observation',
    }, 
        
        {
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
    ],
    lineChartData : {
        labels:[
            "Oct, 2023",
            "Nov, 2023",
            "Dec, 2023",
            "Jan, 2024",
            "Feb, 2024",
            "Mar, 2024",
        ],
        datasets:[
            {
                label: "Systolic",
                data: [170, 119, 160,155, 130, 167],
                borderColor: '#E66FD2',
                lineTension:0.4,
                pointRadius : 5,
                pointBackgroundColor: '#E66FD2',

                
            },
            {
                label: "Diastolic",
                data: [90,60, 80,100,70,85],
                borderColor:'#8C6FE6',
                lineTension:0.4,
                pointRadius : 5,
                pointBackgroundColor: '#8C6FE6',
            }


        ]


    
      }

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
    },
    {
        problem: 'Diabetes',
        description: 'High blood sugar levels',
        status: 'Active',
    },
],
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
    ],
    lineChartData : {
        labels:[
            "Oct, 2023",
            "Nov, 2023",
            "Dec, 2023",
            "Jan, 2024",
            "Feb, 2024",
            "Mar, 2024",
        ],
        datasets:[
            {
                label: "Systolic",
                data: [150, 119, 160,140, 124, 180],
                borderColor: '#E66FD2',
                lineTension:0.4,
                pointRadius : 5,
                pointBackgroundColor: '#E66FD2',

                
            },
            {
                label: "Diastolic",
                data: [88,70, 90,60,100,80],
                borderColor:'#8C6FE6',
                lineTension:0.4,
                pointRadius : 5,
                pointBackgroundColor: '#8C6FE6',
            }


        ]


    
      }

    },
{
    name: 'Anmol',
      gender: 'Male',
      contact: '9882234285',
      dob:'26 Feb, 2002',
      age:'22',
      emergencyContact: '7219749197',
      insuranceProvider: 'LIC',
      respiratoryRate: '20',
      Temperature: '98.6',
      heartRate: '78',
      image : AnmolImage,
      diagnosticList: [{
          problem: 'Hypertension',
          description: 'Chronic high blood pressure',
          status: 'Under Observation',
      }, 
      {
        problem: 'Diabetes',
        description: 'High blood sugar levels',
        status: 'Active',
    },
    {
        problem: 'Diabetes',
        description: 'High blood sugar levels',
        status: 'Active',
    },
    {
        problem: 'Diabetes',
        description: 'High blood sugar levels',
        status: 'Active',
    },
    
],
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
          {
            testName: 'ECG',
        },
        {
            testName: 'ECG',
        },
      ],

      lineChartData : {
        labels:[
            "Oct, 2023",
            "Nov, 2023",
            "Dec, 2023",
            "Jan, 2024",
            "Feb, 2024",
            "Mar, 2024",
        ],
        datasets:[
            {
                label: "Systolic",
                data: [120, 119, 160,155, 124, 138],
                borderColor: '#E66FD2',
                lineTension:0.4,
                pointRadius : 5,
                pointBackgroundColor: '#E66FD2',

                
            },
            {
                label: "Diastolic",
                data: [60,70, 80,100,90,60],
                borderColor:'#8C6FE6',
                lineTension:0.4,
                pointRadius : 5,
                pointBackgroundColor: '#8C6FE6',
            }


        ]


    
      }


  },

  {
    name: 'Gitanjali',
    gender: 'Female',
    dob:'18 June, 2003',
    age:'21',
    contact: '8234567890',
    emergencyContact: '0987654321',
    insuranceProvider: 'Bajaj Allianz',
    respiratoryRate: '18',
    Temperature: '98.4',
    heartRate: '72',
    image : GitImage,
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
    ],
    lineChartData : {
      labels:[
          "Oct, 2023",
          "Nov, 2023",
          "Dec, 2023",
          "Jan, 2024",
          "Feb, 2024",
          "Mar, 2024",
      ],
      datasets:[
          {
              label: "Systolic",
              data: [110, 125, 160,155, 135, 140],
              borderColor: '#E66FD2',
              lineTension:0.4,
              pointRadius : 5,
              pointBackgroundColor: '#E66FD2',

              
          },
          {
              label: "Diastolic",
              data: [80,50, 60,100,90,55],
              borderColor:'#8C6FE6',
              lineTension:0.4,
              pointRadius : 5,
              pointBackgroundColor: '#8C6FE6',
          }


      ]


  
    }

},



]
export default data;
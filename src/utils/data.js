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
      name: 'John Doe',
      gender: 'Male',
      dob:'13 may, 2002',
      age:'22',
      contact: '1234567890',
      emergencyContact: '0987654321',
      insuranceProvider: 'ABC Insurance',
      respiratoryRate: '18',
      Temperature: '98.4',
      heartRate: '72',
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
      name: 'Jane Smith',
      gender: 'Female',
      contact: '9876543210',     
         age:'22',

      dob:'13 may, 2002',
      emergencyContact: '1234567890',
      insuranceProvider: 'XYZ Insurance',
      respiratoryRate: '16',
      Temperature: '99.2',
      heartRate: '80',
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
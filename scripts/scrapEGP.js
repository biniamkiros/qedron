
const { createHash } = require('crypto');
const fs = require('fs')

function hash(string) {
  return createHash('sha256').update(string).digest('hex');
}

const supplierURL = "https://production.egp.gov.et/po-gw/registration/api/economic-operators/get-supplier-by-id/dabda7b3-ac82-47be-b02a-3c792abb5ffb"
const supplierListURL = "https://production.egp.gov.et/po-gw/cms/api/economic-operators/get-economic-operators-portal?skip=0&top=10&orderBy%5B0%5D.field=dateOfRegistration&orderBy%5B0%5D.direction=desc&filter%5B0%5D%5B0%5D.field=status&filter%5B0%5D%5B0%5D.operator==&filter%5B0%5D%5B0%5D.value=active&secretToken=8cceb4e55db5311275b7a56f99a00f2a6298eef9fb9333cfaf8477a78257b371&secretCode=1716625240838"
const organisationlistURL = "https://production.egp.gov.et/po-gw/private-registration/api/organization/get-all"

const sampleOrganisationList = 
    {
        "total": 342,
        "items": [
          {
            "id": "707d3e95-edfc-4ee0-a111-c5aa59ce72f1",
            "name": {
              "am": "Amahara Regional State Agricultural Bureau",
              "en": "Amahara Regional State Agricultural Bureau"
            },
            "shortName": {
              "am": "ARSA",
              "en": "ARSA"
            },
            "description": {
              "am": "Amahara Regional State Agricultural Bureau",
              "en": "Amahara Regional State Agricultural Bureau"
            },
            "organizationType": {
              "id": "3a18ec22-ac23-4394-b571-0867709a1956",
              "key": "Organization-Type",
              "code": "svckf",
              "name": {
                "am": "Administration",
                "en": "Administration"
              },
              "order": 0,
              "timestamp": "2021-08-23T11:33:33.445887",
              "description": {
                "am": "Administration",
                "en": "Administration"
              }
            },
            "code": "hpPiR00322",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": {
              "id": "87e0c7d3-b7c4-4f9b-9933-7a94633b0a8f",
              "name": {
                "am": "ግብርና እና ገጠር ልማት",
                "en": "Agriculture and Rural Development"
              },
              "timestamp": "2023-08-19T09:28:40.865568",
              "description": {
                "am": "ግብርና እና ገጠር ልማት",
                "en": "Agriculture and Rural Development"
              }
            },
            "externalOrganizationCode": null,
            "timestamp": "2023-09-25T10:06:50.358028"
          },
          {
            "id": "ddb6e4e3-86e4-483f-99e2-5b47ba5b4f23",
            "name": {
              "am": "Republican Guard",
              "en": "Republican Guard"
            },
            "shortName": {
              "am": "RG",
              "en": "RG"
            },
            "description": {
              "am": "Republican Guard",
              "en": "Republican Guard"
            },
            "organizationType": {
              "id": "573b544a-434d-4c1f-beb4-b1de4d7f1be5",
              "key": "Organization-Type",
              "code": "jtlkj",
              "name": {
                "am": "Center",
                "en": "Center"
              },
              "order": 0,
              "timestamp": "2021-09-16T12:28:39.942465",
              "description": {
                "am": "Center",
                "en": "Center"
              }
            },
            "code": "zZRGi",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": {
              "id": "2cec2cda-f0fa-4692-a486-4526642a1086",
              "name": {
                "am": "ጠቅላላ አገልግሎት",
                "en": "General Service"
              },
              "timestamp": "2023-08-19T09:28:29.39931",
              "description": {
                "am": "ጠቅላላ አገልግሎት",
                "en": "General Service"
              }
            },
            "externalOrganizationCode": "14105",
            "timestamp": "2022-07-28T13:00:49.199736"
          },
          {
            "id": "1410751d-d407-41a4-b7f8-11dcf0f311bc",
            "name": {
              "am": "የፌደራል ጠቅላይ ፍርድ ቤት",
              "en": "Federal Supreme Court"
            },
            "shortName": {
              "am": "FSCoE",
              "en": "FSCoE"
            },
            "description": {
              "am": "የፌደራል ጠቅላይ ፍርድ ቤት",
              "en": "Federal Supreme Court"
            },
            "organizationType": {
              "id": "4c2c2ef8-1c8c-40e2-82b1-2b07e10f82f0",
              "key": "Organization-Type",
              "code": "32323",
              "name": {
                "am": "Government Organization",
                "en": "Government Organization",
                "or": null,
                "tg": null
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
                "am": "-",
                "en": "-",
                "or": null,
                "tg": null
              }
            },
            "code": "Am7zw",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": {
              "fax": {
                "code": "+251",
                "number": "0111550278"
              },
              "city": {
                "am": "አዲስ አበባ",
                "en": "አዲስ አበባ"
              },
              "zone": {
                "am": "አራዳ",
                "en": "Arada"
              },
              "email": "",
              "mobile": {
                "code": "+251",
                "number": ""
              },
              "postal": "6166",
              "region": {
                "am": "አዲስ አበባ",
                "en": "አዲስ አበባ"
              },
              "district": {
                "am": "አራዳ",
                "en": "Arada"
              },
              "telephone": {
                "code": "+251",
                "number": ""
              },
              "houseNumber": ""
            },
            "organizationSector": {
              "id": "0fc7ab4e-deab-49ae-9117-731ec0c5450c",
              "name": {
                "am": "ፍትህ እና ደህንነት",
                "en": "Justice and security"
              },
              "timestamp": "2023-08-19T09:27:30.520502",
              "description": {
                "am": "ፍትህ እና ደህንነት",
                "en": "Justice and security"
              }
            },
            "externalOrganizationCode": "11012",
            "timestamp": "2021-09-16T13:25:55.353617"
          },
          {
            "id": "1d2530ce-1fb7-4d5e-982d-263789d9e160",
            "name": {
              "am": "አዲስ አበባ ዩኒቨርስቲ",
              "en": "Addis Ababa University"
            },
            "shortName": {
              "am": "AAU",
              "en": "AAU"
            },
            "description": {
              "am": "አዲስ አበባ ዩኒቨርስቲ",
              "en": "Addis Ababa University"
            },
            "organizationType": {
              "id": "04c1385a-761b-4570-be88-e8ba1954f45a",
              "key": "Organization-Type",
              "code": "0035",
              "name": {
                "am": "Higher Inistitution",
                "en": "Higher Inistitution",
                "or": null,
                "tg": null
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
      
              }
            },
            "code": "MjtIr",
            "status": "Draft",
            "logo": {
              "file_name": "AAU logo.jpg",
              "file_path": "8864d574-6fbb-47aa-93ca-de84f0c0fdc6.jpg",
              "file_type": ".jpg"
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": {
              "fax": {
                "code": "+251",
                "number": ""
              },
              "city": {
                "am": null,
                "en": null
              },
              "zone": {
                "am": null,
                "en": null
              },
              "email": "",
              "mobile": {
                "code": "+251",
                "number": ""
              },
              "postal": "1176",
              "region": {
                "am": null,
                "en": null
              },
              "district": {
                "am": null,
                "en": null
              },
              "telephone": {
                "code": "+251",
                "number": ""
              },
              "houseNumber": ""
            },
            "organizationSector": {
              "id": "3c224171-4702-417f-a76e-b15dc0bf94b2",
              "name": {
                "am": "Education",
                "en": "Education"
              },
              "timestamp": "2022-06-24T12:31:37.866714",
              "description": {
                "am": "Education",
                "en": "Education"
              }
            },
            "externalOrganizationCode": "11215",
            "timestamp": "2021-07-13T11:52:09.104493"
          },
          {
            "id": "5e04dc3f-93b0-44b7-89fa-41cb259f489d",
            "name": {
              "am": "Federal Cooprative Agency",
              "en": "Federal Cooprative Agency"
            },
            "shortName": {
              "am": "FCA",
              "en": "FCA"
            },
            "description": {
              "am": "Federal Cooperative Agency",
              "en": "Federal Cooperative Agency"
            },
            "organizationType": {
              "id": "c82533f5-a4d0-49d2-9b42-035c250af606",
              "key": "Organization-Type",
              "code": "0045",
              "name": {
                "am": "Agencies",
                "en": "Agencies",
                "or": null,
                "tg": null
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
      
              }
            },
            "code": "jKo7P",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": null,
            "externalOrganizationCode": null,
            "timestamp": "2021-08-12T08:33:48.13768"
          },
          {
            "id": "2c1018f8-0544-49d7-9496-95dded0f9bd2",
            "name": {
              "am": "የፌድራል ፍትህና ሕግ ኢንስቲትዩት",
              "en": "The Federal Justice and Law Institute"
            },
            "shortName": {
              "am": "FJLI",
              "en": "FJLI"
            },
            "description": {
              "am": "የፌድራል ፍትህና ሕግ ኢንስቲትዩት",
              "en": "The Federal Justice and Law Institute"
            },
            "organizationType": {
              "id": "93f290b5-9516-473c-ba36-ba5c85656d3c",
              "key": "Organization-Type",
              "code": "055",
              "name": {
                "am": "ኢንሰቲትዩት",
                "en": "Institute "
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
                "am": "ኢንሰቲትዩት",
                "en": "Institute "
              }
            },
            "code": "tqSji",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": {
              "fax": {
                "code": "+251",
                "number": ""
              },
              "city": {
                "am": "አዲስ አበባ",
                "en": "Addis Abeba"
              },
              "zone": {
                "am": "ቂርቆስ",
                "en": "Kirkose"
              },
              "email": "",
              "mobile": {
                "code": "+251",
                "number": ""
              },
              "postal": "",
              "region": {
                "am": "አዲስ አበባ",
                "en": "Addis Abeba"
              },
              "district": {
                "am": "3",
                "en": "3"
              },
              "telephone": {
                "code": "+251",
                "number": ""
              },
              "houseNumber": "49"
            },
            "organizationSector": {
              "id": "0fc7ab4e-deab-49ae-9117-731ec0c5450c",
              "name": {
                "am": "ፍትህ እና ደህንነት",
                "en": "Justice and security"
              },
              "timestamp": "2023-08-19T09:27:30.520502",
              "description": {
                "am": "ፍትህ እና ደህንነት",
                "en": "Justice and security"
              }
            },
            "externalOrganizationCode": "11019",
            "timestamp": "2022-08-18T09:23:37.499803"
          },
          {
            "id": "a47fc97f-4a5d-46f8-b094-cc55b47712fd",
            "name": {
              "am": "Ministry of Water & Irregation Energy",
              "en": "Ministry of Water & Irregation Energy"
            },
            "shortName": {
              "am": "MWIE",
              "en": "MWIE"
            },
            "description": {
              "am": "Ministry of Water & Irregation Energy",
              "en": "Ministry of Water & Irregation Energy"
            },
            "organizationType": {
              "id": "a79bcd65-39d1-4ce2-b360-99ab20b2ba32",
              "key": "Organization-Type",
              "code": "09",
              "name": {
                "am": "ministry",
                "en": "ministry",
                "or": null,
                "tg": null
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
      
              }
            },
            "code": "DTGBZ",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": true,
            "deleteRemark": "Agreed",
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": null,
            "externalOrganizationCode": null,
            "timestamp": "2021-08-12T07:51:54.678196"
          },
          {
            "id": "a6f373b5-3bfa-4a9f-97ee-2502308a7547",
            "name": {
              "am": "Irregistion Development Commmission",
              "en": "Irregistion Development Commmission"
            },
            "shortName": {
              "am": "IDC",
              "en": "IDC"
            },
            "description": {
              "am": "Irregistion Development Commmission",
              "en": "Irregistion Development Commmission"
            },
            "organizationType": {
              "id": "4c2c2ef8-1c8c-40e2-82b1-2b07e10f82f0",
              "key": "Organization-Type",
              "code": "32323",
              "name": {
                "am": "Government Organization",
                "en": "Government Organization",
                "or": null,
                "tg": null
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
                "am": "-",
                "en": "-",
                "or": null,
                "tg": null
              }
            },
            "code": "etocR",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": null,
            "externalOrganizationCode": null,
            "timestamp": "2021-08-12T08:10:17.293765"
          },
          {
            "id": "42841a4a-4e5e-4006-b73c-0b57bec1303b",
            "name": {
              "am": "Water Development Commission",
              "en": "Water Development Commission"
            },
            "shortName": {
              "am": "WDC",
              "en": "WDC"
            },
            "description": {
              "am": "Water Development Commission",
              "en": "Water Development Commission"
            },
            "organizationType": {
              "id": "4c2c2ef8-1c8c-40e2-82b1-2b07e10f82f0",
              "key": "Organization-Type",
              "code": "32323",
              "name": {
                "am": "Government Organization",
                "en": "Government Organization",
                "or": null,
                "tg": null
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
                "am": "-",
                "en": "-",
                "or": null,
                "tg": null
              }
            },
            "code": "bO5Go",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": null,
            "externalOrganizationCode": null,
            "timestamp": "2021-08-12T08:17:15.124814"
          },
          {
            "id": "ec0718f3-979e-405d-ac23-fcf2902d444f",
            "name": {
              "am": "Ethiopian Agrictural Research Council Secterial",
              "en": "Ethiopian Agrictural Research Council Secterial"
            },
            "shortName": {
              "am": "EARCS",
              "en": "EARCS"
            },
            "description": {
              "am": "Ethiopian Agricultural Research Council Secretarial",
              "en": "Ethiopian Agricultural Research Council Secretarial"
            },
            "organizationType": {
              "id": "4c2c2ef8-1c8c-40e2-82b1-2b07e10f82f0",
              "key": "Organization-Type",
              "code": "32323",
              "name": {
                "am": "Government Organization",
                "en": "Government Organization",
                "or": null,
                "tg": null
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
                "am": "-",
                "en": "-",
                "or": null,
                "tg": null
              }
            },
            "code": "IFPfa",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": null,
            "externalOrganizationCode": null,
            "timestamp": "2021-08-12T08:26:49.876576"
          },
          {
            "id": "29b3ec35-c4fb-48b7-85c8-06ee31f12c69",
            "name": {
              "am": "Veterinary Drug & Animal Feed Administration & Control Authority",
              "en": "Veterinary Drug & Animal Feed Administration & Control Authority"
            },
            "shortName": {
              "am": "VDFACA",
              "en": "VDFACA"
            },
            "description": {
              "am": "Veterinary Drug & Animal Feed Administration & Control Authority",
              "en": "Veterinary Drug & Animal Feed Administration & Control Authority"
            },
            "organizationType": {
              "id": "eaaaebc3-ea65-4ef7-8603-8861977eb2d1",
              "key": "Organization-Type",
              "code": "ryxlq",
              "name": {
                "am": "Authority",
                "en": "Authority"
              },
              "order": 0,
              "timestamp": "2021-07-13T11:59:56.336819",
              "description": {
                "am": "Authority",
                "en": "Authority"
              }
            },
            "code": "zXY9y",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": null,
            "externalOrganizationCode": null,
            "timestamp": "2021-08-12T08:30:50.627832"
          },
          {
            "id": "7846cdeb-04b3-4a68-ac81-d9f95a878681",
            "name": {
              "am": "Ardeta College ",
              "en": "Ardeta College "
            },
            "shortName": {
              "am": "AC",
              "en": "AC"
            },
            "description": {
              "am": "Ardeta College ",
              "en": "Ardeta College "
            },
            "organizationType": {
              "id": "04c1385a-761b-4570-be88-e8ba1954f45a",
              "key": "Organization-Type",
              "code": "0035",
              "name": {
                "am": "Higher Inistitution",
                "en": "Higher Inistitution",
                "or": null,
                "tg": null
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
      
              }
            },
            "code": "8SBXN",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": true,
            "deleteRemark": "Dublications of PE name",
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": null,
            "externalOrganizationCode": null,
            "timestamp": "2021-08-12T07:59:54.453664"
          },
          {
            "id": "3cc2db5d-6535-4a56-91d3-6bc3a966c6d0",
            "name": {
              "am": "Baisin Authority Development",
              "en": "Baisin Authority Development"
            },
            "shortName": {
              "am": "BAD",
              "en": "BAD"
            },
            "description": {
              "am": "Baisin Authority Development",
              "en": "Baisin Authority Development"
            },
            "organizationType": {
              "id": "eaaaebc3-ea65-4ef7-8603-8861977eb2d1",
              "key": "Organization-Type",
              "code": "ryxlq",
              "name": {
                "am": "Authority",
                "en": "Authority"
              },
              "order": 0,
              "timestamp": "2021-07-13T11:59:56.336819",
              "description": {
                "am": "Authority",
                "en": "Authority"
              }
            },
            "code": "fFbnd",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": true,
            "deleteRemark": "Duplications of PE name ",
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": null,
            "externalOrganizationCode": null,
            "timestamp": "2021-08-12T07:43:17.116838"
          },
          {
            "id": "dbd419d2-11d0-4db4-81ca-92228e89b72b",
            "name": {
              "am": "Ethiopian Commodity Exchange Authority  ",
              "en": "Ethiopian Commodity Exchange Authority  "
            },
            "shortName": {
              "am": "ECEA",
              "en": "ECEA"
            },
            "description": {
              "am": "Ethiopian Commodity Exchange Authority  ",
              "en": "Ethiopian Commodity Exchange Authority  "
            },
            "organizationType": {
              "id": "eaaaebc3-ea65-4ef7-8603-8861977eb2d1",
              "key": "Organization-Type",
              "code": "ryxlq",
              "name": {
                "am": "Authority",
                "en": "Authority"
              },
              "order": 0,
              "timestamp": "2021-07-13T11:59:56.336819",
              "description": {
                "am": "Authority",
                "en": "Authority"
              }
            },
            "code": "mV4XY",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": true,
            "deleteRemark": "Duplications of PE name",
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": null,
            "externalOrganizationCode": null,
            "timestamp": "2021-08-12T08:05:27.403282"
          },
          {
            "id": "0c41c46a-c361-4522-9fc4-1de8b80a9fe0",
            "name": {
              "am": "Ethiopian Water Technology",
              "en": "Ethiopian Water Technology"
            },
            "shortName": {
              "am": "EWT",
              "en": "EWT"
            },
            "description": {
              "am": "Ethiopian Water Technology",
              "en": "Ethiopian Water Technology"
            },
            "organizationType": {
              "id": "4c2c2ef8-1c8c-40e2-82b1-2b07e10f82f0",
              "key": "Organization-Type",
              "code": "32323",
              "name": {
                "am": "Government Organization",
                "en": "Government Organization",
                "or": null,
                "tg": null
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
                "am": "-",
                "en": "-",
                "or": null,
                "tg": null
              }
            },
            "code": "jPc52",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": true,
            "deleteRemark": "fdsf",
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": {
              "id": "1ed15352-c17b-4f3a-97a5-ec23c32e38df",
              "name": {
                "am": "Economy ",
                "en": "Economy "
              },
              "timestamp": "2022-06-24T12:32:13.56549",
              "description": {
                "am": "Economy ",
                "en": "Economy "
              }
            },
            "externalOrganizationCode": null,
            "timestamp": "2021-08-12T08:14:26.750982"
          },
          {
            "id": "87e504d2-5cd6-4c59-9b6e-6906de674c8c",
            "name": {
              "am": " ወልቂጤ ዩኒቨርሲቲ",
              "en": "Wolkite University"
            },
            "shortName": {
              "am": "WKU",
              "en": "WKU"
            },
            "description": {
              "am": " ወልቂጤ ዩኒቨርሲቲ",
              "en": "Wolkite University"
            },
            "organizationType": {
              "id": "04c1385a-761b-4570-be88-e8ba1954f45a",
              "key": "Organization-Type",
              "code": "0035",
              "name": {
                "am": "Higher Inistitution",
                "en": "Higher Inistitution",
                "or": null,
                "tg": null
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
      
              }
            },
            "code": "Fknm9",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": {
              "fax": {
                "code": "+251",
                "number": ""
              },
              "city": {
                "am": "ወልቂጤ",
                "en": "Wolkite"
              },
              "zone": {
                "am": "ጉራጌ",
                "en": "Gurage"
              },
              "email": "president@wku.edu.et",
              "mobile": {
                "code": "+251",
                "number": ""
              },
              "postal": "07",
              "region": {
                "am": "የደቡብ ብሄር ብሄረሰቦች ህዝቦች",
                "en": "Southern Nations, Nationalities, and Peoples"
              },
              "district": {
                "am": null,
                "en": null
              },
              "telephone": {
                "code": "+251",
                "number": ""
              },
              "houseNumber": ""
            },
            "organizationSector": {
              "id": "3c224171-4702-417f-a76e-b15dc0bf94b2",
              "name": {
                "am": "Education",
                "en": "Education"
              },
              "timestamp": "2022-06-24T12:31:37.866714",
              "description": {
                "am": "Education",
                "en": "Education"
              }
            },
            "externalOrganizationCode": null,
            "timestamp": "2021-08-24T07:35:19.384977"
          },
          {
            "id": "7990a1ed-83b9-4ba8-8cb3-34775e6683ab",
            "name": {
              "am": "Sidama Regional State Health Bureau",
              "en": "Sidama Regional State Health Bureau"
            },
            "shortName": {
              "am": "SRHB",
              "en": "SRHB"
            },
            "description": {
              "am": "Sidama Regional State Health Bureau",
              "en": "Sidama Regional State Health Bureau"
            },
            "organizationType": {
              "id": "3a18ec22-ac23-4394-b571-0867709a1956",
              "key": "Organization-Type",
              "code": "svckf",
              "name": {
                "am": "Administration",
                "en": "Administration"
              },
              "order": 0,
              "timestamp": "2021-08-23T11:33:33.445887",
              "description": {
                "am": "Administration",
                "en": "Administration"
              }
            },
            "code": "6kKxd00299",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": {
              "id": "65f35246-9b3d-4d80-b878-e22cc9eec8ca",
              "name": {
                "am": "Health",
                "en": "Health"
              },
              "timestamp": "2022-06-24T12:31:24.832988",
              "description": {
                "am": "Health",
                "en": "Health"
              }
            },
            "externalOrganizationCode": null,
            "timestamp": "2023-09-25T07:40:36.666225"
          },
          {
            "id": "77404118-cd16-450b-8cc9-6ec7e7626d64",
            "name": {
              "am": "Federal Prisoners Commission",
              "en": "Federal Prisoners Commission"
            },
            "shortName": {
              "am": "FPC",
              "en": "FPC"
            },
            "description": {
              "am": "Federal Prisoners Commission",
              "en": "Federal Prisoners Commission"
            },
            "organizationType": {
              "id": "cb506b84-ce1a-4d14-b04f-4562c1a2448e",
              "key": "Organization-Type",
              "code": "lontv",
              "name": {
                "am": " Commission",
                "en": " Commission"
              },
              "order": 0,
              "timestamp": "2021-09-16T12:26:40.817191",
              "description": {
                "am": " Commission",
                "en": " Commission"
              }
            },
            "code": "DBnLG",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": {
              "fax": {
                "code": "+251",
                "number": "0111264831"
              },
              "city": {
                "am": "Addis Ababa",
                "en": "Addis Ababa"
              },
              "zone": {
                "am": "Arada",
                "en": "Arada"
              },
              "email": "",
              "mobile": {
                "code": "+251",
                "number": ""
              },
              "postal": "2237",
              "region": {
                "am": "Addis Ababa",
                "en": "Addis Ababa"
              },
              "district": {
                "am": "05",
                "en": "05"
              },
              "telephone": {
                "code": "+251",
                "number": ""
              },
              "houseNumber": ""
            },
            "organizationSector": {
              "id": "0fc7ab4e-deab-49ae-9117-731ec0c5450c",
              "name": {
                "am": "ፍትህ እና ደህንነት",
                "en": "Justice and security"
              },
              "timestamp": "2023-08-19T09:27:30.520502",
              "description": {
                "am": "ፍትህ እና ደህንነት",
                "en": "Justice and security"
              }
            },
            "externalOrganizationCode": "11023",
            "timestamp": "2021-09-30T14:48:00.041983"
          },
          {
            "id": "ce02173e-a3c8-4716-906e-8c266c5bb567",
            "name": {
              "am": "ፌዴራል ከተሞች የስራ እድል ፈጠራና የምግብ ዋስትና ኤጀንሲ",
              "en": "Federal Urban Job Creation and Food Security Agency"
            },
            "shortName": {
              "am": "FUJCFSA",
              "en": "FUJCFSA"
            },
            "description": {
              "am": "ፌዴራል ከተሞች የስራ እድል ፈጠራና የምግብ ዋስትና ኤጀንሲ",
              "en": "Federal Urban Job Creation and Food Security Agency"
            },
            "organizationType": {
              "id": "c82533f5-a4d0-49d2-9b42-035c250af606",
              "key": "Organization-Type",
              "code": "0045",
              "name": {
                "am": "Agencies",
                "en": "Agencies",
                "or": null,
                "tg": null
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
      
              }
            },
            "code": "EzbPp",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": null,
            "externalOrganizationCode": null,
            "timestamp": "2021-08-24T07:38:20.466578"
          },
          {
            "id": "ca94d1bd-30ed-43b1-9871-0070ff51fe27",
            "name": {
              "am": "Gambella Regional State Health Bureau",
              "en": "Gambella Regional State Health Bureau"
            },
            "shortName": {
              "am": "GRSHB",
              "en": "GRSHB"
            },
            "description": {
              "am": "Gambella Regional State Health Bureau",
              "en": "Gambella Regional State Health Bureau"
            },
            "organizationType": {
              "id": "3a18ec22-ac23-4394-b571-0867709a1956",
              "key": "Organization-Type",
              "code": "svckf",
              "name": {
                "am": "Administration",
                "en": "Administration"
              },
              "order": 0,
              "timestamp": "2021-08-23T11:33:33.445887",
              "description": {
                "am": "Administration",
                "en": "Administration"
              }
            },
            "code": "EQYU000304",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": {
              "id": "65f35246-9b3d-4d80-b878-e22cc9eec8ca",
              "name": {
                "am": "Health",
                "en": "Health"
              },
              "timestamp": "2022-06-24T12:31:24.832988",
              "description": {
                "am": "Health",
                "en": "Health"
              }
            },
            "externalOrganizationCode": null,
            "timestamp": "2023-09-25T07:59:01.882327"
          },
          {
            "id": "a512526c-9b70-481c-a1d5-1c947673475f",
            "name": {
              "am": "Gambella Regional State Finance Administration Office",
              "en": "Gambella Regional State Finance Administration Office"
            },
            "shortName": {
              "am": "GRSFAO",
              "en": "GRSFAO"
            },
            "description": {
              "am": "Gambella Regional State Finance Administration Office",
              "en": "Gambella Regional State Finance Administration Office"
            },
            "organizationType": {
              "id": "3a18ec22-ac23-4394-b571-0867709a1956",
              "key": "Organization-Type",
              "code": "svckf",
              "name": {
                "am": "Administration",
                "en": "Administration"
              },
              "order": 0,
              "timestamp": "2021-08-23T11:33:33.445887",
              "description": {
                "am": "Administration",
                "en": "Administration"
              }
            },
            "code": "cUfm200305",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": {
              "id": "1ed15352-c17b-4f3a-97a5-ec23c32e38df",
              "name": {
                "am": "Economy ",
                "en": "Economy "
              },
              "timestamp": "2022-06-24T12:32:13.56549",
              "description": {
                "am": "Economy ",
                "en": "Economy "
              }
            },
            "externalOrganizationCode": null,
            "timestamp": "2023-09-25T08:02:17.937103"
          },
          {
            "id": "c06080b5-5b84-4e99-8848-dacf2e594ec1",
            "name": {
              "am": "የከተማ መሬትና መሬት ነክ ንብረት ምዝገባ መራጃ ኤጀንስ",
              "en": "Federal Urban Land Property Registration and Information Agency "
            },
            "shortName": {
              "am": "FULPRIA",
              "en": "FULPRIA"
            },
            "description": {
              "am": "የከተማ መሬትና መሬት ነክ ንብረት ምዝገባ መራጃ ኤጀንስ",
              "en": "Federal Urban Land Property Registration and Information Agency "
            },
            "organizationType": {
              "id": "c82533f5-a4d0-49d2-9b42-035c250af606",
              "key": "Organization-Type",
              "code": "0045",
              "name": {
                "am": "Agencies",
                "en": "Agencies",
                "or": null,
                "tg": null
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
      
              }
            },
            "code": "QdIK7",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": null,
            "externalOrganizationCode": null,
            "timestamp": "2021-08-24T07:26:24.077807"
          },
          {
            "id": "bba193ba-188e-44a7-b512-f4ede19e8c19",
            "name": {
              "am": "Water Resource Development Fund",
              "en": "Water Resource Development Fund"
            },
            "shortName": {
              "am": "WRDF",
              "en": "WRDF"
            },
            "description": {
              "am": "Water Resource Development Fund",
              "en": "Water Resource Development Fund"
            },
            "organizationType": {
              "id": "4c2c2ef8-1c8c-40e2-82b1-2b07e10f82f0",
              "key": "Organization-Type",
              "code": "32323",
              "name": {
                "am": "Government Organization",
                "en": "Government Organization",
                "or": null,
                "tg": null
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
                "am": "-",
                "en": "-",
                "or": null,
                "tg": null
              }
            },
            "code": "t0Kwu",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": null,
            "externalOrganizationCode": null,
            "timestamp": "2021-08-12T09:01:25.301977"
          },
          {
            "id": "d9f148ac-a3a9-4fdc-be7c-4ed89d337df0",
            "name": {
              "am": "ፌዴራል የተቀናጀ መሰረተ ልማቶች ማስተባበሪያ ኤጀንሲ",
              "en": "Federal integrated Infrastructures Development Coordinating Agency"
            },
            "shortName": {
              "am": "FIIDCA",
              "en": "FIIDCA"
            },
            "description": {
              "am": "ፌዴራል የተቀናጀ መሰረተ ልማቶች ማስተባበሪያ ኤጀንሲ",
              "en": "Federal integrated Infrastructures Development Coordinating Agency"
            },
            "organizationType": {
              "id": "c82533f5-a4d0-49d2-9b42-035c250af606",
              "key": "Organization-Type",
              "code": "0045",
              "name": {
                "am": "Agencies",
                "en": "Agencies",
                "or": null,
                "tg": null
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
      
              }
            },
            "code": "ORcTq",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": null,
            "externalOrganizationCode": null,
            "timestamp": "2021-08-24T07:44:08.907191"
          },
          {
            "id": "1d8a23b5-1626-422c-acb2-107f28e41ef4",
            "name": {
              "am": "የከፍተኛ ትምህርት አግባብነት እና ጥራት ኤጀንሲ",
              "en": "Higher Education Relevance and Quality Agency"
            },
            "shortName": {
              "am": "HERQA",
              "en": "HERQA"
            },
            "description": {
              "am": "የከፍተኛ ትምህርት አግባብነት እና ጥራት ኤጀንሲ",
              "en": "Higher Education Relevance and Quality Agency"
            },
            "organizationType": {
              "id": "c82533f5-a4d0-49d2-9b42-035c250af606",
              "key": "Organization-Type",
              "code": "0045",
              "name": {
                "am": "Agencies",
                "en": "Agencies",
                "or": null,
                "tg": null
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
      
              }
            },
            "code": "LN9XB",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": null,
            "externalOrganizationCode": null,
            "timestamp": "2021-08-24T07:54:04.034171"
          },
          {
            "id": "85798094-1600-4fbb-9aa2-3ca5bc77b1cc",
            "name": {
              "am": "የከፍተኛ ትምህርት ስትራቴጂ ማእከል",
              "en": "Higher Education Strategy Center"
            },
            "shortName": {
              "am": "HESC",
              "en": "HESC"
            },
            "description": {
              "am": "የከፍተኛ ትምህርት ስትራቴጂ ማእከል",
              "en": "Higher Education Strategy Center"
            },
            "organizationType": {
              "id": "4c2c2ef8-1c8c-40e2-82b1-2b07e10f82f0",
              "key": "Organization-Type",
              "code": "32323",
              "name": {
                "am": "Government Organization",
                "en": "Government Organization",
                "or": null,
                "tg": null
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
                "am": "-",
                "en": "-",
                "or": null,
                "tg": null
              }
            },
            "code": "wiBFn",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": null,
            "externalOrganizationCode": null,
            "timestamp": "2021-08-24T07:57:41.123734"
          },
          {
            "id": "ddda4acc-4d09-42c1-827c-e1cedafd8e43",
            "name": {
              "am": "ብሔራዊ መረጃና ደህንነት አገልግሎት",
              "en": "National Intelligence and Security Service"
            },
            "shortName": {
              "am": "NISS ",
              "en": "NISS "
            },
            "description": {
              "am": "ብሔራዊ መረጃና ደህንነት አገልግሎት",
              "en": "National Intelligence and Security Service"
            },
            "organizationType": {
              "id": "de36436b-a5bc-4f67-bcaf-44b171f0e5b0",
              "key": "Organization-Type",
              "code": "c8m3r",
              "name": {
                "am": "Service",
                "en": "Service"
              },
              "order": 0,
              "timestamp": "2021-07-13T12:10:26.94161",
              "description": {
                "am": "Service",
                "en": "Service"
              }
            },
            "code": "KnNop",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": {
              "id": "0fc7ab4e-deab-49ae-9117-731ec0c5450c",
              "name": {
                "am": "ፍትህ እና ደህንነት",
                "en": "Justice and security"
              },
              "timestamp": "2023-08-19T09:27:30.520502",
              "description": {
                "am": "ፍትህ እና ደህንነት",
                "en": "Justice and security"
              }
            },
            "externalOrganizationCode": "11020",
            "timestamp": "2021-09-17T10:17:00.984471"
          },
          {
            "id": "e43c559b-fcdf-4d80-8870-89c533c1ef40",
            "name": {
              "am": "Harari Regional State Water and Sewer Bureau",
              "en": "Harari Regional State Water and Sewer Bureau"
            },
            "shortName": {
              "am": "HRSWSB",
              "en": "HRSWSB"
            },
            "description": {
              "am": "Harari Regional State Water and Sewer Bureau",
              "en": "Harari Regional State Water and Sewer Bureau"
            },
            "organizationType": {
              "id": "3a18ec22-ac23-4394-b571-0867709a1956",
              "key": "Organization-Type",
              "code": "svckf",
              "name": {
                "am": "Administration",
                "en": "Administration"
              },
              "order": 0,
              "timestamp": "2021-08-23T11:33:33.445887",
              "description": {
                "am": "Administration",
                "en": "Administration"
              }
            },
            "code": "HP36T00288",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": {
              "id": "fc9fa7cc-8371-4617-b3a5-06deabb525b6",
              "name": {
                "am": "ውሃ ሀብትና ኢነርጂ",
                "en": "Water Resources and Energy"
              },
              "timestamp": "2023-08-19T09:29:09.415465",
              "description": {
                "am": "ውሃ ሀብትና ኢነርጂ",
                "en": "Water Resources and Energy"
              }
            },
            "externalOrganizationCode": null,
            "timestamp": "2023-09-23T08:34:14.984687"
          },
          {
            "id": "0749f5e4-1edc-432c-a9ac-daa09a24efc6",
            "name": {
              "am": "የፌዴሬሽን ምክር ቤት",
              "en": "House of Federation"
            },
            "shortName": {
              "am": "HOF",
              "en": "HOF"
            },
            "description": {
              "am": "የፌዴሬሽን ምክር ቤት",
              "en": "House of Federation"
            },
            "organizationType": {
              "id": "4c2c2ef8-1c8c-40e2-82b1-2b07e10f82f0",
              "key": "Organization-Type",
              "code": "32323",
              "name": {
                "am": "Government Organization",
                "en": "Government Organization",
                "or": null,
                "tg": null
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
                "am": "-",
                "en": "-",
                "or": null,
                "tg": null
              }
            },
            "code": "Jelq1",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": {
              "fax": {
                "code": "+251",
                "number": ""
              },
              "city": {
                "am": null,
                "en": null
              },
              "zone": {
                "am": null,
                "en": null
              },
              "email": "",
              "mobile": {
                "code": "+251",
                "number": ""
              },
              "postal": "",
              "region": {
                "am": null,
                "en": null
              },
              "district": {
                "am": null,
                "en": null
              },
              "telephone": {
                "code": "+251",
                "number": ""
              },
              "houseNumber": ""
            },
            "organizationSector": {
              "id": "53a63473-9f24-4ca8-a694-9404c4933d47",
              "name": {
                "am": "የህግ አውጪና አስፈፃሚ አካላት",
                "en": "Legislative and Executive Bodies"
              },
              "timestamp": "2023-08-19T09:26:54.441101",
              "description": {
                "am": "Legislative and Executive Bodies",
                "en": "Legislative and Executive Bodies"
              }
            },
            "externalOrganizationCode": "11005",
            "timestamp": "2021-08-24T09:03:03.688642"
          },
          {
            "id": "e614c4fd-e7eb-4396-9525-0d35f345aab8",
            "name": {
              "am": "የፌዴራል ትራንስፖርት ባለስልጣን",
              "en": "Federal Transport Authority"
            },
            "shortName": {
              "am": "FTA",
              "en": "FTA"
            },
            "description": {
              "am": "የፌዴራል ትራንስፖርት ባለስልጣን",
              "en": "Federal Transport Authority"
            },
            "organizationType": {
              "id": "c82533f5-a4d0-49d2-9b42-035c250af606",
              "key": "Organization-Type",
              "code": "0045",
              "name": {
                "am": "Agencies",
                "en": "Agencies",
                "or": null,
                "tg": null
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
      
              }
            },
            "code": "ifsD3",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": null,
            "externalOrganizationCode": null,
            "timestamp": "2021-08-24T08:01:12.856425"
          },
          {
            "id": "00072950-cc6e-4db6-b84b-fb7ae24b1f90",
            "name": {
              "am": "ddd",
              "en": "ddd"
            },
            "shortName": {
              "am": "HWU",
              "en": "HWU"
            },
            "description": {
              "am": "dddd",
              "en": "ddd"
            },
            "organizationType": {
              "id": "d12cea68-656c-45f7-b847-2863ea1980b3",
              "key": "Organization-Type",
              "code": "igy50",
              "name": {
                "am": "Office",
                "en": "Office"
              },
              "order": 0,
              "timestamp": "2021-09-16T12:30:09.689483",
              "description": {
                "am": "Office",
                "en": "Office"
              }
            },
            "code": "P1ogc",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": true,
            "deleteRemark": "error",
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": null,
            "externalOrganizationCode": null,
            "timestamp": "2021-08-24T08:20:21.498688"
          },
          {
            "id": "043d1464-f0f0-4930-b9b7-63b3510cdb0e",
            "name": {
              "am": "ሀዋሳ ዩኒቨርሲቲ",
              "en": "Hawassa University"
            },
            "shortName": {
              "am": "HU",
              "en": "HU"
            },
            "description": {
              "am": "ሀዋሳ ዩኒቨርሲቲ",
              "en": "Hawassa University"
            },
            "organizationType": {
              "id": "04c1385a-761b-4570-be88-e8ba1954f45a",
              "key": "Organization-Type",
              "code": "0035",
              "name": {
                "am": "Higher Inistitution",
                "en": "Higher Inistitution",
                "or": null,
                "tg": null
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
      
              }
            },
            "code": "QXd8S",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": true,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": null,
            "externalOrganizationCode": null,
            "timestamp": "2021-08-24T08:03:48.197116"
          },
          {
            "id": "9beaf010-e9e1-4056-b812-36e68241aaba",
            "name": {
              "am": "ባህርዳር ዩኒቨርስቲ",
              "en": "Bahir Dar University"
            },
            "shortName": {
              "am": "BDU",
              "en": "BDU"
            },
            "description": {
              "am": "ባህርዳር ዩኒቨርስቲ",
              "en": "Bahir Dar University"
            },
            "organizationType": {
              "id": "04c1385a-761b-4570-be88-e8ba1954f45a",
              "key": "Organization-Type",
              "code": "0035",
              "name": {
                "am": "Higher Inistitution",
                "en": "Higher Inistitution",
                "or": null,
                "tg": null
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
      
              }
            },
            "code": "IB2g5",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": {
              "id": "3c224171-4702-417f-a76e-b15dc0bf94b2",
              "name": {
                "am": "Education",
                "en": "Education"
              },
              "timestamp": "2022-06-24T12:31:37.866714",
              "description": {
                "am": "Education",
                "en": "Education"
              }
            },
            "externalOrganizationCode": null,
            "timestamp": "2021-08-24T08:06:22.919804"
          },
          {
            "id": "b1353df5-1da8-4f4a-9231-bf7b0c904d88",
            "name": {
              "am": "Oromia Regional State Health Bureau",
              "en": "Oromia Regional State Health Bureau"
            },
            "shortName": {
              "am": "ORSHB",
              "en": "ORSHB"
            },
            "description": {
              "am": "Oromia Regional State Health Bureau",
              "en": "Oromia Regional State Health Bureau"
            },
            "organizationType": {
              "id": "3a18ec22-ac23-4394-b571-0867709a1956",
              "key": "Organization-Type",
              "code": "svckf",
              "name": {
                "am": "Administration",
                "en": "Administration"
              },
              "order": 0,
              "timestamp": "2021-08-23T11:33:33.445887",
              "description": {
                "am": "Administration",
                "en": "Administration"
              }
            },
            "code": "diTvH00289",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": {
              "id": "65f35246-9b3d-4d80-b878-e22cc9eec8ca",
              "name": {
                "am": "Health",
                "en": "Health"
              },
              "timestamp": "2022-06-24T12:31:24.832988",
              "description": {
                "am": "Health",
                "en": "Health"
              }
            },
            "externalOrganizationCode": null,
            "timestamp": "2023-09-25T06:03:37.012365"
          },
          {
            "id": "2b195b79-d628-410b-a6d9-5d92ae2184e0",
            "name": {
              "am": "የኢትዮጲያ ኢንቨስትመንት ኮሚሽን",
              "en": "Ethiopian Investment Commission"
            },
            "shortName": {
              "am": "EIC",
              "en": "EIC"
            },
            "description": {
              "am": "የኢትዮጲያ ኢንቨስትመንት ኮሚሽን",
              "en": "Ethiopian Investment Commission"
            },
            "organizationType": {
              "id": "cb506b84-ce1a-4d14-b04f-4562c1a2448e",
              "key": "Organization-Type",
              "code": "lontv",
              "name": {
                "am": " Commission",
                "en": " Commission"
              },
              "order": 0,
              "timestamp": "2021-09-16T12:26:40.817191",
              "description": {
                "am": " Commission",
                "en": " Commission"
              }
            },
            "code": "pe6BU",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": {
              "id": "6921c8fd-f6a9-49d6-bc0a-4d3ef0b8c547",
              "name": {
                "am": "ንግድ እና ኢንዱስትሪ",
                "en": "Trade and Industry"
              },
              "timestamp": "2023-08-19T09:29:25.803321",
              "description": {
                "am": "ንግድ እና ኢንዱስትሪ",
                "en": "Trade and Industry"
              }
            },
            "externalOrganizationCode": "11134",
            "timestamp": "2021-08-24T08:53:10.447351"
          },
          {
            "id": "2c948143-50fc-40c9-92d2-148c9636f964",
            "name": {
              "am": "Jigjiga University",
              "en": "Jigjiga University"
            },
            "shortName": {
              "am": "JJU",
              "en": "JJU"
            },
            "description": {
              "am": "Jigjiga University",
              "en": "Jigjiga University"
            },
            "organizationType": {
              "id": "04c1385a-761b-4570-be88-e8ba1954f45a",
              "key": "Organization-Type",
              "code": "0035",
              "name": {
                "am": "Higher Inistitution",
                "en": "Higher Inistitution",
                "or": null,
                "tg": null
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
      
              }
            },
            "code": "3dEbB",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": {
              "fax": {
                "code": "+251",
                "number": ""
              },
              "city": {
                "am": null,
                "en": null
              },
              "zone": {
                "am": null,
                "en": null
              },
              "email": "",
              "mobile": {
                "code": "+251",
                "number": ""
              },
              "postal": "",
              "region": {
                "am": null,
                "en": null
              },
              "district": {
                "am": null,
                "en": null
              },
              "telephone": {
                "code": "+251",
                "number": ""
              },
              "houseNumber": ""
            },
            "organizationSector": {
              "id": "3c224171-4702-417f-a76e-b15dc0bf94b2",
              "name": {
                "am": "Education",
                "en": "Education"
              },
              "timestamp": "2022-06-24T12:31:37.866714",
              "description": {
                "am": "Education",
                "en": "Education"
              }
            },
            "externalOrganizationCode": "11228",
            "timestamp": "2021-09-16T13:36:07.772847"
          },
          {
            "id": "d16d70e4-1607-4c0a-973b-0df87c182287",
            "name": {
              "am": "የኢትዮጲያ ከይዘን ኢንስቲቲውት",
              "en": "Ethiopian Kaizen Institute"
            },
            "shortName": {
              "am": "EKI",
              "en": "EKI"
            },
            "description": {
              "am": "የኢትዮጲያ ከይዘን ኢንስቲቲውት",
              "en": "Ethiopian Kaizen Institute"
            },
            "organizationType": {
              "id": "4c2c2ef8-1c8c-40e2-82b1-2b07e10f82f0",
              "key": "Organization-Type",
              "code": "32323",
              "name": {
                "am": "Government Organization",
                "en": "Government Organization",
                "or": null,
                "tg": null
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
                "am": "-",
                "en": "-",
                "or": null,
                "tg": null
              }
            },
            "code": "cMS8m",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": null,
            "externalOrganizationCode": null,
            "timestamp": "2021-08-24T08:40:28.388788"
          },
          {
            "id": "1540a63c-9873-4680-a860-0f65c9cde271",
            "name": {
              "am": "Oromia Regional State Education Bureau",
              "en": "Oromia Regional State Education Bureau"
            },
            "shortName": {
              "am": "ORSEB",
              "en": "ORSEB"
            },
            "description": {
              "am": "Oromia Regional State Education Bureau",
              "en": "Oromia Regional State Education Bureau"
            },
            "organizationType": {
              "id": "3a18ec22-ac23-4394-b571-0867709a1956",
              "key": "Organization-Type",
              "code": "svckf",
              "name": {
                "am": "Administration",
                "en": "Administration"
              },
              "order": 0,
              "timestamp": "2021-08-23T11:33:33.445887",
              "description": {
                "am": "Administration",
                "en": "Administration"
              }
            },
            "code": "fwYVz00290",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": {
              "id": "3c224171-4702-417f-a76e-b15dc0bf94b2",
              "name": {
                "am": "Education",
                "en": "Education"
              },
              "timestamp": "2022-06-24T12:31:37.866714",
              "description": {
                "am": "Education",
                "en": "Education"
              }
            },
            "externalOrganizationCode": null,
            "timestamp": "2023-09-25T06:07:54.738174"
          },
          {
            "id": "d5bdeeb5-5381-4660-935f-58da81eb9deb",
            "name": {
              "am": "የኢትዮጵያ ፕሬስ አጀንሲ",
              "en": "Ethiopian Press Agency"
            },
            "shortName": {
              "am": "EPA",
              "en": "EPA"
            },
            "description": {
              "am": "የኢትዮጵያ ፕሬስ አጀንሲ",
              "en": "Ethiopian Press Agency"
            },
            "organizationType": {
              "id": "4c2c2ef8-1c8c-40e2-82b1-2b07e10f82f0",
              "key": "Organization-Type",
              "code": "32323",
              "name": {
                "am": "Government Organization",
                "en": "Government Organization",
                "or": null,
                "tg": null
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
                "am": "-",
                "en": "-",
                "or": null,
                "tg": null
              }
            },
            "code": "CNSTl",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": {
              "id": "92c5683e-77c7-4177-aedf-f201a8649a8a",
              "name": {
                "am": "ትራንስፖርት እና መገናኛ",
                "en": "Transport and Communication"
              },
              "timestamp": "2023-08-19T09:30:10.492956",
              "description": {
                "am": "ትራንስፖርት እና መገናኛ",
                "en": "Transport and Communication"
              }
            },
            "externalOrganizationCode": null,
            "timestamp": "2021-08-24T08:48:59.448171"
          },
          {
            "id": "321264bf-b051-4d5b-b46a-d07e131e4112",
            "name": {
              "am": "Gambella Water and Energy Bureau",
              "en": "Gambella Water and Energy Bureau"
            },
            "shortName": {
              "am": "GWEB",
              "en": "GWEB"
            },
            "description": {
              "am": "Gambella Water and Energy Bureau",
              "en": "Gambella Water and Energy Bureau"
            },
            "organizationType": {
              "id": "3a18ec22-ac23-4394-b571-0867709a1956",
              "key": "Organization-Type",
              "code": "svckf",
              "name": {
                "am": "Administration",
                "en": "Administration"
              },
              "order": 0,
              "timestamp": "2021-08-23T11:33:33.445887",
              "description": {
                "am": "Administration",
                "en": "Administration"
              }
            },
            "code": "PNZ9R00291",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": {
              "id": "fc9fa7cc-8371-4617-b3a5-06deabb525b6",
              "name": {
                "am": "ውሃ ሀብትና ኢነርጂ",
                "en": "Water Resources and Energy"
              },
              "timestamp": "2023-08-19T09:29:09.415465",
              "description": {
                "am": "ውሃ ሀብትና ኢነርጂ",
                "en": "Water Resources and Energy"
              }
            },
            "externalOrganizationCode": null,
            "timestamp": "2023-09-25T06:13:43.512332"
          },
          {
            "id": "ffcc1357-1767-4392-9d83-411d62f81321",
            "name": {
              "am": "የስነምግባርና ፀረሙስና ኮሚሽን",
              "en": "The Federal Ethics and Anti-Corruption Commission"
            },
            "shortName": {
              "am": "FEACC",
              "en": "FEACC"
            },
            "description": {
              "am": "የስነምግባርና ፀረሙስና ኮሚሽን",
              "en": "The Federal Ethics and Anti-Corruption Commission"
            },
            "organizationType": {
              "id": "cb506b84-ce1a-4d14-b04f-4562c1a2448e",
              "key": "Organization-Type",
              "code": "lontv",
              "name": {
                "am": " Commission",
                "en": " Commission"
              },
              "order": 0,
              "timestamp": "2021-09-16T12:26:40.817191",
              "description": {
                "am": " Commission",
                "en": " Commission"
              }
            },
            "code": "NOIjU",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": {
              "id": "0fc7ab4e-deab-49ae-9117-731ec0c5450c",
              "name": {
                "am": "ፍትህ እና ደህንነት",
                "en": "Justice and security"
              },
              "timestamp": "2023-08-19T09:27:30.520502",
              "description": {
                "am": "ፍትህ እና ደህንነት",
                "en": "Justice and security"
              }
            },
            "externalOrganizationCode": "11022",
            "timestamp": "2021-08-24T08:25:13.164682"
          },
          {
            "id": "ba509421-c3d7-4555-ad20-6387e610bcc9",
            "name": {
              "am": "አጋርፋ  ግ/ቴ/ሙ/ት/ስ/ኮሌጅ",
              "en": "Agarfa ATVET College"
            },
            "shortName": {
              "am": "AGTC",
              "en": "AGTC"
            },
            "description": {
              "am": "አጋርፋ  ግ/ቴ/ሙ/ት/ስ/ኮሌጅ",
              "en": "Agarfa ATVET College"
            },
            "organizationType": {
              "id": "04c1385a-761b-4570-be88-e8ba1954f45a",
              "key": "Organization-Type",
              "code": "0035",
              "name": {
                "am": "Higher Inistitution",
                "en": "Higher Inistitution",
                "or": null,
                "tg": null
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
      
              }
            },
            "code": "WDmrb",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": {
              "fax": {
                "code": "+251",
                "number": ""
              },
              "city": {
                "am": null,
                "en": null
              },
              "zone": {
                "am": null,
                "en": null
              },
              "email": "",
              "mobile": {
                "code": "+251",
                "number": ""
              },
              "postal": "",
              "region": {
                "am": null,
                "en": null
              },
              "district": {
                "am": null,
                "en": null
              },
              "telephone": {
                "code": "+251",
                "number": ""
              },
              "houseNumber": ""
            },
            "organizationSector": {
              "id": "3c224171-4702-417f-a76e-b15dc0bf94b2",
              "name": {
                "am": "Education",
                "en": "Education"
              },
              "timestamp": "2022-06-24T12:31:37.866714",
              "description": {
                "am": "Education",
                "en": "Education"
              }
            },
            "externalOrganizationCode": null,
            "timestamp": "2021-08-24T10:19:53.439621"
          },
          {
            "id": "b9de216e-8676-47e5-8b30-ec75c5881d33",
            "name": {
              "am": "ድሬዳዋ ዩኒቨርሲቲ",
              "en": "Dire Dawa University"
            },
            "shortName": {
              "am": "DDU",
              "en": "DDU"
            },
            "description": {
              "am": "ድሬዳዋ ዩኒቨርሲቲ",
              "en": "Dire Dawa University"
            },
            "organizationType": {
              "id": "04c1385a-761b-4570-be88-e8ba1954f45a",
              "key": "Organization-Type",
              "code": "0035",
              "name": {
                "am": "Higher Inistitution",
                "en": "Higher Inistitution",
                "or": null,
                "tg": null
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
      
              }
            },
            "code": "a1MIt",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": {
              "id": "3c224171-4702-417f-a76e-b15dc0bf94b2",
              "name": {
                "am": "Education",
                "en": "Education"
              },
              "timestamp": "2022-06-24T12:31:37.866714",
              "description": {
                "am": "Education",
                "en": "Education"
              }
            },
            "externalOrganizationCode": "11227",
            "timestamp": "2021-08-24T10:42:06.414855"
          },
          {
            "id": "22444e9d-d41c-41dd-8133-e569585472f6",
            "name": {
              "am": "የሰነዶች ማረጋገጫና ምዝገባ አገልግሎት",
              "en": "Documents Authentication and Registration service"
            },
            "shortName": {
              "am": "DARS",
              "en": "DARA"
            },
            "description": {
              "am": "የሰነዶች ማረጋገጫና ምዝገባ አገልግሎት",
              "en": "Documents Authentication and Registration service\n"
            },
            "organizationType": {
              "id": "de36436b-a5bc-4f67-bcaf-44b171f0e5b0",
              "key": "Organization-Type",
              "code": "c8m3r",
              "name": {
                "am": "Service",
                "en": "Service"
              },
              "order": 0,
              "timestamp": "2021-07-13T12:10:26.94161",
              "description": {
                "am": "Service",
                "en": "Service"
              }
            },
            "code": "qrKVx",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": {
              "fax": {
                "code": "+251",
                "number": ""
              },
              "city": {
                "am": null,
                "en": null
              },
              "zone": {
                "am": null,
                "en": null
              },
              "email": "",
              "mobile": {
                "code": "+251",
                "number": ""
              },
              "postal": "",
              "region": {
                "am": null,
                "en": null
              },
              "district": {
                "am": null,
                "en": null
              },
              "telephone": {
                "code": "+251",
                "number": ""
              },
              "houseNumber": ""
            },
            "organizationSector": {
              "id": "0fc7ab4e-deab-49ae-9117-731ec0c5450c",
              "name": {
                "am": "ፍትህ እና ደህንነት",
                "en": "Justice and security"
              },
              "timestamp": "2023-08-19T09:27:30.520502",
              "description": {
                "am": "ፍትህ እና ደህንነት",
                "en": "Justice and security"
              }
            },
            "externalOrganizationCode": "11027",
            "timestamp": "2021-09-16T13:00:16.236399"
          },
          {
            "id": "c9ed882a-fba8-409f-931d-7bcc8a035bdd",
            "name": {
              "am": "Federal Cooperative Agency1",
              "en": "Federal Cooperative Agency1"
            },
            "shortName": {
              "am": "FCA1",
              "en": "FCA1"
            },
            "description": {
              "am": "Federal Cooperative Agency1",
              "en": "Federal Cooperative Agency1"
            },
            "organizationType": {
              "id": "c82533f5-a4d0-49d2-9b42-035c250af606",
              "key": "Organization-Type",
              "code": "0045",
              "name": {
                "am": "Agencies",
                "en": "Agencies",
                "or": null,
                "tg": null
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
      
              }
            },
            "code": "NeMy3",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": true,
            "deleteRemark": "redundent",
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": null,
            "externalOrganizationCode": null,
            "timestamp": "2021-08-12T08:38:33.8183"
          },
          {
            "id": "ac26d86d-049a-4963-8eb0-926b57b2f891",
            "name": {
              "am": "የተፋሰሶች ልማት ባለስልጣን",
              "en": "Basin Development Authority"
            },
            "shortName": {
              "am": "BDA",
              "en": "BDA"
            },
            "description": {
              "am": "የተፋሰሶች ልማት ባለስልጣን",
              "en": "Basin Development Authority"
            },
            "organizationType": {
              "id": "eaaaebc3-ea65-4ef7-8603-8861977eb2d1",
              "key": "Organization-Type",
              "code": "ryxlq",
              "name": {
                "am": "Authority",
                "en": "Authority"
              },
              "order": 0,
              "timestamp": "2021-07-13T11:59:56.336819",
              "description": {
                "am": "Authority",
                "en": "Authority"
              }
            },
            "code": "5IAaz",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": null,
            "externalOrganizationCode": null,
            "timestamp": "2021-08-24T10:32:57.564716"
          },
          {
            "id": "10f2255a-46a1-41c6-b7c4-cb5f80bb1ff5",
            "name": {
              "am": "አርዳይታ ግ/ቴ/ሙ/ት/ስ/ኮሌጅ",
              "en": "Ardaita ATVET COLLEGE"
            },
            "shortName": {
              "am": "ARTC",
              "en": "ARTC"
            },
            "description": {
              "am": "አርዳይታ ግ/ቴ/ሙ/ት/ስ/ኮሌጅ",
              "en": "Ardaita ATVET COLLEGE"
            },
            "organizationType": {
              "id": "04c1385a-761b-4570-be88-e8ba1954f45a",
              "key": "Organization-Type",
              "code": "0035",
              "name": {
                "am": "Higher Inistitution",
                "en": "Higher Inistitution",
                "or": null,
                "tg": null
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
      
              }
            },
            "code": "ER0rT",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": {
              "id": "3c224171-4702-417f-a76e-b15dc0bf94b2",
              "name": {
                "am": "Education",
                "en": "Education"
              },
              "timestamp": "2022-06-24T12:31:37.866714",
              "description": {
                "am": "Education",
                "en": "Education"
              }
            },
            "externalOrganizationCode": null,
            "timestamp": "2021-08-24T10:16:13.901457"
          },
          {
            "id": "04ff3dc7-8d11-41f2-a270-4b4c79c56bb6",
            "name": {
              "am": "የኢትዮጵያ ህዝብ ዕንባ ጠባቂ ተቋም",
              "en": "Ethiopian Institution of Ombudsman"
            },
            "shortName": {
              "am": "EIO",
              "en": "EIO"
            },
            "description": {
              "am": "የኢትዮጵያ ህዝብ ዕንባ ጠባቂ ተቋም",
              "en": "Ethiopian Institution of Ombudsman"
            },
            "organizationType": {
              "id": "4c2c2ef8-1c8c-40e2-82b1-2b07e10f82f0",
              "key": "Organization-Type",
              "code": "32323",
              "name": {
                "am": "Government Organization",
                "en": "Government Organization",
                "or": null,
                "tg": null
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
                "am": "-",
                "en": "-",
                "or": null,
                "tg": null
              }
            },
            "code": "AaxoB",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": {
              "id": "0fc7ab4e-deab-49ae-9117-731ec0c5450c",
              "name": {
                "am": "ፍትህ እና ደህንነት",
                "en": "Justice and security"
              },
              "timestamp": "2023-08-19T09:27:30.520502",
              "description": {
                "am": "ፍትህ እና ደህንነት",
                "en": "Justice and security"
              }
            },
            "externalOrganizationCode": "11026",
            "timestamp": "2021-08-24T13:34:34.556228"
          },
          {
            "id": "b28c3177-04a9-4c25-b88a-b5a9972d2de5",
            "name": {
              "am": "የኢትዮጵያ ስጋና ወተት ኢንዱስትሪ ልማት ኢንስቲትዩት",
              "en": "Ethiopian Meat and diary Industry development Institute"
            },
            "shortName": {
              "am": "EMDIDI",
              "en": "EMDIDI"
            },
            "description": {
              "am": "የኢትዮጵያ ስጋና ወተት ኢንዱስትሪ ልማት ኢንስቲትዩት",
              "en": "Ethiopian Meat and diary Industry development Institute"
            },
            "organizationType": {
              "id": "4c2c2ef8-1c8c-40e2-82b1-2b07e10f82f0",
              "key": "Organization-Type",
              "code": "32323",
              "name": {
                "am": "Government Organization",
                "en": "Government Organization",
                "or": null,
                "tg": null
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
                "am": "-",
                "en": "-",
                "or": null,
                "tg": null
              }
            },
            "code": "86EWy",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": null,
            "externalOrganizationCode": null,
            "timestamp": "2021-08-24T13:02:51.477592"
          },
          {
            "id": "bff575c4-e092-4c71-8246-a5eaf35469ce",
            "name": {
              "am": "ቦረና ዩኒቨርሲቲ",
              "en": "Borana Universty"
            },
            "shortName": {
              "am": "BRU",
              "en": "BRU"
            },
            "description": {
              "am": "ቦረና ዩኒቨርሲቲ\n",
              "en": "Borana Universty\n"
            },
            "organizationType": {
              "id": "04c1385a-761b-4570-be88-e8ba1954f45a",
              "key": "Organization-Type",
              "code": "0035",
              "name": {
                "am": "Higher Inistitution",
                "en": "Higher Inistitution",
                "or": null,
                "tg": null
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
      
              }
            },
            "code": "M0na1",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": null,
            "externalOrganizationCode": null,
            "timestamp": "2021-08-24T13:31:42.646243"
          },
          {
            "id": "80b08ead-487f-4cc1-85d2-866e9363b007",
            "name": {
              "am": "ብርታ ብረት ኢንዱስትሪ ልማት ኢንስቲትዩት",
              "en": "metal industry development institute"
            },
            "shortName": {
              "am": "MIDI",
              "en": "MIDI"
            },
            "description": {
              "am": "metal industry development institute",
              "en": "metal industry development institute"
            },
            "organizationType": {
              "id": "4c2c2ef8-1c8c-40e2-82b1-2b07e10f82f0",
              "key": "Organization-Type",
              "code": "32323",
              "name": {
                "am": "Government Organization",
                "en": "Government Organization",
                "or": null,
                "tg": null
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
                "am": "-",
                "en": "-",
                "or": null,
                "tg": null
              }
            },
            "code": "plU4a",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": {
              "id": "1ed15352-c17b-4f3a-97a5-ec23c32e38df",
              "name": {
                "am": "Economy ",
                "en": "Economy "
              },
              "timestamp": "2022-06-24T12:32:13.56549",
              "description": {
                "am": "Economy ",
                "en": "Economy "
              }
            },
            "externalOrganizationCode": null,
            "timestamp": "2021-08-24T12:48:06.411547"
          },
          {
            "id": "e9166610-630d-4321-acfd-ad75ed43a93d",
            "name": {
              "am": "የኢትዮጵያ ምርት ገበያ ባለስልጣን",
              "en": "Ethiopian Commodity Exchange Authority"
            },
            "shortName": {
              "am": "ECEA",
              "en": "ECEA"
            },
            "description": {
              "am": "የኢትዮጵያ ምርት ገበያ ባለስልጣን",
              "en": "Ethiopian Commodity Exchange Authority"
            },
            "organizationType": {
              "id": "eaaaebc3-ea65-4ef7-8603-8861977eb2d1",
              "key": "Organization-Type",
              "code": "ryxlq",
              "name": {
                "am": "Authority",
                "en": "Authority"
              },
              "order": 0,
              "timestamp": "2021-07-13T11:59:56.336819",
              "description": {
                "am": "Authority",
                "en": "Authority"
              }
            },
            "code": "tYXqW",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": {
              "id": "1ed15352-c17b-4f3a-97a5-ec23c32e38df",
              "name": {
                "am": "Economy ",
                "en": "Economy "
              },
              "timestamp": "2022-06-24T12:32:13.56549",
              "description": {
                "am": "Economy ",
                "en": "Economy "
              }
            },
            "externalOrganizationCode": null,
            "timestamp": "2021-08-24T12:13:09.882042"
          },
          {
            "id": "cd543cc0-a184-4de0-a44b-520ef19957d8",
            "name": {
              "am": "ኢትዮጵያ ሲቪል ሰርቪስ ዩኒቨርስቲ",
              "en": "Ethiopian Civil Service University "
            },
            "shortName": {
              "am": "ecsu1",
              "en": "ecsu1"
            },
            "description": {
              "am": "Ethiopian Civil Service University ",
              "en": "Ethiopian Civil Service University "
            },
            "organizationType": {
              "id": "04c1385a-761b-4570-be88-e8ba1954f45a",
              "key": "Organization-Type",
              "code": "0035",
              "name": {
                "am": "Higher Inistitution",
                "en": "Higher Inistitution",
                "or": null,
                "tg": null
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
      
              }
            },
            "code": "Gro8z",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": false,
            "isLocked": false,
            "isDeleted": true,
            "deleteRemark": "dupplicate",
            "deactivateRemark": "duplicate",
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": null,
            "externalOrganizationCode": null,
            "timestamp": "2021-08-24T11:44:12.859273"
          },
          {
            "id": "03b3df4c-a687-4304-9d39-0a442f7d4cb3",
            "name": {
              "am": "Justice Legal Research And Training Institute",
              "en": "Justice Legal Research And Training Institute"
            },
            "shortName": {
              "am": "JLRTI",
              "en": "JLRTI"
            },
            "description": {
              "am": "Justice Legal Research And Training Institute",
              "en": "Justice Legal Research And Training Institute"
            },
            "organizationType": {
              "id": "4c2c2ef8-1c8c-40e2-82b1-2b07e10f82f0",
              "key": "Organization-Type",
              "code": "32323",
              "name": {
                "am": "Government Organization",
                "en": "Government Organization",
                "or": null,
                "tg": null
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
                "am": "-",
                "en": "-",
                "or": null,
                "tg": null
              }
            },
            "code": "B30UH",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": true,
            "deleteRemark": "zs",
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": null,
            "externalOrganizationCode": null,
            "timestamp": "2021-08-24T13:20:42.17509"
          },
          {
            "id": "ed524185-fb25-4668-a291-7dabacb4e234",
            "name": {
              "am": "Benshangul Gumuz Regional State Finance Bureau ",
              "en": "Benshangul Gumuz Regional State Finance Bureau "
            },
            "shortName": {
              "am": "BGRSFB",
              "en": "BGRSFB"
            },
            "description": {
              "am": "Benshangul Gumuz Regional State Finance Bureau ",
              "en": "Benshangul Gumuz Regional State Finance Bureau "
            },
            "organizationType": {
              "id": "3a18ec22-ac23-4394-b571-0867709a1956",
              "key": "Organization-Type",
              "code": "svckf",
              "name": {
                "am": "Administration",
                "en": "Administration"
              },
              "order": 0,
              "timestamp": "2021-08-23T11:33:33.445887",
              "description": {
                "am": "Administration",
                "en": "Administration"
              }
            },
            "code": "fFgvl00312",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": {
              "id": "1ed15352-c17b-4f3a-97a5-ec23c32e38df",
              "name": {
                "am": "Economy ",
                "en": "Economy "
              },
              "timestamp": "2022-06-24T12:32:13.56549",
              "description": {
                "am": "Economy ",
                "en": "Economy "
              }
            },
            "externalOrganizationCode": null,
            "timestamp": "2023-09-25T08:32:44.241871"
          },
          {
            "id": "32da641a-da38-4243-8591-960c587fb418",
            "name": {
              "am": "የኬሜካል እና ኮንስትራክሽን ግብዓቶች ኢንደስትሪ ልማት ኢንስቲትዩት",
              "en": "Chemical and Construction Inputs Industry Development Institute"
            },
            "shortName": {
              "am": "CCIIDI ",
              "en": "CCIIDI "
            },
            "description": {
              "am": "የኬሜካል እና ኮንስትራክሽን ግብዓቶች ኢንደስትሪ ልማት ኢንስቲትዩት\n",
              "en": "Chemical and Construction Inputs Industry Development Institute\n"
            },
            "organizationType": {
              "id": "4c2c2ef8-1c8c-40e2-82b1-2b07e10f82f0",
              "key": "Organization-Type",
              "code": "32323",
              "name": {
                "am": "Government Organization",
                "en": "Government Organization",
                "or": null,
                "tg": null
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
                "am": "-",
                "en": "-",
                "or": null,
                "tg": null
              }
            },
            "code": "BYrqI",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": true,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": null,
            "externalOrganizationCode": null,
            "timestamp": "2021-08-24T13:48:43.960187"
          },
          {
            "id": "41a08618-a72d-44b2-90d7-f4b7913d4c28",
            "name": {
              "am": "የፍትህ ሚኒስቴር",
              "en": "Ministry of justice"
            },
            "shortName": {
              "am": "Moj",
              "en": "Moj"
            },
            "description": {
              "am": "የፍትህ ሚኒስቴር",
              "en": "Ministry of justice"
            },
            "organizationType": {
              "id": "a79bcd65-39d1-4ce2-b360-99ab20b2ba32",
              "key": "Organization-Type",
              "code": "09",
              "name": {
                "am": "Ministry",
                "en": "Ministry"
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
                "am": "",
                "en": ""
              }
            },
            "code": "2Z4Cu",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": {
              "id": "0fc7ab4e-deab-49ae-9117-731ec0c5450c",
              "name": {
                "am": "ፍትህ እና ደህንነት",
                "en": "Justice and security"
              },
              "timestamp": "2023-08-19T09:27:30.520502",
              "description": {
                "am": "ፍትህ እና ደህንነት",
                "en": "Justice and security"
              }
            },
            "externalOrganizationCode": "11010",
            "timestamp": "2021-08-25T06:01:45.361439"
          },
          {
            "id": "11b4faa7-17a8-44d9-aaa2-32463b3d4d3d",
            "name": {
              "am": "Benshangul Gumuz Regional State Education Bureau",
              "en": "Benshangul Gumuz Regional State Education Bureau"
            },
            "shortName": {
              "am": "BGRSE",
              "en": "BGRSE"
            },
            "description": {
              "am": "Benshangul Gumuz Regional State Education Bureau",
              "en": "Benshangul Gumuz Regional State Education Bureau"
            },
            "organizationType": {
              "id": "3a18ec22-ac23-4394-b571-0867709a1956",
              "key": "Organization-Type",
              "code": "svckf",
              "name": {
                "am": "Administration",
                "en": "Administration"
              },
              "order": 0,
              "timestamp": "2021-08-23T11:33:33.445887",
              "description": {
                "am": "Administration",
                "en": "Administration"
              }
            },
            "code": "ysC0X00313",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": {
              "id": "3c224171-4702-417f-a76e-b15dc0bf94b2",
              "name": {
                "am": "Education",
                "en": "Education"
              },
              "timestamp": "2022-06-24T12:31:37.866714",
              "description": {
                "am": "Education",
                "en": "Education"
              }
            },
            "externalOrganizationCode": null,
            "timestamp": "2023-09-25T08:51:15.771083"
          },
          {
            "id": "5f8186cb-4dec-4e9b-93ea-281af62ecac6",
            "name": {
              "am": "የሰላም ሚኒስቴር",
              "en": "Ministry of Peace"
            },
            "shortName": {
              "am": "MoP",
              "en": "MoP"
            },
            "description": {
              "am": "የሰላም ሚኒስቴር",
              "en": "Ministry of Peace"
            },
            "organizationType": {
              "id": "a79bcd65-39d1-4ce2-b360-99ab20b2ba32",
              "key": "Organization-Type",
              "code": "09",
              "name": {
                "am": "ministry",
                "en": "ministry",
                "or": null,
                "tg": null
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
      
              }
            },
            "code": "G1UWr",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": {
              "id": "53a63473-9f24-4ca8-a694-9404c4933d47",
              "name": {
                "am": "የህግ አውጪና አስፈፃሚ አካላት",
                "en": "Legislative and Executive Bodies"
              },
              "timestamp": "2023-08-19T09:26:54.441101",
              "description": {
                "am": "Legislative and Executive Bodies",
                "en": "Legislative and Executive Bodies"
              }
            },
            "externalOrganizationCode": "11009",
            "timestamp": "2021-08-24T13:53:55.373604"
          },
          {
            "id": "1040661a-4d63-4b37-8bf7-9875135fa936",
            "name": {
              "am": "የፌዴራል ታክስ ይግባኝ ኮሚሽን ",
              "en": "Tax Appeal Commission "
            },
            "shortName": {
              "am": "ታይኮ",
              "en": "TAC"
            },
            "description": {
              "am": "Tax Appeal Commission ",
              "en": "Tax Appeal Commission "
            },
            "organizationType": {
              "id": "4c2c2ef8-1c8c-40e2-82b1-2b07e10f82f0",
              "key": "Organization-Type",
              "code": "32323",
              "name": {
                "am": "Government Organization",
                "en": "Government Organization",
                "or": null,
                "tg": null
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
                "am": "-",
                "en": "-",
                "or": null,
                "tg": null
              }
            },
            "code": "b5Bos",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": true,
            "deleteRemark": "duplication ",
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": null,
            "externalOrganizationCode": null,
            "timestamp": "2021-08-25T06:06:49.971466"
          },
          {
            "id": "051c7bda-9cc3-4858-9013-c3f42a4c362d",
            "name": {
              "am": "የፕሬዝዳንት ጽ/ቤት",
              "en": "Office of the President "
            },
            "shortName": {
              "am": "OOP",
              "en": "OOP"
            },
            "description": {
              "am": "የፕሬዝዳንት ጽ/ቤት",
              "en": "Office of the President "
            },
            "organizationType": {
              "id": "4c2c2ef8-1c8c-40e2-82b1-2b07e10f82f0",
              "key": "Organization-Type",
              "code": "32323",
              "name": {
                "am": "Government Organization",
                "en": "Government Organization",
                "or": null,
                "tg": null
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
                "am": "-",
                "en": "-",
                "or": null,
                "tg": null
              }
            },
            "code": "arGNB",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": {
              "id": "53a63473-9f24-4ca8-a694-9404c4933d47",
              "name": {
                "am": "የህግ አውጪና አስፈፃሚ አካላት",
                "en": "Legislative and Executive Bodies"
              },
              "timestamp": "2023-08-19T09:26:54.441101",
              "description": {
                "am": "Legislative and Executive Bodies",
                "en": "Legislative and Executive Bodies"
              }
            },
            "externalOrganizationCode": "11006",
            "timestamp": "2021-08-24T13:44:35.67343"
          },
          {
            "id": "4b50da92-d08c-4672-8775-25114a4959bd",
            "name": {
              "am": "የኢትዮጵያ የጤና መድህን አገልግሎት",
              "en": "Ethiopian Health Insurance Service"
            },
            "shortName": {
              "am": "EHIA",
              "en": "EHIA"
            },
            "description": {
              "am": "የኢትዮጵያ የጤና መድህን አገልግሎት",
              "en": "Ethiopian Health Insurance Service"
            },
            "organizationType": {
              "id": "de36436b-a5bc-4f67-bcaf-44b171f0e5b0",
              "key": "Organization-Type",
              "code": "c8m3r",
              "name": {
                "am": "Service",
                "en": "Service"
              },
              "order": 0,
              "timestamp": "2021-07-13T12:10:26.94161",
              "description": {
                "am": "Service",
                "en": "Service"
              }
            },
            "code": "SNu59",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": {
              "fax": {
                "code": "+251",
                "number": ""
              },
              "city": {
                "am": null,
                "en": null
              },
              "zone": {
                "am": null,
                "en": null
              },
              "email": "",
              "mobile": {
                "code": "+251",
                "number": ""
              },
              "postal": "",
              "region": {
                "am": null,
                "en": null
              },
              "district": {
                "am": null,
                "en": null
              },
              "telephone": {
                "code": "+251",
                "number": ""
              },
              "houseNumber": ""
            },
            "organizationSector": {
              "id": "65f35246-9b3d-4d80-b878-e22cc9eec8ca",
              "name": {
                "am": "Health",
                "en": "Health"
              },
              "timestamp": "2022-06-24T12:31:24.832988",
              "description": {
                "am": "Health",
                "en": "Health"
              }
            },
            "externalOrganizationCode": "13605",
            "timestamp": "2021-08-31T13:41:40.379545"
          },
          {
            "id": "1fdf2238-6177-48f8-8254-e68c4ee0e1fd",
            "name": {
              "am": "Afar Regional State Road and Transport Bureau ",
              "en": "Afar Regional State Road and Transport Bureau "
            },
            "shortName": {
              "am": "ARSETB",
              "en": "ARSETB"
            },
            "description": {
              "am": "Afar Regional State Road and Transport Bureau ",
              "en": "Afar Regional State Road and Transport Bureau "
            },
            "organizationType": {
              "id": "3a18ec22-ac23-4394-b571-0867709a1956",
              "key": "Organization-Type",
              "code": "svckf",
              "name": {
                "am": "Administration",
                "en": "Administration"
              },
              "order": 0,
              "timestamp": "2021-08-23T11:33:33.445887",
              "description": {
                "am": "Administration",
                "en": "Administration"
              }
            },
            "code": "qyEmK00324",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": {
              "id": "92c5683e-77c7-4177-aedf-f201a8649a8a",
              "name": {
                "am": "ትራንስፖርት እና መገናኛ",
                "en": "Transport and Communication"
              },
              "timestamp": "2023-08-19T09:30:10.492956",
              "description": {
                "am": "ትራንስፖርት እና መገናኛ",
                "en": "Transport and Communication"
              }
            },
            "externalOrganizationCode": null,
            "timestamp": "2023-09-25T10:51:30.122536"
          },
          {
            "id": "6c8c0b3d-5277-4840-b552-62031e365630",
            "name": {
              "am": "የኢትዮጵያ ጨርቃጨርቅ ኢንዱስትሪ ልማት ኢንስቲቱት",
              "en": "Ethiopian Textile Industry Development Institute "
            },
            "shortName": {
              "am": "ETIDI",
              "en": "ETIDI"
            },
            "description": {
              "am": "የኢትዮጵያ ጨርቃጨርቅ ኢንዱስትሪ ልማት ኢንስቲቱት\n",
              "en": "Ethiopian Textile Industry Development Institute \n"
            },
            "organizationType": {
              "id": "4c2c2ef8-1c8c-40e2-82b1-2b07e10f82f0",
              "key": "Organization-Type",
              "code": "32323",
              "name": {
                "am": "Government Organization",
                "en": "Government Organization",
                "or": null,
                "tg": null
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
                "am": "-",
                "en": "-",
                "or": null,
                "tg": null
              }
            },
            "code": "iZneO",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": null,
            "externalOrganizationCode": null,
            "timestamp": "2021-08-25T06:31:52.934838"
          },
          {
            "id": "31396f0c-066e-4044-8c5d-306a5ac51647",
            "name": {
              "am": "የኢትዮጵያ መንገዶች አስተዳደር",
              "en": "Ethiopian Road Administration"
            },
            "shortName": {
              "am": "ERA",
              "en": "ERA"
            },
            "description": {
              "am": "የኢትዮጵያ መንገዶች አስተዳደር",
              "en": "Ethiopian Road Administration"
            },
            "organizationType": {
              "id": "3a18ec22-ac23-4394-b571-0867709a1956",
              "key": "Organization-Type",
              "code": "svckf",
              "name": {
                "am": "Administration",
                "en": "Administration"
              },
              "order": 0,
              "timestamp": "2021-08-23T11:33:33.445887",
              "description": {
                "am": "Administration",
                "en": "Administration"
              }
            },
            "code": "luJ1E",
            "status": "Draft",
            "logo": {
              "file_name": "ERA logo.jpg",
              "file_path": "01135282-ab26-41af-b438-854e8a902115.jpg",
              "file_type": ".jpg"
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": {
              "fax": {
                "code": "+251",
                "number": ""
              },
              "city": {
                "am": null,
                "en": null
              },
              "zone": {
                "am": null,
                "en": null
              },
              "email": "",
              "mobile": {
                "code": "+251",
                "number": ""
              },
              "postal": "",
              "region": {
                "am": null,
                "en": null
              },
              "district": {
                "am": null,
                "en": null
              },
              "telephone": {
                "code": "+251",
                "number": ""
              },
              "houseNumber": ""
            },
            "organizationSector": {
              "id": "3192fc10-11c7-44fe-b7ee-8f9aa869f44b",
              "name": {
                "am": "የከተማ ልማት እና ኮንስትራክሽን",
                "en": "Urban development and construction"
              },
              "timestamp": "2023-08-19T09:30:32.659427",
              "description": {
                "am": "የከተማ ልማት እና ኮንስትራክሽን",
                "en": "Urban development and construction"
              }
            },
            "externalOrganizationCode": "12371",
            "timestamp": "2021-07-13T12:00:40.186807"
          },
          {
            "id": "ab04dc2c-5a04-4924-bf0b-0c5c7d3bbc72",
            "name": {
              "am": "የኤፌዲሪ ስፖርት ኮምሽን",
              "en": "FDRE Sport Commission "
            },
            "shortName": {
              "am": "FSC",
              "en": "FSC"
            },
            "description": {
              "am": "የኤፌዲሪ ስፖርት ኮምሽን\n",
              "en": "FDRE Sport Commission \n"
            },
            "organizationType": {
              "id": "4c2c2ef8-1c8c-40e2-82b1-2b07e10f82f0",
              "key": "Organization-Type",
              "code": "32323",
              "name": {
                "am": "Government Organization",
                "en": "Government Organization",
                "or": null,
                "tg": null
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
                "am": "-",
                "en": "-",
                "or": null,
                "tg": null
              }
            },
            "code": "emwnH",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": null,
            "externalOrganizationCode": null,
            "timestamp": "2021-08-25T06:39:33.678081"
          },
          {
            "id": "4a7eb1ee-e46f-40c8-974c-9f56f82ca9f4",
            "name": {
              "am": "የምግብ፣ መጠጥ ፋርማሴቲካል ኢንዱስትሪ ልማት ኢንስቲቱት",
              "en": "Food, Beverage and Pharmaceutical Industry Development Institute "
            },
            "shortName": {
              "am": "FBPIDI",
              "en": "FBPIDI"
            },
            "description": {
              "am": "የምግብ፣ መጠጥ ፋርማሴቲካል ኢንዱስትሪ ልማት ኢንስቲቱት\n",
              "en": "Food, Beverage and Pharmaceutical Industry Development Institute \n"
            },
            "organizationType": {
              "id": "4c2c2ef8-1c8c-40e2-82b1-2b07e10f82f0",
              "key": "Organization-Type",
              "code": "32323",
              "name": {
                "am": "Government Organization",
                "en": "Government Organization",
                "or": null,
                "tg": null
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
                "am": "-",
                "en": "-",
                "or": null,
                "tg": null
              }
            },
            "code": "6Mvei",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": null,
            "externalOrganizationCode": null,
            "timestamp": "2021-08-25T06:57:30.338815"
          },
          {
            "id": "db507ef0-3e8d-46e7-99d6-7da5e626b6e7",
            "name": {
              "am": "የኢትዮጵያ አክሪዲቴሽን አገልግሎት",
              "en": "Ethiopian Accreditation Service"
            },
            "shortName": {
              "am": "EAS",
              "en": "EAS"
            },
            "description": {
              "am": "የኢትዮጵያ አክሪዲቴሽን አገልግሎት\n",
              "en": "Ethiopian Accreditation Service"
            },
            "organizationType": {
              "id": "de36436b-a5bc-4f67-bcaf-44b171f0e5b0",
              "key": "Organization-Type",
              "code": "c8m3r",
              "name": {
                "am": "Service",
                "en": "Service"
              },
              "order": 0,
              "timestamp": "2021-07-13T12:10:26.94161",
              "description": {
                "am": "Service",
                "en": "Service"
              }
            },
            "code": "oBC0f",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": {
              "id": "6921c8fd-f6a9-49d6-bc0a-4d3ef0b8c547",
              "name": {
                "am": "ንግድ እና ኢንዱስትሪ",
                "en": "Trade and Industry"
              },
              "timestamp": "2023-08-19T09:29:25.803321",
              "description": {
                "am": "ንግድ እና ኢንዱስትሪ",
                "en": "Trade and Industry"
              }
            },
            "externalOrganizationCode": "13841",
            "timestamp": "2021-08-25T06:17:28.946319"
          },
          {
            "id": "c5e4c5d0-c000-4b83-9d81-6b6f069c5168",
            "name": {
              "am": "South West Ethiopia People Regional State Agriculture Bureau",
              "en": "South West Ethiopia People Regional State Agriculture Bureau"
            },
            "shortName": {
              "am": "SWEPREA",
              "en": "SWEPREA"
            },
            "description": {
              "am": "South West Ethiopia People Regional State Agriculture Bureau",
              "en": "South West Ethiopia People Regional State Agriculture Bureau"
            },
            "organizationType": {
              "id": "3a18ec22-ac23-4394-b571-0867709a1956",
              "key": "Organization-Type",
              "code": "svckf",
              "name": {
                "am": "Administration",
                "en": "Administration"
              },
              "order": 0,
              "timestamp": "2021-08-23T11:33:33.445887",
              "description": {
                "am": "Administration",
                "en": "Administration"
              }
            },
            "code": "mFbjS00308",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": {
              "id": "87e0c7d3-b7c4-4f9b-9933-7a94633b0a8f",
              "name": {
                "am": "ግብርና እና ገጠር ልማት",
                "en": "Agriculture and Rural Development"
              },
              "timestamp": "2023-08-19T09:28:40.865568",
              "description": {
                "am": "ግብርና እና ገጠር ልማት",
                "en": "Agriculture and Rural Development"
              }
            },
            "externalOrganizationCode": null,
            "timestamp": "2023-09-25T08:12:46.42366"
          },
          {
            "id": "de85b599-7aa8-4e62-bd2a-b5f20493933e",
            "name": {
              "am": "South West Ethiopia People Regional State Procurement and Property Authority",
              "en": "South West Ethiopia People Regional State Procurement and Property Authority"
            },
            "shortName": {
              "am": "SWPRSPPA",
              "en": "SWPRSPPA"
            },
            "description": {
              "am": "South West Ethiopia People Regional State Procurement and Property Authority",
              "en": "South West Ethiopia People Regional State Procurement and Property Authority"
            },
            "organizationType": {
              "id": "3a18ec22-ac23-4394-b571-0867709a1956",
              "key": "Organization-Type",
              "code": "svckf",
              "name": {
                "am": "Administration",
                "en": "Administration"
              },
              "order": 0,
              "timestamp": "2021-08-23T11:33:33.445887",
              "description": {
                "am": "Administration",
                "en": "Administration"
              }
            },
            "code": "QYm8700306",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": {
              "id": "65f35246-9b3d-4d80-b878-e22cc9eec8ca",
              "name": {
                "am": "Health",
                "en": "Health"
              },
              "timestamp": "2022-06-24T12:31:24.832988",
              "description": {
                "am": "Health",
                "en": "Health"
              }
            },
            "externalOrganizationCode": null,
            "timestamp": "2023-09-25T08:09:06.883475"
          },
          {
            "id": "0dd42c7a-85ec-4580-8e04-efc0c5979717",
            "name": {
              "am": "ብሔራዊ የደም ባንክ አገልግሎት",
              "en": "National Blood Bank Service"
            },
            "shortName": {
              "am": "NBBS",
              "en": "NBBS"
            },
            "description": {
              "am": "ብሔራዊ የደም ባንክ አገልግሎት\n",
              "en": "National Blood Bank Service\n"
            },
            "organizationType": {
              "id": "4c2c2ef8-1c8c-40e2-82b1-2b07e10f82f0",
              "key": "Organization-Type",
              "code": "32323",
              "name": {
                "am": "Government Organization",
                "en": "Government Organization",
                "or": null,
                "tg": null
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
                "am": "-",
                "en": "-",
                "or": null,
                "tg": null
              }
            },
            "code": "mYv7Z",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": true,
            "deleteRemark": "dfdffd",
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": null,
            "externalOrganizationCode": null,
            "timestamp": "2021-08-25T07:23:24.8109"
          },
          {
            "id": "704821d4-43fb-454c-ae64-ec92f41a40cb",
            "name": {
              "am": "የፋይናንስ ደህንነት አገልግሎት",
              "en": "Financial Intelligence Service"
            },
            "shortName": {
              "am": "FIS",
              "en": "FIS"
            },
            "description": {
              "am": "የፋይናንስ ደህንነት አገልግሎት",
              "en": "Financial Intelligence Service"
            },
            "organizationType": {
              "id": "4c2c2ef8-1c8c-40e2-82b1-2b07e10f82f0",
              "key": "Organization-Type",
              "code": "32323",
              "name": {
                "am": "Government Organization",
                "en": "Government Organization",
                "or": null,
                "tg": null
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
                "am": "-",
                "en": "-",
                "or": null,
                "tg": null
              }
            },
            "code": "K6SWk",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": {
              "fax": {
                "code": "+251",
                "number": ""
              },
              "city": {
                "am": "አዲስ አበባ",
                "en": "Addis Ababa"
              },
              "zone": {
                "am": "ቂርቆስ ክ/ከተማ",
                "en": "Kirkos Subcity"
              },
              "email": "info@fis.gov.et",
              "mobile": {
                "code": "+251",
                "number": ""
              },
              "postal": "3364",
              "region": {
                "am": null,
                "en": null
              },
              "district": {
                "am": "",
                "en": "Wolo Sefer, Ethiochina St"
              },
              "telephone": {
                "code": "+251",
                "number": ""
              },
              "houseNumber": ""
            },
            "organizationSector": {
              "id": "0fc7ab4e-deab-49ae-9117-731ec0c5450c",
              "name": {
                "am": "ፍትህ እና ደህንነት",
                "en": "Justice and security"
              },
              "timestamp": "2023-08-19T09:27:30.520502",
              "description": {
                "am": "ፍትህ እና ደህንነት",
                "en": "Justice and security"
              }
            },
            "externalOrganizationCode": "11031",
            "timestamp": "2021-08-24T13:57:02.610008"
          },
          {
            "id": "eb47e4a9-b9a4-47ec-be70-6a80aa26d32c",
            "name": {
              "am": "የፌዴራል አነስተኛና መካከለኛ ማኑፋክቸሪንግ ኢንዱስትሪ ባለስልጣን",
              "en": "Small and Medium Manufacturing Industry Promotion Authority"
            },
            "shortName": {
              "am": "FSMMIPA",
              "en": "FSMMIPA"
            },
            "description": {
              "am": "የፌዴራል አነስተኛና መካከለኛ ማኑፋክቸሪንግ ኢንዱስትሪ ባለስልጣን\n",
              "en": "Small and Medium Manufacturing Industry Promotion Authority\n"
            },
            "organizationType": {
              "id": "eaaaebc3-ea65-4ef7-8603-8861977eb2d1",
              "key": "Organization-Type",
              "code": "ryxlq",
              "name": {
                "am": "Authority",
                "en": "Authority"
              },
              "order": 0,
              "timestamp": "2021-07-13T11:59:56.336819",
              "description": {
                "am": "Authority",
                "en": "Authority"
              }
            },
            "code": "XPASD",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": null,
            "externalOrganizationCode": null,
            "timestamp": "2021-08-25T07:26:19.174858"
          },
          {
            "id": "a5c814a4-0757-48bc-ba9f-bb907b887bd4",
            "name": {
              "am": "የባህልና ስፖርት ሚኒስቴር",
              "en": "Ministry of Culture & Sport"
            },
            "shortName": {
              "am": "MOCS",
              "en": "MOCS"
            },
            "description": {
              "am": "የባህልና ስፖርት ሚኒስቴር\n",
              "en": "Ministry of Culture & Sport\n"
            },
            "organizationType": {
              "id": "a79bcd65-39d1-4ce2-b360-99ab20b2ba32",
              "key": "Organization-Type",
              "code": "09",
              "name": {
                "am": "ministry",
                "en": "ministry",
                "or": null,
                "tg": null
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
      
              }
            },
            "code": "LpybR",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": {
              "fax": {
                "code": "+251",
                "number": ""
              },
              "city": {
                "am": null,
                "en": null
              },
              "zone": {
                "am": null,
                "en": null
              },
              "email": "",
              "mobile": {
                "code": "+251",
                "number": ""
              },
              "postal": "",
              "region": {
                "am": null,
                "en": null
              },
              "district": {
                "am": null,
                "en": null
              },
              "telephone": {
                "code": "+251",
                "number": ""
              },
              "houseNumber": ""
            },
            "organizationSector": {
              "id": "de36e074-9440-4545-bf21-914eca5c067d",
              "name": {
                "am": "ባህና ስፖርት",
                "en": "Culture and sports"
              },
              "timestamp": "2023-08-19T09:31:07.684819",
              "description": {
                "am": "ባህና ስፖርት",
                "en": "Culture and sports"
              }
            },
            "externalOrganizationCode": "11263",
            "timestamp": "2021-08-25T07:08:36.049229"
          },
          {
            "id": "c3a2889c-e911-49b3-9552-cb002c5baf13",
            "name": {
              "am": "Afar Regional State Water and Energy Bureau",
              "en": "Afar Regional State Water and Energy Bureau"
            },
            "shortName": {
              "am": "ARSWEB",
              "en": "ARSWEB"
            },
            "description": {
              "am": "Afar Regional State Water and Energy Bureau",
              "en": "Afar Regional State Water and Energy Bureau"
            },
            "organizationType": {
              "id": "3a18ec22-ac23-4394-b571-0867709a1956",
              "key": "Organization-Type",
              "code": "svckf",
              "name": {
                "am": "Administration",
                "en": "Administration"
              },
              "order": 0,
              "timestamp": "2021-08-23T11:33:33.445887",
              "description": {
                "am": "Administration",
                "en": "Administration"
              }
            },
            "code": "2IFMO00325",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": {
              "id": "fc9fa7cc-8371-4617-b3a5-06deabb525b6",
              "name": {
                "am": "ውሃ ሀብትና ኢነርጂ",
                "en": "Water Resources and Energy"
              },
              "timestamp": "2023-08-19T09:29:09.415465",
              "description": {
                "am": "ውሃ ሀብትና ኢነርጂ",
                "en": "Water Resources and Energy"
              }
            },
            "externalOrganizationCode": null,
            "timestamp": "2023-09-25T10:53:55.791817"
          },
          {
            "id": "99cb4c83-9c64-45b5-98a5-777922e83c20",
            "name": {
              "am": "የንግድ ዉድድርና የሸማቾች ጥበቃ ባለስልጣን",
              "en": "Trade Competition and Consumers Protection Authority "
            },
            "shortName": {
              "am": "TCCPA",
              "en": "TCCPA"
            },
            "description": {
              "am": "የንግድ ዉድድርና የሸማቾች ጥበቃ ባለስልጣን\n",
              "en": "Trade Competition and Consumers Protection Authority \n"
            },
            "organizationType": {
              "id": "eaaaebc3-ea65-4ef7-8603-8861977eb2d1",
              "key": "Organization-Type",
              "code": "ryxlq",
              "name": {
                "am": "Authority",
                "en": "Authority"
              },
              "order": 0,
              "timestamp": "2021-07-13T11:59:56.336819",
              "description": {
                "am": "Authority",
                "en": "Authority"
              }
            },
            "code": "TMFQd",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": null,
            "externalOrganizationCode": null,
            "timestamp": "2021-08-25T07:40:43.629206"
          },
          {
            "id": "4bb65c1e-ea97-4254-b92a-4af7e6e5ec10",
            "name": {
              "am": "ዋና ኦዲተር ጽ/ቤት",
              "en": "Office Of Federal Auditor General "
            },
            "shortName": {
              "am": "OFAG",
              "en": "OFAG"
            },
            "description": {
              "am": "ዋና ኦዲተር ጽ/ቤት",
              "en": "Office Of Federal Auditor General "
            },
            "organizationType": {
              "id": "4c2c2ef8-1c8c-40e2-82b1-2b07e10f82f0",
              "key": "Organization-Type",
              "code": "32323",
              "name": {
                "am": "Government Organization",
                "en": "Government Organization",
                "or": null,
                "tg": null
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
                "am": "-",
                "en": "-",
                "or": null,
                "tg": null
              }
            },
            "code": "W51qk",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": {
              "fax": {
                "code": "+251",
                "number": ""
              },
              "city": {
                "am": "አዲስ አበባ",
                "en": "Addis Ababa"
              },
              "zone": {
                "am": "ቂርቆስ",
                "en": "Kirkos"
              },
              "email": "ofagit@ethionet.et",
              "mobile": {
                "code": "+251",
                "number": ""
              },
              "postal": "457",
              "region": {
                "am": "አዲስ አበባ",
                "en": "Addis Ababa"
              },
              "district": {
                "am": "09",
                "en": "09"
              },
              "telephone": {
                "code": "+251",
                "number": ""
              },
              "houseNumber": ""
            },
            "organizationSector": {
              "id": "53a63473-9f24-4ca8-a694-9404c4933d47",
              "name": {
                "am": "የህግ አውጪና አስፈፃሚ አካላት",
                "en": "Legislative and Executive Bodies"
              },
              "timestamp": "2023-08-19T09:26:54.441101",
              "description": {
                "am": "Legislative and Executive Bodies",
                "en": "Legislative and Executive Bodies"
              }
            },
            "externalOrganizationCode": "11003",
            "timestamp": "2021-08-24T13:47:29.964929"
          },
          {
            "id": "4bffad23-7e63-489a-90f4-5016e9d72715",
            "name": {
              "am": "Afar Regional State Education Bureau",
              "en": "Afar Regional State Education Bureau"
            },
            "shortName": {
              "am": "ARSE",
              "en": "ARSE"
            },
            "description": {
              "am": "Afar Regional State Education Bureau",
              "en": "Afar Regional State Education Bureau"
            },
            "organizationType": {
              "id": "3a18ec22-ac23-4394-b571-0867709a1956",
              "key": "Organization-Type",
              "code": "svckf",
              "name": {
                "am": "Administration",
                "en": "Administration"
              },
              "order": 0,
              "timestamp": "2021-08-23T11:33:33.445887",
              "description": {
                "am": "Administration",
                "en": "Administration"
              }
            },
            "code": "uCREm00326",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": {
              "id": "3c224171-4702-417f-a76e-b15dc0bf94b2",
              "name": {
                "am": "Education",
                "en": "Education"
              },
              "timestamp": "2022-06-24T12:31:37.866714",
              "description": {
                "am": "Education",
                "en": "Education"
              }
            },
            "externalOrganizationCode": null,
            "timestamp": "2023-09-25T10:56:13.992329"
          },
          {
            "id": "3609f847-3179-44da-ba7a-370a2e7b121c",
            "name": {
              "am": "Information Network Security Administration",
              "en": "Information Network Security Administration"
            },
            "shortName": {
              "am": "INSA",
              "en": "INSA"
            },
            "description": {
              "am": "Information Network Security Service",
              "en": "Information Network Security Service"
            },
            "organizationType": {
              "id": "de36436b-a5bc-4f67-bcaf-44b171f0e5b0",
              "key": "Organization-Type",
              "code": "c8m3r",
              "name": {
                "am": "Service",
                "en": "Service"
              },
              "order": 0,
              "timestamp": "2021-07-13T12:10:26.94161",
              "description": {
                "am": "Service",
                "en": "Service"
              }
            },
            "code": "WsRlN",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": {
              "fax": {
                "code": "+251",
                "number": ""
              },
              "city": {
                "am": null,
                "en": null
              },
              "zone": {
                "am": null,
                "en": null
              },
              "email": "",
              "mobile": {
                "code": "+251",
                "number": ""
              },
              "postal": "",
              "region": {
                "am": null,
                "en": null
              },
              "district": {
                "am": null,
                "en": null
              },
              "telephone": {
                "code": "+251",
                "number": ""
              },
              "houseNumber": ""
            },
            "organizationSector": {
              "id": "0fc7ab4e-deab-49ae-9117-731ec0c5450c",
              "name": {
                "am": "ፍትህ እና ደህንነት",
                "en": "Justice and security"
              },
              "timestamp": "2023-08-19T09:27:30.520502",
              "description": {
                "am": "ፍትህ እና ደህንነት",
                "en": "Justice and security"
              }
            },
            "externalOrganizationCode": "11028",
            "timestamp": "2021-08-24T08:50:38.477622"
          },
          {
            "id": "00f54c16-495c-4a7d-aae9-238344757dff",
            "name": {
              "am": "መቱ ዩኒቨርሲቲ",
              "en": "Mettu University"
            },
            "shortName": {
              "am": "MEU",
              "en": "MEU"
            },
            "description": {
              "am": "መቱ ዩኒቨርሲቲ",
              "en": "Mettu University"
            },
            "organizationType": {
              "id": "04c1385a-761b-4570-be88-e8ba1954f45a",
              "key": "Organization-Type",
              "code": "0035",
              "name": {
                "am": "Higher Inistitution",
                "en": "Higher Inistitution",
                "or": null,
                "tg": null
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
      
              }
            },
            "code": "OMeEZ",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": {
              "fax": {
                "code": "+251",
                "number": ""
              },
              "city": {
                "am": "መቱ",
                "en": "Mattu"
              },
              "zone": {
                "am": "ኢሉ አባቦር",
                "en": "Illu Ababor"
              },
              "email": "mettuniversity@meu.edu.et",
              "mobile": {
                "code": "+251",
                "number": ""
              },
              "postal": "318",
              "region": {
                "am": "ኦሮሚያ",
                "en": "Oromiya"
              },
              "district": {
                "am": null,
                "en": null
              },
              "telephone": {
                "code": "+251",
                "number": ""
              },
              "houseNumber": ""
            },
            "organizationSector": null,
            "externalOrganizationCode": null,
            "timestamp": "2021-08-24T08:15:22.841454"
          },
          {
            "id": "e4f9d03a-abac-4e9d-89ab-40320eed1aee",
            "name": {
              "am": "የውጭ ጉዳይ ሚኒስቴር",
              "en": "Ministry of Foreign Affairs"
            },
            "shortName": {
              "am": "MoFA",
              "en": "MoFA"
            },
            "description": {
              "am": "የውጭ ጉዳይ ሚኒስቴር",
              "en": "Ministry of Foreign Affairs"
            },
            "organizationType": {
              "id": "a79bcd65-39d1-4ce2-b360-99ab20b2ba32",
              "key": "Organization-Type",
              "code": "09",
              "name": {
                "am": "Ministry",
                "en": "Ministry"
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
                "am": "",
                "en": ""
              }
            },
            "code": "Zm6FN",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": {
              "id": "2cec2cda-f0fa-4692-a486-4526642a1086",
              "name": {
                "am": "ጠቅላላ አገልግሎት",
                "en": "General Service"
              },
              "timestamp": "2023-08-19T09:28:29.39931",
              "description": {
                "am": "ጠቅላላ አገልግሎት",
                "en": "General Service"
              }
            },
            "externalOrganizationCode": "11033",
            "timestamp": "2021-08-26T08:38:29.372745"
          },
          {
            "id": "96aa2b98-e125-4e4a-a32e-981009a3843d",
            "name": {
              "am": "Dire Dawa Administration Education Bureau ",
              "en": "Dire Dawa Administration Education Bureau "
            },
            "shortName": {
              "am": "DDAE",
              "en": "DDAE"
            },
            "description": {
              "am": "Dire Dawa Administration Education Bureau ",
              "en": "Dire Dawa Administration Education Bureau "
            },
            "organizationType": {
              "id": "3a18ec22-ac23-4394-b571-0867709a1956",
              "key": "Organization-Type",
              "code": "svckf",
              "name": {
                "am": "Administration",
                "en": "Administration"
              },
              "order": 0,
              "timestamp": "2021-08-23T11:33:33.445887",
              "description": {
                "am": "Administration",
                "en": "Administration"
              }
            },
            "code": "YHA2100327",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": {
              "id": "3c224171-4702-417f-a76e-b15dc0bf94b2",
              "name": {
                "am": "Education",
                "en": "Education"
              },
              "timestamp": "2022-06-24T12:31:37.866714",
              "description": {
                "am": "Education",
                "en": "Education"
              }
            },
            "externalOrganizationCode": null,
            "timestamp": "2023-09-25T11:15:32.449669"
          },
          {
            "id": "abe22315-82bb-4d06-9d10-6eceb6dc2cff",
            "name": {
              "am": "የኢትዮጲያ ስፔስ ሳይንስና ቴክኖሎጂ ኢንስቲቲውት",
              "en": "Ethiopian Space Science and Technology Institute"
            },
            "shortName": {
              "am": "ESSTI",
              "en": "ESSTI"
            },
            "description": {
              "am": "የኢትዮጲያ ስፔስ ሳይንስና ቴክኖሎጂ ኢንስቲቲውት",
              "en": "Ethiopian Space Science and Technology Institute"
            },
            "organizationType": {
              "id": "4c2c2ef8-1c8c-40e2-82b1-2b07e10f82f0",
              "key": "Organization-Type",
              "code": "32323",
              "name": {
                "am": "Government Organization",
                "en": "Government Organization",
                "or": null,
                "tg": null
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
                "am": "-",
                "en": "-",
                "or": null,
                "tg": null
              }
            },
            "code": "LeFOU",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": true,
            "deleteRemark": "ddd",
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": {
              "id": "2cec2cda-f0fa-4692-a486-4526642a1086",
              "name": {
                "am": "ጠቅላላ አገልግሎት",
                "en": "General Service"
              },
              "timestamp": "2023-08-19T09:28:29.39931",
              "description": {
                "am": "ጠቅላላ አገልግሎት",
                "en": "General Service"
              }
            },
            "externalOrganizationCode": null,
            "timestamp": "2021-08-26T08:30:09.481692"
          },
          {
            "id": "8f3b3aab-6f5e-45b9-988f-90aa762f1a2b",
            "name": {
              "am": "አርሲ ዩንቨርሲቲ",
              "en": "Arsi University \t"
            },
            "shortName": {
              "am": "Au\t",
              "en": "Au\t"
            },
            "description": {
              "am": "አርሲ ዩንቨርሲቲ",
              "en": "Arsi University \t"
            },
            "organizationType": {
              "id": "04c1385a-761b-4570-be88-e8ba1954f45a",
              "key": "Organization-Type",
              "code": "0035",
              "name": {
                "am": "Higher Inistitution",
                "en": "Higher Inistitution",
                "or": null,
                "tg": null
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
      
              }
            },
            "code": "hJ8uQ",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": true,
            "deleteRemark": "Not Correct",
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": null,
            "externalOrganizationCode": null,
            "timestamp": "2021-08-26T09:09:41.532999"
          },
          {
            "id": "5493b625-0f86-4bb0-ad8f-7dbabd84364c",
            "name": {
              "am": "የግብርና ሚኒስቴር ",
              "en": "Ministry of Agriculture "
            },
            "shortName": {
              "am": "MA",
              "en": "MA"
            },
            "description": {
              "am": "የግብርና ሚኒስቴር ",
              "en": "Ministry of Agriculture "
            },
            "organizationType": {
              "id": "a79bcd65-39d1-4ce2-b360-99ab20b2ba32",
              "key": "Organization-Type",
              "code": "09",
              "name": {
                "am": "ministry",
                "en": "ministry",
                "or": null,
                "tg": null
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
      
              }
            },
            "code": "6kT1m",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": false,
            "isLocked": false,
            "isDeleted": true,
            "deleteRemark": "Not Correct",
            "deactivateRemark": "Not correct",
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": null,
            "externalOrganizationCode": null,
            "timestamp": "2021-08-26T08:31:13.376243"
          },
          {
            "id": "6474071d-6c7c-4bf6-8acd-6e13bdf4fcd0",
            "name": {
              "am": "እንጅባራ ዩኒቨርሲቲ",
              "en": "Injibara University "
            },
            "shortName": {
              "am": "IU",
              "en": "IU"
            },
            "description": {
              "am": "እንጅባራ ዩኒቨርሲቲ",
              "en": "Injibara University "
            },
            "organizationType": {
              "id": "04c1385a-761b-4570-be88-e8ba1954f45a",
              "key": "Organization-Type",
              "code": "0035",
              "name": {
                "am": "Higher Inistitution",
                "en": "Higher Inistitution",
                "or": null,
                "tg": null
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
      
              }
            },
            "code": "9JU4y",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": {
              "fax": {
                "code": "+251",
                "number": ""
              },
              "city": {
                "am": "Injibara",
                "en": "Injibara"
              },
              "zone": {
                "am": "Awi zone",
                "en": "Awi zone"
              },
              "email": "Injibarauniversity@inu.edu.et",
              "mobile": {
                "code": "+251",
                "number": ""
              },
              "postal": "40",
              "region": {
                "am": "Amhara",
                "en": "Amhara"
              },
              "district": {
                "am": "Injibara",
                "en": "Injibara"
              },
              "telephone": {
                "code": "+251",
                "number": ""
              },
              "houseNumber": ""
            },
            "organizationSector": null,
            "externalOrganizationCode": null,
            "timestamp": "2021-08-27T13:41:33.781205"
          },
          {
            "id": "5b5606e9-29e3-4655-b9d3-11f995fe03a3",
            "name": {
              "am": "Federal Sharia Supreme Court",
              "en": "Federal Sharia Supreme Court"
            },
            "shortName": {
              "am": "FSSC",
              "en": "FSSC"
            },
            "description": {
              "am": "Federal Sheria Supreme Court",
              "en": "Federal Sheria Supreme Court"
            },
            "organizationType": {
              "id": "4c2c2ef8-1c8c-40e2-82b1-2b07e10f82f0",
              "key": "Organization-Type",
              "code": "32323",
              "name": {
                "am": "Government Organization",
                "en": "Government Organization",
                "or": null,
                "tg": null
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
                "am": "-",
                "en": "-",
                "or": null,
                "tg": null
              }
            },
            "code": "Vitqh",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": {
              "fax": {
                "code": "+251",
                "number": ""
              },
              "city": {
                "am": null,
                "en": null
              },
              "zone": {
                "am": "አራዳ",
                "en": "Arada"
              },
              "email": "fsscourt1@gmail.com",
              "mobile": {
                "code": "+251",
                "number": ""
              },
              "postal": "30724/1000",
              "region": {
                "am": "አዲስ አበባ,ኢትዮጵያ",
                "en": "Addis Ababa, Ethiopia"
              },
              "district": {
                "am": "ሰባት",
                "en": "Seven"
              },
              "telephone": {
                "code": "+251",
                "number": ""
              },
              "houseNumber": "New"
            },
            "organizationSector": {
              "id": "0fc7ab4e-deab-49ae-9117-731ec0c5450c",
              "name": {
                "am": "ፍትህ እና ደህንነት",
                "en": "Justice and security"
              },
              "timestamp": "2023-08-19T09:27:30.520502",
              "description": {
                "am": "ፍትህ እና ደህንነት",
                "en": "Justice and security"
              }
            },
            "externalOrganizationCode": "11015",
            "timestamp": "2022-08-25T12:03:15.16385"
          },
          {
            "id": "0a8758a9-3f54-4f07-bfdb-d0a6caaba810",
            "name": {
              "am": "Dire Dawa Administration Water and Energy Bureau",
              "en": "Dire Dawa Administration Water and Energy Bureau"
            },
            "shortName": {
              "am": "DDAWE",
              "en": "DDAWE"
            },
            "description": {
              "am": "Dire Dawa Administration Water and Energy Bureau",
              "en": "Dire Dawa Administration Water and Energy Bureau"
            },
            "organizationType": {
              "id": "3a18ec22-ac23-4394-b571-0867709a1956",
              "key": "Organization-Type",
              "code": "svckf",
              "name": {
                "am": "Administration",
                "en": "Administration"
              },
              "order": 0,
              "timestamp": "2021-08-23T11:33:33.445887",
              "description": {
                "am": "Administration",
                "en": "Administration"
              }
            },
            "code": "4zM2F00328",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": {
              "id": "fc9fa7cc-8371-4617-b3a5-06deabb525b6",
              "name": {
                "am": "ውሃ ሀብትና ኢነርጂ",
                "en": "Water Resources and Energy"
              },
              "timestamp": "2023-08-19T09:29:09.415465",
              "description": {
                "am": "ውሃ ሀብትና ኢነርጂ",
                "en": "Water Resources and Energy"
              }
            },
            "externalOrganizationCode": null,
            "timestamp": "2023-09-25T11:17:58.970335"
          },
          {
            "id": "eec373e5-0bd8-4c43-8961-12bcc4555672",
            "name": {
              "am": "እንጅባራ  ዩኒቨርሲቲ",
              "en": "Injibara University \t"
            },
            "shortName": {
              "am": "INU\t",
              "en": "INU\t"
            },
            "description": {
              "am": "እንጅባራ  ዩኒቨርሲቲ",
              "en": "Injibara University \t"
            },
            "organizationType": {
              "id": "04c1385a-761b-4570-be88-e8ba1954f45a",
              "key": "Organization-Type",
              "code": "0035",
              "name": {
                "am": "Higher Inistitution",
                "en": "Higher Inistitution",
                "or": null,
                "tg": null
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
      
              }
            },
            "code": "ro5qN",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": true,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": null,
            "externalOrganizationCode": null,
            "timestamp": "2021-08-26T09:08:57.792291"
          },
          {
            "id": "c9fe90a1-becb-4ca1-9f8e-237d89c8987d",
            "name": {
              "am": "ደንቢዶሎ  ዩኒቨርስቲ",
              "en": "Denbidollo University "
            },
            "shortName": {
              "am": "DDU",
              "en": "DDU"
            },
            "description": {
              "am": "ደንቢዶሎ ዩኒቨርስቲ",
              "en": "Denbidollo University "
            },
            "organizationType": {
              "id": "04c1385a-761b-4570-be88-e8ba1954f45a",
              "key": "Organization-Type",
              "code": "0035",
              "name": {
                "am": "Higher Inistitution",
                "en": "Higher Inistitution",
                "or": null,
                "tg": null
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
      
              }
            },
            "code": "0Ie1Q",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": true,
            "deleteRemark": "Duplications of PE name",
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": null,
            "externalOrganizationCode": null,
            "timestamp": "2021-08-27T13:45:54.703055"
          },
          {
            "id": "cff0cef4-ae71-46ce-964f-07704b09d51d",
            "name": {
              "am": "አርባምንጭ ዩንቨርሲቲ",
              "en": "Arbaminch University \t"
            },
            "shortName": {
              "am": "amu\t",
              "en": "amu\t"
            },
            "description": {
              "am": "አርባምንጭ ዩንቨርሲቲ",
              "en": "Arbaminch University \t"
            },
            "organizationType": {
              "id": "04c1385a-761b-4570-be88-e8ba1954f45a",
              "key": "Organization-Type",
              "code": "0035",
              "name": {
                "am": "Higher Inistitution",
                "en": "Higher Inistitution",
                "or": null,
                "tg": null
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
      
              }
            },
            "code": "sVDmM",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": true,
            "deleteRemark": "rrr",
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": null,
            "externalOrganizationCode": null,
            "timestamp": "2021-08-26T09:12:29.743024"
          },
          {
            "id": "c39e26d4-cf59-4355-a702-b41d9880265d",
            "name": {
              "am": "የሕገ መንግሥት ጉዳዮች አጣሪ ጉባኤ ጽ/ቤት",
              "en": "Council of Constitutional Inquiry"
            },
            "shortName": {
              "am": "CCI",
              "en": "CCI"
            },
            "description": {
              "am": "የሕገ መንግሥት ጉዳዮች አጣሪ ጉባኤ ጽ/ቤት",
              "en": "Council of Constitutional Inquiry"
            },
            "organizationType": {
              "id": "4c2c2ef8-1c8c-40e2-82b1-2b07e10f82f0",
              "key": "Organization-Type",
              "code": "32323",
              "name": {
                "am": "Government Organization",
                "en": "Government Organization",
                "or": null,
                "tg": null
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
                "am": "-",
                "en": "-",
                "or": null,
                "tg": null
              }
            },
            "code": "up4R8",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": {
              "id": "22b8d3a5-4861-4bcb-9cac-d4f26cc9d80e",
              "name": {
                "am": "Social",
                "en": "Social"
              },
              "timestamp": "2022-06-24T12:32:27.728597",
              "description": {
                "am": "Social",
                "en": "Social"
              }
            },
            "externalOrganizationCode": "11313",
            "timestamp": "2021-08-27T13:48:02.589569"
          },
          {
            "id": "e5cd27ca-01d4-4f63-ab5c-c6a9e1064171",
            "name": {
              "am": "dddd",
              "en": "ddddd"
            },
            "shortName": {
              "am": "wsu\t",
              "en": "wsu\t"
            },
            "description": {
              "am": "ddddd",
              "en": "ddddd"
            },
            "organizationType": {
              "id": "93f290b5-9516-473c-ba36-ba5c85656d3c",
              "key": "Organization-Type",
              "code": "055",
              "name": {
                "am": "ኢንሰቲትዩት",
                "en": "Institute "
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
                "am": "ኢንሰቲትዩት",
                "en": "Institute "
              }
            },
            "code": "1FAgQ",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": true,
            "deleteRemark": "dd",
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": null,
            "externalOrganizationCode": null,
            "timestamp": "2021-08-26T09:14:46.000672"
          },
          {
            "id": "63da08f6-96ea-41c4-ad93-0ac2a6a7763f",
            "name": {
              "am": "Eka Kotebe General Hospital",
              "en": "Eka Kotebe General Hospital"
            },
            "shortName": {
              "am": "EKGH",
              "en": "EKGH"
            },
            "description": {
              "am": "Eka Kotebe General Hospital",
              "en": "Eka Kotebe General Hospital"
            },
            "organizationType": {
              "id": "4c2c2ef8-1c8c-40e2-82b1-2b07e10f82f0",
              "key": "Organization-Type",
              "code": "32323",
              "name": {
                "am": "Government Organization",
                "en": "Government Organization",
                "or": null,
                "tg": null
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
                "am": "-",
                "en": "-",
                "or": null,
                "tg": null
              }
            },
            "code": "XERZK",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": {
              "id": "65f35246-9b3d-4d80-b878-e22cc9eec8ca",
              "name": {
                "am": "Health",
                "en": "Health"
              },
              "timestamp": "2022-06-24T12:31:24.832988",
              "description": {
                "am": "Health",
                "en": "Health"
              }
            },
            "externalOrganizationCode": "14124",
            "timestamp": "2021-09-21T12:27:03.99199"
          },
          {
            "id": "db85a105-0f7b-4b70-93d5-620c46470276",
            "name": {
              "am": "Administrative Boundaries and Identity Issues Commission",
              "en": "Administrative Boundaries and Identity Issues Commission"
            },
            "shortName": {
              "am": "ABIIC",
              "en": "ABIIC"
            },
            "description": {
              "am": "Administrative Boundaries and Identity Issues Commission\n",
              "en": "Administrative Boundaries and Identity Issues Commission\n"
            },
            "organizationType": {
              "id": "cb506b84-ce1a-4d14-b04f-4562c1a2448e",
              "key": "Organization-Type",
              "code": "lontv",
              "name": {
                "am": " Commission",
                "en": " Commission"
              },
              "order": 0,
              "timestamp": "2021-09-16T12:26:40.817191",
              "description": {
                "am": " Commission",
                "en": " Commission"
              }
            },
            "code": "OT0zo",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": null,
            "externalOrganizationCode": null,
            "timestamp": "2021-09-16T12:48:00.813326"
          },
          {
            "id": "b671f136-b934-4c26-899c-996a714ef2d2",
            "name": {
              "am": "   የኬሜካል እና ኮንስትራክሽን ግብዓቶች ኢንደስትሪ ልማት ኢንስቲትዩት12",
              "en": "Chemical and Construction Inputs Industry Dev't Inistitute1"
            },
            "shortName": {
              "am": "CCIIDI12",
              "en": "CCIIDI12"
            },
            "description": {
              "am": "   የኬሜካል እና ኮንስትራክሽን ግብዓቶች ኢንደስትሪ ልማት ኢንስቲትዩት12",
              "en": "Chemical and Construction Inputs Industry Dev't Inistitute12"
            },
            "organizationType": {
              "id": "4c2c2ef8-1c8c-40e2-82b1-2b07e10f82f0",
              "key": "Organization-Type",
              "code": "32323",
              "name": {
                "am": "Government Organization",
                "en": "Government Organization",
                "or": null,
                "tg": null
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
                "am": "-",
                "en": "-",
                "or": null,
                "tg": null
              }
            },
            "code": "pvy9g",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": null,
            "externalOrganizationCode": null,
            "timestamp": "2021-09-02T07:00:19.300876"
          },
          {
            "id": "337e140e-07d9-4e8e-ba70-9a66b501aeaf",
            "name": {
              "am": "የግል ድርጅቶች ሰራተኞች ማህበራዊ ዋስትና ኤጀንሲ",
              "en": "Private Organization Employees Social Security Agency "
            },
            "shortName": {
              "am": "የግል.ድ.ሰ.ማ.ዋ ኤጀንሲ",
              "en": "POESSA"
            },
            "description": {
              "am": "የግል ድርጅቶች ሰራተኞች ማህበራዊ ዋስትና ኤጀንሲ",
              "en": "Private Organization Employees Social Security Agency "
            },
            "organizationType": {
              "id": "c82533f5-a4d0-49d2-9b42-035c250af606",
              "key": "Organization-Type",
              "code": "0045",
              "name": {
                "am": "Agencies",
                "en": "Agencies",
                "or": null,
                "tg": null
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
      
              }
            },
            "code": "uUnLM",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": null,
            "externalOrganizationCode": null,
            "timestamp": "2021-08-31T14:03:17.456201"
          },
          {
            "id": "8d6e2f46-794f-4a8b-93ef-6f99990d887b",
            "name": {
              "am": "የገንዘብ ሚኒስቴር",
              "en": "Ministry of Finance"
            },
            "shortName": {
              "am": "MoF",
              "en": "MoF"
            },
            "description": {
              "am": "የገንዘብ ሚኒስቴር",
              "en": "Ministry of Finance"
            },
            "organizationType": {
              "id": "a79bcd65-39d1-4ce2-b360-99ab20b2ba32",
              "key": "Organization-Type",
              "code": "09",
              "name": {
                "am": "ministry",
                "en": "ministry",
                "or": null,
                "tg": null
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
      
              }
            },
            "code": "vXxeY",
            "status": "Draft",
            "logo": {
              "file_name": "MoF logo.png",
              "file_path": "364f89a9-2b6e-4c99-9494-7e55269f6874.png",
              "file_type": ".png"
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": {
              "id": "2cec2cda-f0fa-4692-a486-4526642a1086",
              "name": {
                "am": "ጠቅላላ አገልግሎት",
                "en": "General Service"
              },
              "timestamp": "2023-08-19T09:28:29.39931",
              "description": {
                "am": "ጠቅላላ አገልግሎት",
                "en": "General Service"
              }
            },
            "externalOrganizationCode": "11391",
            "timestamp": "2021-07-13T11:44:49.747348"
          },
          {
            "id": "d08bc4dc-d4e2-4ff1-8223-30042eed5ef9",
            "name": {
              "am": "Adigrat University",
              "en": "Adigrat University"
            },
            "shortName": {
              "am": "AGU",
              "en": "AGU"
            },
            "description": {
              "am": "Adigrat University\n",
              "en": "Adigrat University\n"
            },
            "organizationType": {
              "id": "04c1385a-761b-4570-be88-e8ba1954f45a",
              "key": "Organization-Type",
              "code": "0035",
              "name": {
                "am": "Higher Inistitution",
                "en": "Higher Inistitution",
                "or": null,
                "tg": null
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
      
              }
            },
            "code": "nX6FG",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": null,
            "externalOrganizationCode": null,
            "timestamp": "2021-09-16T12:49:35.377782"
          },
          {
            "id": "70fa13ef-8964-4bd9-aa4f-144ce573568e",
            "name": {
              "am": "dd",
              "en": "dd"
            },
            "shortName": {
              "am": "FTA1",
              "en": "FTA1"
            },
            "description": {
              "am": "dd",
              "en": "dd\n"
            },
            "organizationType": {
              "id": "eaaaebc3-ea65-4ef7-8603-8861977eb2d1",
              "key": "Organization-Type",
              "code": "ryxlq",
              "name": {
                "am": "Authority",
                "en": "Authority"
              },
              "order": 0,
              "timestamp": "2021-07-13T11:59:56.336819",
              "description": {
                "am": "Authority",
                "en": "Authority"
              }
            },
            "code": "DKdfa",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": true,
            "deleteRemark": "redundency",
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": null,
            "externalOrganizationCode": null,
            "timestamp": "2021-08-25T06:44:50.525452"
          },
          {
            "id": "3536ff22-a76e-436c-a7cf-f3f206baa7ed",
            "name": {
              "am": "አክሱም ዩኒቨርሲቲ",
              "en": "Aksum University "
            },
            "shortName": {
              "am": "AKU",
              "en": "AKU"
            },
            "description": {
              "am": "አክሱም ዩኒቨርሲቲ\n",
              "en": "Aksum University \n"
            },
            "organizationType": {
              "id": "04c1385a-761b-4570-be88-e8ba1954f45a",
              "key": "Organization-Type",
              "code": "0035",
              "name": {
                "am": "Higher Inistitution",
                "en": "Higher Inistitution",
                "or": null,
                "tg": null
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
      
              }
            },
            "code": "ZIA8H",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": null,
            "externalOrganizationCode": null,
            "timestamp": "2021-09-16T12:50:11.869748"
          },
          {
            "id": "b9841d02-691f-4cd6-ad90-b1c02c4f8560",
            "name": {
              "am": "የገቢዎች ሚኒስቴር   ",
              "en": "Ministry of Revenue"
            },
            "shortName": {
              "am": "MoR",
              "en": "MoR"
            },
            "description": {
              "am": "የገቢዎች ሚኒስቴር   ",
              "en": "Ministry of Revenue"
            },
            "organizationType": {
              "id": "a79bcd65-39d1-4ce2-b360-99ab20b2ba32",
              "key": "Organization-Type",
              "code": "09",
              "name": {
                "am": "ministry",
                "en": "ministry",
                "or": null,
                "tg": null
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
      
              }
            },
            "code": "henw2",
            "status": "Draft",
            "logo": {
              "file_name": "MoR logo.jpg",
              "file_path": "25d4dca2-a5fa-4751-8702-cfaa2bc061d7.jpg",
              "file_type": ".jpg"
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": {
              "id": "2cec2cda-f0fa-4692-a486-4526642a1086",
              "name": {
                "am": "ጠቅላላ አገልግሎት",
                "en": "General Service"
              },
              "timestamp": "2023-08-19T09:28:29.39931",
              "description": {
                "am": "ጠቅላላ አገልግሎት",
                "en": "General Service"
              }
            },
            "externalOrganizationCode": "11401",
            "timestamp": "2021-07-13T11:50:18.915288"
          },
          {
            "id": "4c4aee91-dfc4-4ed2-9f68-a2ea282ed80e",
            "name": {
              "am": "Administration for Refugee & Returnee Affairs",
              "en": "Administration for Refugee & Returnee Affairs"
            },
            "shortName": {
              "am": "ARRA",
              "en": "ARRA"
            },
            "description": {
              "am": "Administration for Refugee & Returnee Affairs\n",
              "en": "Administration for Refugee & Returnee Affairs\n"
            },
            "organizationType": {
              "id": "3a18ec22-ac23-4394-b571-0867709a1956",
              "key": "Organization-Type",
              "code": "svckf",
              "name": {
                "am": "Administration",
                "en": "Administration"
              },
              "order": 0,
              "timestamp": "2021-08-23T11:33:33.445887",
              "description": {
                "am": "Administration",
                "en": "Administration"
              }
            },
            "code": "QBlgx",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": null,
            "externalOrganizationCode": null,
            "timestamp": "2021-09-16T12:51:28.919903"
          },
          {
            "id": "cee23d88-9fe3-48e3-b9ce-5ef8e3b9176e",
            "name": {
              "am": "Bulle Hora University",
              "en": "Bulle Hora University"
            },
            "shortName": {
              "am": "BHU",
              "en": "BHU"
            },
            "description": {
              "am": "Bulle Hora University\n\n",
              "en": "Bulle Hora University\n\n"
            },
            "organizationType": {
              "id": "04c1385a-761b-4570-be88-e8ba1954f45a",
              "key": "Organization-Type",
              "code": "0035",
              "name": {
                "am": "Higher Inistitution",
                "en": "Higher Inistitution",
                "or": null,
                "tg": null
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
      
              }
            },
            "code": "O3Zr7",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": true,
            "deleteRemark": "duplicated name of PE",
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": null,
            "externalOrganizationCode": null,
            "timestamp": "2021-09-16T12:57:14.573231"
          },
          {
            "id": "cab188e1-189d-4513-a53a-73908ed38589",
            "name": {
              "am": "South West Ethiopia People Regional State Health Bureau ",
              "en": "South West Ethiopia People Regional State Health Bureau "
            },
            "shortName": {
              "am": "SWEPRSH",
              "en": "SWEPRSH"
            },
            "description": {
              "am": "South West Ethiopia People Regional State Health Bureau ",
              "en": "South West Ethiopia People Regional State Health Bureau "
            },
            "organizationType": {
              "id": "3a18ec22-ac23-4394-b571-0867709a1956",
              "key": "Organization-Type",
              "code": "svckf",
              "name": {
                "am": "Administration",
                "en": "Administration"
              },
              "order": 0,
              "timestamp": "2021-08-23T11:33:33.445887",
              "description": {
                "am": "Administration",
                "en": "Administration"
              }
            },
            "code": "IoT9S00311",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": {
              "id": "65f35246-9b3d-4d80-b878-e22cc9eec8ca",
              "name": {
                "am": "Health",
                "en": "Health"
              },
              "timestamp": "2022-06-24T12:31:24.832988",
              "description": {
                "am": "Health",
                "en": "Health"
              }
            },
            "externalOrganizationCode": null,
            "timestamp": "2023-09-25T08:21:47.85811"
          },
          {
            "id": "b2ad6bec-9089-40e0-af2b-44392377d5be",
            "name": {
              "am": "ግብርና ቴክኒክና ሙያ ትምህርትና ስልጠና ኮሌጅ",
              "en": "Agricultural Technical and Vocational Education and Training College"
            },
            "shortName": {
              "am": "ATVETC",
              "en": "ATVETC"
            },
            "description": {
              "am": "ግብርና ቴክኒክና ሙያ ትምህርትና ስልጠና ኮሌጅ\n",
              "en": "Agricultural Technical and Vocational Education and Training College\n"
            },
            "organizationType": {
              "id": "04c1385a-761b-4570-be88-e8ba1954f45a",
              "key": "Organization-Type",
              "code": "0035",
              "name": {
                "am": "Higher Inistitution",
                "en": "Higher Inistitution",
                "or": null,
                "tg": null
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
      
              }
            },
            "code": "lin39",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": true,
            "deleteRemark": "None Existence of PE ",
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": null,
            "externalOrganizationCode": null,
            "timestamp": "2021-09-16T12:54:31.332498"
          },
          {
            "id": "917fd803-12d9-49b3-90e5-f457b9e7b5b4",
            "name": {
              "am": "Ethiopian sport Academy",
              "en": "Ethiopian sport Academy"
            },
            "shortName": {
              "am": "ESA",
              "en": "ESA"
            },
            "description": {
              "am": "Ethiopian sport Academy",
              "en": "Ethiopian sport Academy"
            },
            "organizationType": {
              "id": "627a83fc-0e09-4a12-b5d5-27262ed312a1",
              "key": "Organization-Type",
              "code": "3svc0",
              "name": {
                "am": "Academy",
                "en": "Academy"
              },
              "order": 0,
              "timestamp": "2021-09-16T12:32:19.338365",
              "description": {
                "am": "Academy",
                "en": "Academy"
              }
            },
            "code": "nAf0y",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": {
              "id": "de36e074-9440-4545-bf21-914eca5c067d",
              "name": {
                "am": "ባህና ስፖርት",
                "en": "Culture and sports"
              },
              "timestamp": "2023-08-19T09:31:07.684819",
              "description": {
                "am": "ባህና ስፖርት",
                "en": "Culture and sports"
              }
            },
            "externalOrganizationCode": "11319",
            "timestamp": "2022-08-31T13:49:52.494995"
          },
          {
            "id": "8743ab80-b855-42ec-9977-75aa8a5d10ca",
            "name": {
              "am": "የሳይበር ሠራዊት ልማት ኢንስቲትዩት",
              "en": "Cyber Army Development Institute"
            },
            "shortName": {
              "am": "CADI",
              "en": "CADI"
            },
            "description": {
              "am": "የሳይበር ሠራዊት ልማት ኢንስቲትዩት\n",
              "en": "Cyber Army Development Institute\n"
            },
            "organizationType": {
              "id": "93f290b5-9516-473c-ba36-ba5c85656d3c",
              "key": "Organization-Type",
              "code": "055",
              "name": {
                "am": "ኢንሰቲትዩት",
                "en": "Institute "
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
                "am": "ኢንሰቲትዩት",
                "en": "Institute "
              }
            },
            "code": "wYdjU",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": null,
            "externalOrganizationCode": null,
            "timestamp": "2021-09-16T12:59:19.44363"
          },
          {
            "id": "486c0e7c-b2f0-4dca-99ee-8db1229c7299",
            "name": {
              "am": "የኢትዮጵያ ሲቪል ሰርቪስ ዩኒቨርስቲ",
              "en": "Ethiopian Civil Service University"
            },
            "shortName": {
              "am": "ECSU",
              "en": "ECSU"
            },
            "description": {
              "am": "የኢትዮጵያ ሲቪል ሰርቪስ ዩኒቨርስቲ",
              "en": "Ethiopian Civil Service University"
            },
            "organizationType": {
              "id": "04c1385a-761b-4570-be88-e8ba1954f45a",
              "key": "Organization-Type",
              "code": "0035",
              "name": {
                "am": "Higher Inistitution",
                "en": "Higher Inistitution",
                "or": null,
                "tg": null
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
      
              }
            },
            "code": "crYso",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": "redundent",
            "deactivateRemark": "redundent",
            "taxIdentificationNumber": null,
            "address": {
              "fax": {
                "code": "+251",
                "number": ""
              },
              "city": {
                "am": "አዲስ አበባ",
                "en": "Addis Ababa"
              },
              "zone": {
                "am": "የካ",
                "en": "Yeka"
              },
              "email": "pr.ecsu@gmail.com",
              "mobile": {
                "code": "+251",
                "number": ""
              },
              "postal": "5648",
              "region": {
                "am": "አዲስ አበባ",
                "en": "Addis Ababa"
              },
              "district": {
                "am": null,
                "en": null
              },
              "telephone": {
                "code": "+251",
                "number": ""
              },
              "houseNumber": ""
            },
            "organizationSector": {
              "id": "3c224171-4702-417f-a76e-b15dc0bf94b2",
              "name": {
                "am": "Education",
                "en": "Education"
              },
              "timestamp": "2022-06-24T12:31:37.866714",
              "description": {
                "am": "Education",
                "en": "Education"
              }
            },
            "externalOrganizationCode": "11310",
            "timestamp": "2021-08-24T08:56:43.824181"
          },
          {
            "id": "5064cb79-6b32-4f9b-bfb3-682e69db2106",
            "name": {
              "am": "South West Ethiopia People Regional State Education Bureau",
              "en": "South West Ethiopia People Regional State Education Bureau"
            },
            "shortName": {
              "am": "SWEPRSE",
              "en": "SWEPRSE"
            },
            "description": {
              "am": "South West Ethiopia People Regional State Education Bureau",
              "en": "South West Ethiopia People Regional State Education Bureau"
            },
            "organizationType": {
              "id": "3a18ec22-ac23-4394-b571-0867709a1956",
              "key": "Organization-Type",
              "code": "svckf",
              "name": {
                "am": "Administration",
                "en": "Administration"
              },
              "order": 0,
              "timestamp": "2021-08-23T11:33:33.445887",
              "description": {
                "am": "Administration",
                "en": "Administration"
              }
            },
            "code": "MdBr900307",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": {
              "id": "3c224171-4702-417f-a76e-b15dc0bf94b2",
              "name": {
                "am": "Education",
                "en": "Education"
              },
              "timestamp": "2022-06-24T12:31:37.866714",
              "description": {
                "am": "Education",
                "en": "Education"
              }
            },
            "externalOrganizationCode": null,
            "timestamp": "2023-09-25T08:10:57.493467"
          },
          {
            "id": "b5c09cfa-45c9-4002-8b0e-d4284f213c33",
            "name": {
              "am": "የኢትዮጵያ ስታትስቲክስ አገልግሎት",
              "en": "Ethiopian Statistics Service"
            },
            "shortName": {
              "am": "ESS",
              "en": "ESS"
            },
            "description": {
              "am": "የኢትዮጵያ ስታትስቲክስ አገልግሎት",
              "en": "Ethiopian Statistics Service"
            },
            "organizationType": {
              "id": "de36436b-a5bc-4f67-bcaf-44b171f0e5b0",
              "key": "Organization-Type",
              "code": "c8m3r",
              "name": {
                "am": "Service",
                "en": "Service"
              },
              "order": 0,
              "timestamp": "2021-07-13T12:10:26.94161",
              "description": {
                "am": "Service",
                "en": "Service"
              }
            },
            "code": "7jq5W",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": {
              "fax": {
                "code": "+251",
                "number": "11115470"
              },
              "city": {
                "am": "አዲስ አበባ",
                "en": "Addis Ababa"
              },
              "zone": {
                "am": "አዲስ አበባ",
                "en": "Arada "
              },
              "email": "",
              "mobile": {
                "code": "+251",
                "number": ""
              },
              "postal": "1143",
              "region": {
                "am": "አዲስ አበባ",
                "en": "Addis Ababa"
              },
              "district": {
                "am": "አራዳ-01",
                "en": "Arada "
              },
              "telephone": {
                "code": "+251",
                "number": ""
              },
              "houseNumber": ""
            },
            "organizationSector": {
              "id": "2cec2cda-f0fa-4692-a486-4526642a1086",
              "name": {
                "am": "ጠቅላላ አገልግሎት",
                "en": "General Service"
              },
              "timestamp": "2023-08-19T09:28:29.39931",
              "description": {
                "am": "ጠቅላላ አገልግሎት",
                "en": "General Service"
              }
            },
            "externalOrganizationCode": "11035",
            "timestamp": "2021-08-26T08:36:59.165904"
          },
          {
            "id": "e3287c3a-2c9c-4eb5-aeab-3b47e950d2c7",
            "name": {
              "am": "Ethiopian Foreign Relations Strategic Studies Institute ",
              "en": "Ethiopian Foreign Relations Strategic Studies Institute "
            },
            "shortName": {
              "am": "EFRSSI",
              "en": "EFRSSI"
            },
            "description": {
              "am": "Ethiopian Foreign Relations Strategic Studies Institute ",
              "en": "Ethiopian Foreign Relations Strategic Studies Institute "
            },
            "organizationType": {
              "id": "93f290b5-9516-473c-ba36-ba5c85656d3c",
              "key": "Organization-Type",
              "code": "055",
              "name": {
                "am": "ኢንሰቲትዩት",
                "en": "Institute "
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
                "am": "ኢንሰቲትዩት",
                "en": "Institute "
              }
            },
            "code": "KpXfP",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": true,
            "deleteRemark": "Dublications of PE's name",
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": null,
            "externalOrganizationCode": null,
            "timestamp": "2021-09-16T13:10:05.194478"
          },
          {
            "id": "fcebca02-d54e-4f1e-9057-8d098babae07",
            "name": {
              "am": "Ethiopian Broadcasting Corporation ",
              "en": "Ethiopian Broadcasting Corporation "
            },
            "shortName": {
              "am": "EBC",
              "en": "EBC"
            },
            "description": {
              "am": "Ethiopian Broadcasting Corporation ",
              "en": "Ethiopian Broadcasting Corporation "
            },
            "organizationType": {
              "id": "25a51038-ab28-4d62-b5ee-85dff1a7ada3",
              "key": "Organization-Type",
              "code": "g1fdf",
              "name": {
                "am": "Corporation",
                "en": "Corporation"
              },
              "order": 0,
              "timestamp": "2021-09-16T12:30:33.303713",
              "description": {
                "am": "Corporation",
                "en": "Corporation"
              }
            },
            "code": "A7v8K",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": null,
            "externalOrganizationCode": null,
            "timestamp": "2021-09-16T13:06:39.180923"
          },
          {
            "id": "be9ee8f1-5d0d-4114-acd7-d699201fe629",
            "name": {
              "am": "Dilla University",
              "en": "Dilla University"
            },
            "shortName": {
              "am": "DU",
              "en": "DU"
            },
            "description": {
              "am": "Dilla University",
              "en": "Dilla University"
            },
            "organizationType": {
              "id": "04c1385a-761b-4570-be88-e8ba1954f45a",
              "key": "Organization-Type",
              "code": "0035",
              "name": {
                "am": "Higher Inistitution",
                "en": "Higher Inistitution",
                "or": null,
                "tg": null
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
      
              }
            },
            "code": "d3aPf",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": {
              "fax": {
                "code": "+251",
                "number": ""
              },
              "city": {
                "am": "ዲላ",
                "en": "Dilla"
              },
              "zone": {
                "am": "ጌዴኦ ዞን",
                "en": "Gedeo Zone"
              },
              "email": "",
              "mobile": {
                "code": "+251",
                "number": ""
              },
              "postal": "419",
              "region": {
                "am": "የደቡብ ብሔር ብሔረሰቦችና ሕዝቦች ክልል",
                "en": "Southern Nations, Nationalities, and Peoples' Region (SNNPR)"
              },
              "district": {
                "am": null,
                "en": null
              },
              "telephone": {
                "code": "+251",
                "number": ""
              },
              "houseNumber": ""
            },
            "organizationSector": {
              "id": "3c224171-4702-417f-a76e-b15dc0bf94b2",
              "name": {
                "am": "Education",
                "en": "Education"
              },
              "timestamp": "2022-06-24T12:31:37.866714",
              "description": {
                "am": "Education",
                "en": "Education"
              }
            },
            "externalOrganizationCode": null,
            "timestamp": "2021-09-16T13:02:07.100636"
          },
          {
            "id": "bb084df2-c659-48b3-a8b0-2bce888398e8",
            "name": {
              "am": "የኢትዮጵያ የተስማሚነት ምዘና ድርጅት",
              "en": "Ethiopian Conformity Assessment Enterprise"
            },
            "shortName": {
              "am": "ECAE",
              "en": "ECAE"
            },
            "description": {
              "am": "የኢትዮጵያ የተስማሚነት ምዘና ድርጅት",
              "en": "Ethiopian Conformity Assessment Enterprise"
            },
            "organizationType": {
              "id": "7265a2b3-470f-4d4e-b04f-c1b9f2b393e6",
              "key": "Organization-Type",
              "code": "0gkka",
              "name": {
                "am": "Enterprise",
                "en": "Enterprise"
              },
              "order": 0,
              "timestamp": "2021-09-16T12:29:14.718541",
              "description": {
                "am": "Enterprise",
                "en": "Enterprise"
              }
            },
            "code": "T7U23",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": null,
            "externalOrganizationCode": null,
            "timestamp": "2021-09-16T13:08:38.383347"
          },
          {
            "id": "741edcd4-d532-4f6e-8d43-0aa58c0d7ea4",
            "name": {
              "am": "የውጭ ግንኙነት አገልግሎት ማሰልጠኛ ኢንስቲትዩት",
              "en": "Foreign Relations Service Training Institute"
            },
            "shortName": {
              "am": "EFRSTI",
              "en": "EFRSTI"
            },
            "description": {
              "am": "የውጭ ግንኙነት አገልግሎት ማሰልጠኛ ኢንስቲትዩት",
              "en": "Foreign Relations Service Training Institute"
            },
            "organizationType": {
              "id": "93f290b5-9516-473c-ba36-ba5c85656d3c",
              "key": "Organization-Type",
              "code": "055",
              "name": {
                "am": "ኢንሰቲትዩት",
                "en": "Institute "
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
                "am": "ኢንሰቲትዩት",
                "en": "Institute "
              }
            },
            "code": "Mjbye",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": null,
            "externalOrganizationCode": null,
            "timestamp": "2021-09-16T13:10:59.280298"
          },
          {
            "id": "c941df18-7fa4-4ac9-961e-b445928570c6",
            "name": {
              "am": "ሲቪል ሰርቪስ ኮሚሽን",
              "en": "FDRE Civil Service Commission"
            },
            "shortName": {
              "am": "CSC",
              "en": "CSC"
            },
            "description": {
              "am": "ሲቪል ሰርቪስ ኮሚሽን",
              "en": "FDRE Civil Service Commission"
            },
            "organizationType": {
              "id": "4c2c2ef8-1c8c-40e2-82b1-2b07e10f82f0",
              "key": "Organization-Type",
              "code": "32323",
              "name": {
                "am": "Government Organization",
                "en": "Government Organization",
                "or": null,
                "tg": null
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
                "am": "-",
                "en": "-",
                "or": null,
                "tg": null
              }
            },
            "code": "FMl7Y",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": {
              "id": "2cec2cda-f0fa-4692-a486-4526642a1086",
              "name": {
                "am": "ጠቅላላ አገልግሎት",
                "en": "General Service"
              },
              "timestamp": "2023-08-19T09:28:29.39931",
              "description": {
                "am": "ጠቅላላ አገልግሎት",
                "en": "General Service"
              }
            },
            "externalOrganizationCode": "13381",
            "timestamp": "2021-08-24T09:06:26.168317"
          },
          {
            "id": "4f8bb7eb-6b09-4d27-800a-cc8f88a23803",
            "name": {
              "am": "Ethiopian Integrated Infrastructure Coordination Agency",
              "en": "Ethiopian Integrated Infrastructure Coordination Agency"
            },
            "shortName": {
              "am": "EIICA",
              "en": "EIICA"
            },
            "description": {
              "am": "Ethiopian Integrated Infrastructure Coordination Agency",
              "en": "Ethiopian Integrated Infrastructure Coordination Agency"
            },
            "organizationType": {
              "id": "c82533f5-a4d0-49d2-9b42-035c250af606",
              "key": "Organization-Type",
              "code": "0045",
              "name": {
                "am": "Agency",
                "en": "Agency"
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
                "am": null,
                "en": null
              }
            },
            "code": "TyFO6",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": null,
            "externalOrganizationCode": null,
            "timestamp": "2021-09-16T13:12:24.567101"
          },
          {
            "id": "4698c2db-e97e-4a04-a28c-406c165af042",
            "name": {
              "am": "Amahara National Regional State Finance Bureau",
              "en": "Amahara National Regional State Finance Bureau"
            },
            "shortName": {
              "am": "ANRSBF",
              "en": "ANRSBF"
            },
            "description": {
              "am": "Amahara National Regional State Finance Bureau",
              "en": "Amahara National Regional State Finance Bureau"
            },
            "organizationType": {
              "id": "d12cea68-656c-45f7-b847-2863ea1980b3",
              "key": "Organization-Type",
              "code": "igy50",
              "name": {
                "am": "Office",
                "en": "Office"
              },
              "order": 0,
              "timestamp": "2021-09-16T12:30:09.689483",
              "description": {
                "am": "Office",
                "en": "Office"
              }
            },
            "code": "9a6Wt00283",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": {
              "id": "1ed15352-c17b-4f3a-97a5-ec23c32e38df",
              "name": {
                "am": "Economy ",
                "en": "Economy "
              },
              "timestamp": "2022-06-24T12:32:13.56549",
              "description": {
                "am": "Economy ",
                "en": "Economy "
              }
            },
            "externalOrganizationCode": null,
            "timestamp": "2023-09-22T05:46:55.620347"
          },
          {
            "id": "55b62a43-b7f4-485f-8720-55ab26ec4639",
            "name": {
              "am": "Ethiopian Youth Sports Academy",
              "en": "Ethiopian Youth Sports Academy"
            },
            "shortName": {
              "am": "EYSA",
              "en": "EYSA"
            },
            "description": {
              "am": "Ethiopian Youth Sports Academy",
              "en": "Ethiopian Youth Sports Academy"
            },
            "organizationType": {
              "id": "627a83fc-0e09-4a12-b5d5-27262ed312a1",
              "key": "Organization-Type",
              "code": "3svc0",
              "name": {
                "am": "Academy",
                "en": "Academy"
              },
              "order": 0,
              "timestamp": "2021-09-16T12:32:19.338365",
              "description": {
                "am": "Academy",
                "en": "Academy"
              }
            },
            "code": "ofLxh",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": {
              "id": "3c224171-4702-417f-a76e-b15dc0bf94b2",
              "name": {
                "am": "Education",
                "en": "Education"
              },
              "timestamp": "2022-06-24T12:31:37.866714",
              "description": {
                "am": "Education",
                "en": "Education"
              }
            },
            "externalOrganizationCode": null,
            "timestamp": "2021-09-16T13:19:58.352334"
          },
          {
            "id": "1b3d2c7c-fecb-4370-aa74-3a88e90d28d9",
            "name": {
              "am": "Ethiopian postal service",
              "en": "Ethiopian postal service"
            },
            "shortName": {
              "am": "EPS",
              "en": "EPS"
            },
            "description": {
              "am": "Ethiopian postal service",
              "en": "Ethiopian postal service"
            },
            "organizationType": {
              "id": "de36436b-a5bc-4f67-bcaf-44b171f0e5b0",
              "key": "Organization-Type",
              "code": "c8m3r",
              "name": {
                "am": "Service",
                "en": "Service"
              },
              "order": 0,
              "timestamp": "2021-07-13T12:10:26.94161",
              "description": {
                "am": "Service",
                "en": "Service"
              }
            },
            "code": "9FtlQ",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": null,
            "externalOrganizationCode": null,
            "timestamp": "2021-09-16T13:15:17.818631"
          },
          {
            "id": "6c4f9790-9506-47ae-a8c5-7386e2d31719",
            "name": {
              "am": "የኢትዮጵያ የዕርቀ ሰላም ኮሚሽን ጽ/ቤት",
              "en": "Ethiopian Reconciliation Commission Office"
            },
            "shortName": {
              "am": "ERCO",
              "en": "ERCO"
            },
            "description": {
              "am": "የኢትዮጵያ የዕርቀ ሰላም ኮሚሽን ጽ/ቤት",
              "en": "Ethiopian Reconciliation Commission Office"
            },
            "organizationType": {
              "id": "d12cea68-656c-45f7-b847-2863ea1980b3",
              "key": "Organization-Type",
              "code": "igy50",
              "name": {
                "am": "Office",
                "en": "Office"
              },
              "order": 0,
              "timestamp": "2021-09-16T12:30:09.689483",
              "description": {
                "am": "Office",
                "en": "Office"
              }
            },
            "code": "3ONjP",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": null,
            "externalOrganizationCode": null,
            "timestamp": "2021-09-16T13:16:30.807882"
          },
          {
            "id": "00c2c2cd-936c-48f7-a5ba-29c3380eedcd",
            "name": {
              "am": "Ethiopian Rural Energy Development and Promotion Center ",
              "en": "Ethiopian Rural Energy Development and Promotion Center "
            },
            "shortName": {
              "am": "EREDPC",
              "en": "EREDPC"
            },
            "description": {
              "am": "Ethiopian Rural Energy Development and Promotion Center ",
              "en": "Ethiopian Rural Energy Development and Promotion Center "
            },
            "organizationType": {
              "id": "573b544a-434d-4c1f-beb4-b1de4d7f1be5",
              "key": "Organization-Type",
              "code": "jtlkj",
              "name": {
                "am": "Center",
                "en": "Center"
              },
              "order": 0,
              "timestamp": "2021-09-16T12:28:39.942465",
              "description": {
                "am": "Center",
                "en": "Center"
              }
            },
            "code": "lTKZG",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": null,
            "externalOrganizationCode": null,
            "timestamp": "2021-09-16T13:17:11.252746"
          },
          {
            "id": "acdeb102-e4b6-42a1-8290-bdb72f3702db",
            "name": {
              "am": "Ethiopian Shipping and Logistics Service",
              "en": "Ethiopian Shipping and Logistics Service"
            },
            "shortName": {
              "am": "ESLS",
              "en": "ESLS"
            },
            "description": {
              "am": "Ethiopian Shipping and Logistics Service",
              "en": "Ethiopian Shipping and Logistics Service"
            },
            "organizationType": {
              "id": "de36436b-a5bc-4f67-bcaf-44b171f0e5b0",
              "key": "Organization-Type",
              "code": "c8m3r",
              "name": {
                "am": "Service",
                "en": "Service"
              },
              "order": 0,
              "timestamp": "2021-07-13T12:10:26.94161",
              "description": {
                "am": "Service",
                "en": "Service"
              }
            },
            "code": "r5ZEz",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": null,
            "externalOrganizationCode": null,
            "timestamp": "2021-09-16T13:19:13.71771"
          },
          {
            "id": "02969224-f086-427d-bad0-167dd7f34ac8",
            "name": {
              "am": "የኢትዮጵያ ዜና አገልግሎት",
              "en": "Ethiopian News Agency"
            },
            "shortName": {
              "am": "ENA",
              "en": "ENA"
            },
            "description": {
              "am": "የኢትዮጵያ ዜና አገልግሎት",
              "en": "Ethiopian News Agency"
            },
            "organizationType": {
              "id": "c82533f5-a4d0-49d2-9b42-035c250af606",
              "key": "Organization-Type",
              "code": "0045",
              "name": {
                "am": "Agency",
                "en": "Agency"
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
                "am": null,
                "en": null
              }
            },
            "code": "3hvzC",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": {
              "fax": {
                "code": "+251",
                "number": ""
              },
              "city": {
                "am": "አዲስ አበባ",
                "en": "Addis Ababa"
              },
              "zone": {
                "am": "አራዳ",
                "en": "Arada"
              },
              "email": "info@ena.et",
              "mobile": {
                "code": "+251",
                "number": ""
              },
              "postal": "530",
              "region": {
                "am": "አዲስ አበባ",
                "en": "Addis Ababa"
              },
              "district": {
                "am": "04",
                "en": "04"
              },
              "telephone": {
                "code": "+251",
                "number": ""
              },
              "houseNumber": "9999"
            },
            "organizationSector": {
              "id": "2cec2cda-f0fa-4692-a486-4526642a1086",
              "name": {
                "am": "ጠቅላላ አገልግሎት",
                "en": "General Service"
              },
              "timestamp": "2023-08-19T09:28:29.39931",
              "description": {
                "am": "ጠቅላላ አገልግሎት",
                "en": "General Service"
              }
            },
            "externalOrganizationCode": "11178",
            "timestamp": "2021-09-16T13:14:09.746927"
          },
          {
            "id": "42c73a1b-35f4-4d12-9c98-291862fe0142",
            "name": {
              "am": "የኢትዮጵያ ቤተ ቤተመዛግብት እና ቤተ መፃህፍት አገልግሎት",
              "en": "Ethiopian Archives and Library Service"
            },
            "shortName": {
              "am": "EALS",
              "en": "EALS"
            },
            "description": {
              "am": "የኢትዮጵያ ቤተ ቤተመዛግብት እና ቤተ መፃህፍት አገልግሎት\n",
              "en": "Ethiopian Archives and Library Service"
            },
            "organizationType": {
              "id": "de36436b-a5bc-4f67-bcaf-44b171f0e5b0",
              "key": "Organization-Type",
              "code": "c8m3r",
              "name": {
                "am": "Service",
                "en": "Service"
              },
              "order": 0,
              "timestamp": "2021-07-13T12:10:26.94161",
              "description": {
                "am": "Service",
                "en": "Service"
              }
            },
            "code": "14C6q",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": {
              "fax": {
                "code": "+251",
                "number": ""
              },
              "city": {
                "am": null,
                "en": null
              },
              "zone": {
                "am": null,
                "en": null
              },
              "email": "",
              "mobile": {
                "code": "+251",
                "number": ""
              },
              "postal": "",
              "region": {
                "am": null,
                "en": null
              },
              "district": {
                "am": null,
                "en": null
              },
              "telephone": {
                "code": "+251",
                "number": ""
              },
              "houseNumber": ""
            },
            "organizationSector": {
              "id": "de36e074-9440-4545-bf21-914eca5c067d",
              "name": {
                "am": "ባህና ስፖርት",
                "en": "Culture and sports"
              },
              "timestamp": "2023-08-19T09:31:07.684819",
              "description": {
                "am": "ባህና ስፖርት",
                "en": "Culture and sports"
              }
            },
            "externalOrganizationCode": "11264",
            "timestamp": "2021-08-25T07:19:53.891617"
          },
          {
            "id": "8dbe552f-2cd4-404a-be63-633364a5096f",
            "name": {
              "am": "የቱሪዝም ማሰልጠኛ ኢንስቲትዩት",
              "en": "Tourism Training Institute"
            },
            "shortName": {
              "am": "TTI",
              "en": "TTI"
            },
            "description": {
              "am": "የቱሪዝም ማሰልጠኛ ኢንስቲትዩት\n",
              "en": "Tourism Training Institute"
            },
            "organizationType": {
              "id": "93f290b5-9516-473c-ba36-ba5c85656d3c",
              "key": "Organization-Type",
              "code": "055",
              "name": {
                "am": "ኢንሰቲትዩት",
                "en": "Institute "
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
                "am": "ኢንሰቲትዩት",
                "en": "Institute "
              }
            },
            "code": "jdKXw",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": {
              "id": "de36e074-9440-4545-bf21-914eca5c067d",
              "name": {
                "am": "ባህና ስፖርት",
                "en": "Culture and sports"
              },
              "timestamp": "2023-08-19T09:31:07.684819",
              "description": {
                "am": "ባህና ስፖርት",
                "en": "Culture and sports"
              }
            },
            "externalOrganizationCode": "11268",
            "timestamp": "2021-08-24T13:37:41.735719"
          },
          {
            "id": "5cdfaed8-81b4-423b-8f58-4b83e7f1d29b",
            "name": {
              "am": "የኢትዮጵያ የምግብና መድኃኒት ቁጥጥር ባለስልጣን",
              "en": "Food, Medicine and Health Care Administration and Control Authority "
            },
            "shortName": {
              "am": "FMHACA",
              "en": "FMHACA"
            },
            "description": {
              "am": "የኢትዮጵያ የምግብና መድኃኒት ቁጥጥር ባለስልጣን",
              "en": "Food, Medicine and Health Care Administration and Control Authority "
            },
            "organizationType": {
              "id": "eaaaebc3-ea65-4ef7-8603-8861977eb2d1",
              "key": "Organization-Type",
              "code": "ryxlq",
              "name": {
                "am": "Authority",
                "en": "Authority"
              },
              "order": 0,
              "timestamp": "2021-07-13T11:59:56.336819",
              "description": {
                "am": "Authority",
                "en": "Authority"
              }
            },
            "code": "Ba01J",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": null,
            "externalOrganizationCode": null,
            "timestamp": "2021-09-16T13:24:21.78558"
          },
          {
            "id": "5727ac03-3f85-46fd-8bbd-d7123b6af763",
            "name": {
              "am": "Dire Dawa Administration Procurement and Property Authority",
              "en": "Dire Dawa Administration Procurement and Property Authority"
            },
            "shortName": {
              "am": "DDAPPA",
              "en": "DDAPPA"
            },
            "description": {
              "am": "Dire Dawa Administration Procurement and Property Authority",
              "en": "Dire Dawa Administration Procurement and Property Authority"
            },
            "organizationType": {
              "id": "3a18ec22-ac23-4394-b571-0867709a1956",
              "key": "Organization-Type",
              "code": "svckf",
              "name": {
                "am": "Administration",
                "en": "Administration"
              },
              "order": 0,
              "timestamp": "2021-08-23T11:33:33.445887",
              "description": {
                "am": "Administration",
                "en": "Administration"
              }
            },
            "code": "24T1s00331",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": {
              "id": "1ed15352-c17b-4f3a-97a5-ec23c32e38df",
              "name": {
                "am": "Economy ",
                "en": "Economy "
              },
              "timestamp": "2022-06-24T12:32:13.56549",
              "description": {
                "am": "Economy ",
                "en": "Economy "
              }
            },
            "externalOrganizationCode": null,
            "timestamp": "2023-09-25T11:24:58.822879"
          },
          {
            "id": "5233e80f-850e-486a-9625-88fb980a55fb",
            "name": {
              "am": "ፌደራር ሸሪዓ ፍርድ  ቤት",
              "en": "Federal Sharia Court"
            },
            "shortName": {
              "am": "FSC",
              "en": "FSC"
            },
            "description": {
              "am": "ፌደራር ሸሪዓ ፍርድ  ቤት",
              "en": "Federal Sharia Court"
            },
            "organizationType": {
              "id": "4c2c2ef8-1c8c-40e2-82b1-2b07e10f82f0",
              "key": "Organization-Type",
              "code": "32323",
              "name": {
                "am": "Government Organization",
                "en": "Government Organization",
                "or": null,
                "tg": null
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
                "am": "-",
                "en": "-",
                "or": null,
                "tg": null
              }
            },
            "code": "H7x6f",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": {
              "id": "22b8d3a5-4861-4bcb-9cac-d4f26cc9d80e",
              "name": {
                "am": "Social",
                "en": "Social"
              },
              "timestamp": "2022-06-24T12:32:27.728597",
              "description": {
                "am": "Social",
                "en": "Social"
              }
            },
            "externalOrganizationCode": null,
            "timestamp": "2021-09-16T13:26:59.699948"
          },
          {
            "id": "36b690be-193f-41aa-8377-448c4a1c6433",
            "name": {
              "am": "Amahara Regional State Health Bureau",
              "en": "Amahara Regional State Health Bureau"
            },
            "shortName": {
              "am": "ARSHB",
              "en": "ARSHB"
            },
            "description": {
              "am": "Amahara Regional State Health Bureau",
              "en": "Amahara Regional State Health Bureau"
            },
            "organizationType": {
              "id": "3a18ec22-ac23-4394-b571-0867709a1956",
              "key": "Organization-Type",
              "code": "svckf",
              "name": {
                "am": "Administration",
                "en": "Administration"
              },
              "order": 0,
              "timestamp": "2021-08-23T11:33:33.445887",
              "description": {
                "am": "Administration",
                "en": "Administration"
              }
            },
            "code": "0t8Gw00318",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": {
              "id": "65f35246-9b3d-4d80-b878-e22cc9eec8ca",
              "name": {
                "am": "Health",
                "en": "Health"
              },
              "timestamp": "2022-06-24T12:31:24.832988",
              "description": {
                "am": "Health",
                "en": "Health"
              }
            },
            "externalOrganizationCode": null,
            "timestamp": "2023-09-25T09:05:16.482426"
          },
          {
            "id": "8695afa6-4282-4c76-9391-7ae779c78d85",
            "name": {
              "am": "Federal Prison Administration",
              "en": "Federal Prison Administration"
            },
            "shortName": {
              "am": "FPA",
              "en": "FPA"
            },
            "description": {
              "am": "Federal Prison Administration",
              "en": "Federal Prison Administration"
            },
            "organizationType": {
              "id": "3a18ec22-ac23-4394-b571-0867709a1956",
              "key": "Organization-Type",
              "code": "svckf",
              "name": {
                "am": "Administration",
                "en": "Administration"
              },
              "order": 0,
              "timestamp": "2021-08-23T11:33:33.445887",
              "description": {
                "am": "Administration",
                "en": "Administration"
              }
            },
            "code": "PaIFD",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": true,
            "deleteRemark": "sdfsf",
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": null,
            "externalOrganizationCode": null,
            "timestamp": "2021-09-16T13:25:05.819459"
          },
          {
            "id": "dea4651a-0dbc-47cb-b941-16981031f408",
            "name": {
              "am": "የሆቴል እና ቱሪዝም sera ማሰልጠኛ ተቋም",
              "en": "Hotel and tourism works training center"
            },
            "shortName": {
              "am": "HTTC",
              "en": "HTTC"
            },
            "description": {
              "am": "የሆቴል እና ቱሪዝም sera ማሰልጠኛ ተቋም",
              "en": "Hotel and tourism works training center"
            },
            "organizationType": {
              "id": "93f290b5-9516-473c-ba36-ba5c85656d3c",
              "key": "Organization-Type",
              "code": "055",
              "name": {
                "am": "ኢንሰቲትዩት",
                "en": "Institute "
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
                "am": "ኢንሰቲትዩት",
                "en": "Institute "
              }
            },
            "code": "qFUeV",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": null,
            "externalOrganizationCode": null,
            "timestamp": "2021-09-16T13:32:10.622255"
          },
          {
            "id": "0fb3d3f1-4951-4d90-b2aa-d40d0adfafe8",
            "name": {
              "am": "የማዕድን ሚኒስቴር",
              "en": "Ministry of Mines"
            },
            "shortName": {
              "am": "MoM",
              "en": "MoM"
            },
            "description": {
              "am": "የማዕድን ሚኒስቴር",
              "en": "Ministry of Mines"
            },
            "organizationType": {
              "id": "a79bcd65-39d1-4ce2-b360-99ab20b2ba32",
              "key": "Organization-Type",
              "code": "09",
              "name": {
                "am": "Ministry",
                "en": "Ministry"
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
                "am": "",
                "en": ""
              }
            },
            "code": "sxHa1",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": {
              "fax": {
                "code": "+251",
                "number": ""
              },
              "city": {
                "am": null,
                "en": null
              },
              "zone": {
                "am": null,
                "en": null
              },
              "email": "",
              "mobile": {
                "code": "+251",
                "number": ""
              },
              "postal": "",
              "region": {
                "am": null,
                "en": null
              },
              "district": {
                "am": null,
                "en": null
              },
              "telephone": {
                "code": "+251",
                "number": ""
              },
              "houseNumber": ""
            },
            "organizationSector": {
              "id": "0917099c-d23b-40b2-9653-a6ae7d7958c0",
              "name": {
                "am": "ማዕድን",
                "en": "Mines   "
              },
              "timestamp": "2023-08-19T09:29:55.46543",
              "description": {
                "am": "ማዕድን\n",
                "en": "Mines   "
              }
            },
            "externalOrganizationCode": "11142",
            "timestamp": "2021-09-16T13:38:52.347744"
          },
          {
            "id": "de87a824-287b-4162-a9bb-e24bc489135c",
            "name": {
              "am": "industrial parks development corporation",
              "en": "industrial parks development corporation"
            },
            "shortName": {
              "am": "IPDC",
              "en": "IPDC"
            },
            "description": {
              "am": "industrial parks development corporation",
              "en": "industrial parks development corporation"
            },
            "organizationType": {
              "id": "25a51038-ab28-4d62-b5ee-85dff1a7ada3",
              "key": "Organization-Type",
              "code": "g1fdf",
              "name": {
                "am": "Corporation",
                "en": "Corporation"
              },
              "order": 0,
              "timestamp": "2021-09-16T12:30:33.303713",
              "description": {
                "am": "Corporation",
                "en": "Corporation"
              }
            },
            "code": "rHWFG",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": null,
            "externalOrganizationCode": null,
            "timestamp": "2021-09-16T13:33:55.79816"
          },
          {
            "id": "fa59ee8c-f0f4-4b05-9e5a-838c33c4b4dc",
            "name": {
              "am": "Grand Ethiopian Renaissance Dam ",
              "en": "Grand Ethiopian Renaissance Dam "
            },
            "shortName": {
              "am": "GERD",
              "en": "GERD"
            },
            "description": {
              "am": "Grand Ethiopian Renaissance Dam ",
              "en": "Grand Ethiopian Renaissance Dam "
            },
            "organizationType": {
              "id": "7265a2b3-470f-4d4e-b04f-c1b9f2b393e6",
              "key": "Organization-Type",
              "code": "0gkka",
              "name": {
                "am": "Enterprise",
                "en": "Enterprise"
              },
              "order": 0,
              "timestamp": "2021-09-16T12:29:14.718541",
              "description": {
                "am": "Enterprise",
                "en": "Enterprise"
              }
            },
            "code": "uQ40T",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": true,
            "deleteRemark": "fd",
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": {
              "id": "1ed15352-c17b-4f3a-97a5-ec23c32e38df",
              "name": {
                "am": "Economy ",
                "en": "Economy "
              },
              "timestamp": "2022-06-24T12:32:13.56549",
              "description": {
                "am": "Economy ",
                "en": "Economy "
              }
            },
            "externalOrganizationCode": null,
            "timestamp": "2021-09-16T13:30:39.239262"
          },
          {
            "id": "874d4d29-520b-4000-97eb-134be981b962",
            "name": {
              "am": "ኢንዱስትሪ ፕሮጀክቶች አገልግሎት",
              "en": "Industry Projects Service"
            },
            "shortName": {
              "am": "IPS",
              "en": "IPS"
            },
            "description": {
              "am": "ኢንዱስትሪ ፕሮጀክቶች አገልግሎት",
              "en": "Industry Projects Service"
            },
            "organizationType": {
              "id": "de36436b-a5bc-4f67-bcaf-44b171f0e5b0",
              "key": "Organization-Type",
              "code": "c8m3r",
              "name": {
                "am": "Service",
                "en": "Service"
              },
              "order": 0,
              "timestamp": "2021-07-13T12:10:26.94161",
              "description": {
                "am": "Service",
                "en": "Service"
              }
            },
            "code": "h6XF0",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": null,
            "externalOrganizationCode": null,
            "timestamp": "2021-09-16T13:34:36.290969"
          },
          {
            "id": "c3027cc0-ed25-4e6f-bfdc-5cdea7cbf4e5",
            "name": {
              "am": "ሥራ ፈጠራ ኮሚሽን",
              "en": "Jobs Creation Commission"
            },
            "shortName": {
              "am": "JCC",
              "en": "JCC"
            },
            "description": {
              "am": "ሥራ ፈጠራ ኮሚሽን",
              "en": "Jobs Creation Commission"
            },
            "organizationType": {
              "id": "cb506b84-ce1a-4d14-b04f-4562c1a2448e",
              "key": "Organization-Type",
              "code": "lontv",
              "name": {
                "am": " Commission",
                "en": " Commission"
              },
              "order": 0,
              "timestamp": "2021-09-16T12:26:40.817191",
              "description": {
                "am": " Commission",
                "en": " Commission"
              }
            },
            "code": "8JfAd",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": null,
            "externalOrganizationCode": null,
            "timestamp": "2021-09-16T13:35:31.304694"
          },
          {
            "id": "b54bc6d8-ef72-481e-a010-fb024d56c475",
            "name": {
              "am": "የኢትዮጵያ ሂሳብ አያያዝ እና ኦዲት ቦርድ",
              "en": "Accounting and Audit Board of Ethiopia"
            },
            "shortName": {
              "am": "AABE",
              "en": "AABE"
            },
            "description": {
              "am": "የኢትዮጵያ ሂሳብ አያያዝ እና ኦዲት ቦርድ",
              "en": "Accounting and Audit Board of Ethiopia"
            },
            "organizationType": {
              "id": "4c2c2ef8-1c8c-40e2-82b1-2b07e10f82f0",
              "key": "Organization-Type",
              "code": "32323",
              "name": {
                "am": "Government Organization",
                "en": "Government Organization",
                "or": null,
                "tg": null
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
                "am": "-",
                "en": "-",
                "or": null,
                "tg": null
              }
            },
            "code": "P7jFu",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": {
              "fax": {
                "code": "+251",
                "number": ""
              },
              "city": {
                "am": "አዲስ አበባ",
                "en": "Addis Ababa"
              },
              "zone": {
                "am": "ጉለሌ",
                "en": "Gulele"
              },
              "email": "aabe.gov.et@gmail.com",
              "mobile": {
                "code": "+251",
                "number": ""
              },
              "postal": "",
              "region": {
                "am": "አዲስ አበባ",
                "en": "Addis  Ababa"
              },
              "district": {
                "am": null,
                "en": null
              },
              "telephone": {
                "code": "+251",
                "number": ""
              },
              "houseNumber": ""
            },
            "organizationSector": {
              "id": "2cec2cda-f0fa-4692-a486-4526642a1086",
              "name": {
                "am": "ጠቅላላ አገልግሎት",
                "en": "General Service"
              },
              "timestamp": "2023-08-19T09:28:29.39931",
              "description": {
                "am": "ጠቅላላ አገልግሎት",
                "en": "General Service"
              }
            },
            "externalOrganizationCode": "11337",
            "timestamp": "2021-09-16T12:47:15.490544"
          },
          {
            "id": "93368472-c03d-486c-8ac1-da5cdf00a571",
            "name": {
              "am": "የዱር እንስሳት ጥበቃ ባለስልጣን",
              "en": "Ethiopian Wildlife Conservation Authority"
            },
            "shortName": {
              "am": "EWCA",
              "en": "EWCA"
            },
            "description": {
              "am": "የዱር እንስሳት ጥበቃ ባለስልጣን",
              "en": "Ethiopian Wildlife Conservation Authority"
            },
            "organizationType": {
              "id": "eaaaebc3-ea65-4ef7-8603-8861977eb2d1",
              "key": "Organization-Type",
              "code": "ryxlq",
              "name": {
                "am": "Authority",
                "en": "Authority"
              },
              "order": 0,
              "timestamp": "2021-07-13T11:59:56.336819",
              "description": {
                "am": "Authority",
                "en": "Authority"
              }
            },
            "code": "0TJVx",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": {
              "fax": {
                "code": "+251",
                "number": ""
              },
              "city": {
                "am": null,
                "en": null
              },
              "zone": {
                "am": null,
                "en": null
              },
              "email": "",
              "mobile": {
                "code": "+251",
                "number": ""
              },
              "postal": "",
              "region": {
                "am": null,
                "en": null
              },
              "district": {
                "am": null,
                "en": null
              },
              "telephone": {
                "code": "+251",
                "number": ""
              },
              "houseNumber": ""
            },
            "organizationSector": {
              "id": "de36e074-9440-4545-bf21-914eca5c067d",
              "name": {
                "am": "ባህና ስፖርት",
                "en": "Culture and sports"
              },
              "timestamp": "2023-08-19T09:31:07.684819",
              "description": {
                "am": "ባህና ስፖርት",
                "en": "Culture and sports"
              }
            },
            "externalOrganizationCode": "11267",
            "timestamp": "2021-08-23T11:26:31.358633"
          },
          {
            "id": "5d61c439-ccdf-4289-b57e-61cb4e52718a",
            "name": {
              "am": "የቆዳ ኢንዱስትሪ ልማት የቆዳ ኢንዱስትሪ ልማት ኢንስቲትዩት",
              "en": "Leather Industry Development Institute "
            },
            "shortName": {
              "am": "LIDI",
              "en": "LIDI"
            },
            "description": {
              "am": "የቆዳ ኢንዱስትሪ ልማት የቆዳ ኢንዱስትሪ ልማት ኢንስቲትዩት",
              "en": "Leather Industry Development Institute "
            },
            "organizationType": {
              "id": "93f290b5-9516-473c-ba36-ba5c85656d3c",
              "key": "Organization-Type",
              "code": "055",
              "name": {
                "am": "ኢንሰቲትዩት",
                "en": "Institute "
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
                "am": "ኢንሰቲትዩት",
                "en": "Institute "
              }
            },
            "code": "aXPhO",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": null,
            "externalOrganizationCode": null,
            "timestamp": "2021-09-16T13:38:08.956343"
          },
          {
            "id": "54cb41d6-3ad3-48d7-bd57-e2f2f3a4f7b1",
            "name": {
              "am": "Afar Regional State Finanace Bureau",
              "en": "Afar Regional State Finanace Bureau"
            },
            "shortName": {
              "am": "ARSF",
              "en": "ARSF"
            },
            "description": {
              "am": "Afar Regional State Finanace Bureau",
              "en": "Afar Regional State Finanace Bureau"
            },
            "organizationType": {
              "id": "3a18ec22-ac23-4394-b571-0867709a1956",
              "key": "Organization-Type",
              "code": "svckf",
              "name": {
                "am": "Administration",
                "en": "Administration"
              },
              "order": 0,
              "timestamp": "2021-08-23T11:33:33.445887",
              "description": {
                "am": "Administration",
                "en": "Administration"
              }
            },
            "code": "yKbz900332",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": {
              "id": "1ed15352-c17b-4f3a-97a5-ec23c32e38df",
              "name": {
                "am": "Economy ",
                "en": "Economy "
              },
              "timestamp": "2022-06-24T12:32:13.56549",
              "description": {
                "am": "Economy ",
                "en": "Economy "
              }
            },
            "externalOrganizationCode": null,
            "timestamp": "2023-09-25T11:42:29.018139"
          },
          {
            "id": "e9d9ce79-5300-49b6-93ae-580473695732",
            "name": {
              "am": "የሴቶች፣ሕፃናትና ወጣቶች ሚኒስቴር ",
              "en": " Ministry of Women and Children Affairs "
            },
            "shortName": {
              "am": "MOWCYA",
              "en": "MOWCYA"
            },
            "description": {
              "am": "የሴቶች፣ሕፃናትና ወጣቶች ሚኒስቴር ",
              "en": " Ministry of Women and Children Affairs "
            },
            "organizationType": {
              "id": "a79bcd65-39d1-4ce2-b360-99ab20b2ba32",
              "key": "Organization-Type",
              "code": "09",
              "name": {
                "am": "Ministry",
                "en": "Ministry"
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
                "am": "",
                "en": ""
              }
            },
            "code": "akBp8",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": true,
            "deleteRemark": "dgd",
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": null,
            "externalOrganizationCode": null,
            "timestamp": "2021-09-16T13:44:36.075863"
          },
          {
            "id": "bac8994c-39d3-434c-bf74-01675ed5fe6c",
            "name": {
              "am": "የኢትዮጵያ ሚዲያ ባለስልጣን",
              "en": "Ethiopia Media Authority "
            },
            "shortName": {
              "am": "EMA",
              "en": "EMA"
            },
            "description": {
              "am": "የኢትዮጵያ ሚዲያ ባለስልጣን",
              "en": "Ethiopia Media Authority "
            },
            "organizationType": {
              "id": "eaaaebc3-ea65-4ef7-8603-8861977eb2d1",
              "key": "Organization-Type",
              "code": "ryxlq",
              "name": {
                "am": "Authority",
                "en": "Authority"
              },
              "order": 0,
              "timestamp": "2021-07-13T11:59:56.336819",
              "description": {
                "am": "Authority",
                "en": "Authority"
              }
            },
            "code": "iBKNY",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": {
              "fax": {
                "code": "+251",
                "number": ""
              },
              "city": {
                "am": "አዲስ አበባ",
                "en": "Addis Ababa"
              },
              "zone": {
                "am": "ቂርቆስ ከፍለ ከተማ",
                "en": "Kirkos sub city"
              },
              "email": "",
              "mobile": {
                "code": "+251",
                "number": ""
              },
              "postal": "",
              "region": {
                "am": "አዲስ አበባ",
                "en": "Addis Ababa"
              },
              "district": {
                "am": "09",
                "en": "09"
              },
              "telephone": {
                "code": "+251",
                "number": "2510115578755"
              },
              "houseNumber": ""
            },
            "organizationSector": {
              "id": "2cec2cda-f0fa-4692-a486-4526642a1086",
              "name": {
                "am": "ጠቅላላ አገልግሎት",
                "en": "General Service"
              },
              "timestamp": "2023-08-19T09:28:29.39931",
              "description": {
                "am": "ጠቅላላ አገልግሎት",
                "en": "General Service"
              }
            },
            "externalOrganizationCode": "11036",
            "timestamp": "2022-08-08T09:00:23.83813"
          },
          {
            "id": "a65be280-ea9d-4b5a-8b37-1b30f51d298c",
            "name": {
              "am": "ብሔራዊ የእንስሳት ጤና ምርመራ እና ጥናት ማዕከል",
              "en": "National Animal Health Diagnostic and Investigation Center "
            },
            "shortName": {
              "am": "NAHDIC",
              "en": "NAHDIC"
            },
            "description": {
              "am": "ብሔራዊ የእንስሳት ጤና ምርመራ እና ጥናት ማዕከል",
              "en": "National Animal Health Diagnostic and Investigation Center "
            },
            "organizationType": {
              "id": "573b544a-434d-4c1f-beb4-b1de4d7f1be5",
              "key": "Organization-Type",
              "code": "jtlkj",
              "name": {
                "am": "Center",
                "en": "Center"
              },
              "order": 0,
              "timestamp": "2021-09-16T12:28:39.942465",
              "description": {
                "am": "Center",
                "en": "Center"
              }
            },
            "code": "adTQV",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": null,
            "externalOrganizationCode": null,
            "timestamp": "2021-09-16T13:47:16.105392"
          },
          {
            "id": "d79c9cb1-907e-41c9-93e6-b32f98e6e7ef",
            "name": {
              "am": "Sidama Regional State Public Procurment and Property Agency ",
              "en": "Sidama Regional State Public Procurment and Property Agency"
            },
            "shortName": {
              "am": "SRSPPA",
              "en": "SRSPPA"
            },
            "description": {
              "am": "Sidama Regional State Public Procurment and Property Agency",
              "en": "Sidama Regional State Public Procurment and Property Agency"
            },
            "organizationType": {
              "id": "3a18ec22-ac23-4394-b571-0867709a1956",
              "key": "Organization-Type",
              "code": "svckf",
              "name": {
                "am": "Administration",
                "en": "Administration"
              },
              "order": 0,
              "timestamp": "2021-08-23T11:33:33.445887",
              "description": {
                "am": "Administration",
                "en": "Administration"
              }
            },
            "code": "OqZuA00333",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": {
              "id": "1ed15352-c17b-4f3a-97a5-ec23c32e38df",
              "name": {
                "am": "Economy ",
                "en": "Economy "
              },
              "timestamp": "2022-06-24T12:32:13.56549",
              "description": {
                "am": "Economy ",
                "en": "Economy "
              }
            },
            "externalOrganizationCode": null,
            "timestamp": "2023-09-25T11:58:14.334594"
          },
          {
            "id": "4dadce1a-507d-4084-9542-49ab8945f3df",
            "name": {
              "am": "የታላቁ ህዳሴ ግድብ ፕሮጀክት ማስተባበሪያ ጽ/ቤት",
              "en": "Grand Renaissance Dam Coordination Project Office "
            },
            "shortName": {
              "am": "GERDCPSMCC",
              "en": "GERDCPSMCC"
            },
            "description": {
              "am": "የታላቁ ህዳሴ ግድብ ፕሮጀክት ማስተባበሪያ ጽ/ቤት",
              "en": "Grand Renaissance Dam Coordination Project Office "
            },
            "organizationType": {
              "id": "4c2c2ef8-1c8c-40e2-82b1-2b07e10f82f0",
              "key": "Organization-Type",
              "code": "32323",
              "name": {
                "am": "Government Organization",
                "en": "Government Organization",
                "or": null,
                "tg": null
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
                "am": "-",
                "en": "-",
                "or": null,
                "tg": null
              }
            },
            "code": "WzKfF",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": {
              "fax": {
                "code": "+251",
                "number": ""
              },
              "city": {
                "am": "Addis Ababa",
                "en": "Addis Ababa"
              },
              "zone": {
                "am": "Addis Ababa",
                "en": "Addis Ababa"
              },
              "email": "grandrenaissanced@gmail.com",
              "mobile": {
                "code": "+251",
                "number": ""
              },
              "postal": "",
              "region": {
                "am": "Addis Ababa",
                "en": "Addis Ababa"
              },
              "district": {
                "am": null,
                "en": null
              },
              "telephone": {
                "code": "+251",
                "number": ""
              },
              "houseNumber": ""
            },
            "organizationSector": {
              "id": "2cec2cda-f0fa-4692-a486-4526642a1086",
              "name": {
                "am": "ጠቅላላ አገልግሎት",
                "en": "General Service"
              },
              "timestamp": "2023-08-19T09:28:29.39931",
              "description": {
                "am": "ጠቅላላ አገልግሎት",
                "en": "General Service"
              }
            },
            "externalOrganizationCode": "11043",
            "timestamp": "2021-09-16T13:31:27.325762"
          },
          {
            "id": "bce8080c-df48-4619-9ac9-4731a9306b70",
            "name": {
              "am": "National Veterinary Institute ",
              "en": "National Veterinary Institute "
            },
            "shortName": {
              "am": "NVI",
              "en": "NVI"
            },
            "description": {
              "am": "National Veterinary Institute ",
              "en": "National Veterinary Institute "
            },
            "organizationType": {
              "id": "93f290b5-9516-473c-ba36-ba5c85656d3c",
              "key": "Organization-Type",
              "code": "055",
              "name": {
                "am": "ኢንሰቲትዩት",
                "en": "Institute "
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
                "am": "ኢንሰቲትዩት",
                "en": "Institute "
              }
            },
            "code": "SMN3m",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": null,
            "externalOrganizationCode": null,
            "timestamp": "2021-09-16T13:49:32.816008"
          },
          {
            "id": "edbb8dde-0a82-4991-a427-f8a420a116cf",
            "name": {
              "am": "Omo-Kuraz Sugar Factory II",
              "en": "Omo-Kuraz Sugar Factory II"
            },
            "shortName": {
              "am": "OKSF2",
              "en": "OKSF2"
            },
            "description": {
              "am": "Omo-Kuraz Sugar Factory II",
              "en": "Omo-Kuraz Sugar Factory II"
            },
            "organizationType": {
              "id": "7265a2b3-470f-4d4e-b04f-c1b9f2b393e6",
              "key": "Organization-Type",
              "code": "0gkka",
              "name": {
                "am": "Enterprise",
                "en": "Enterprise"
              },
              "order": 0,
              "timestamp": "2021-09-16T12:29:14.718541",
              "description": {
                "am": "Enterprise",
                "en": "Enterprise"
              }
            },
            "code": "89QSm",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": null,
            "externalOrganizationCode": null,
            "timestamp": "2021-09-16T13:50:24.186213"
          },
          {
            "id": "a5d20e1d-2106-41bf-a1a3-99fdaef21631",
            "name": {
              "am": "Public Servant Transport Service Enterprise",
              "en": "Public Servant Transport Service Enterprise"
            },
            "shortName": {
              "am": "PSTSE",
              "en": "PSTSE"
            },
            "description": {
              "am": "Public Servant Transport Service Enterprise",
              "en": "Public Servant Transport Service Enterprise"
            },
            "organizationType": {
              "id": "7265a2b3-470f-4d4e-b04f-c1b9f2b393e6",
              "key": "Organization-Type",
              "code": "0gkka",
              "name": {
                "am": "Enterprise",
                "en": "Enterprise"
              },
              "order": 0,
              "timestamp": "2021-09-16T12:29:14.718541",
              "description": {
                "am": "Enterprise",
                "en": "Enterprise"
              }
            },
            "code": "seFSP",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": null,
            "externalOrganizationCode": null,
            "timestamp": "2021-09-16T13:52:21.077696"
          },
          {
            "id": "5489efa1-794a-492e-a0a4-235db23a5f10",
            "name": {
              "am": "Public Servants Social Security Agency ",
              "en": "Public Servants Social Security Agency "
            },
            "shortName": {
              "am": "PSSSA",
              "en": "PSSSA"
            },
            "description": {
              "am": "Public Servants Social Security Agency ",
              "en": "Public Servants Social Security Agency "
            },
            "organizationType": {
              "id": "c82533f5-a4d0-49d2-9b42-035c250af606",
              "key": "Organization-Type",
              "code": "0045",
              "name": {
                "am": "Agency",
                "en": "Agency"
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
                "am": null,
                "en": null
              }
            },
            "code": "h5CF6",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": null,
            "externalOrganizationCode": null,
            "timestamp": "2021-09-16T13:52:53.820546"
          },
          {
            "id": "2889c3ec-8dcc-44ad-82cd-1b7737c338bb",
            "name": {
              "am": "Raya University",
              "en": "Raya University"
            },
            "shortName": {
              "am": "RU",
              "en": "RU"
            },
            "description": {
              "am": "Raya University",
              "en": "Raya University"
            },
            "organizationType": {
              "id": "04c1385a-761b-4570-be88-e8ba1954f45a",
              "key": "Organization-Type",
              "code": "0035",
              "name": {
                "am": "Higher Inistitution",
                "en": "Higher Inistitution",
                "or": null,
                "tg": null
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
      
              }
            },
            "code": "CTHIV",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": null,
            "externalOrganizationCode": null,
            "timestamp": "2021-09-16T13:54:15.597441"
          },
          {
            "id": "f72e7de8-3dee-4193-8e88-90661e73bc70",
            "name": {
              "am": "የኢትዮጵያ አዕምሮአዊ ንብረት ባለስልጣን",
              "en": "Ethiopian Intellectual Property Authority"
            },
            "shortName": {
              "am": "EIPA",
              "en": "EIPA"
            },
            "description": {
              "am": "የኢትዮጵያ አዕምሮአዊ ንብረት ባለስልጣን",
              "en": "Ethiopian Intellectual Property Authority\n"
            },
            "organizationType": {
              "id": "4c2c2ef8-1c8c-40e2-82b1-2b07e10f82f0",
              "key": "Organization-Type",
              "code": "32323",
              "name": {
                "am": "Government Organization",
                "en": "Government Organization",
                "or": null,
                "tg": null
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
                "am": "-",
                "en": "-",
                "or": null,
                "tg": null
              }
            },
            "code": "aPs94",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": {
              "fax": {
                "code": "+251",
                "number": ""
              },
              "city": {
                "am": null,
                "en": null
              },
              "zone": {
                "am": null,
                "en": null
              },
              "email": "",
              "mobile": {
                "code": "+251",
                "number": ""
              },
              "postal": "",
              "region": {
                "am": null,
                "en": null
              },
              "district": {
                "am": null,
                "en": null
              },
              "telephone": {
                "code": "+251",
                "number": ""
              },
              "houseNumber": ""
            },
            "organizationSector": {
              "id": "2cec2cda-f0fa-4692-a486-4526642a1086",
              "name": {
                "am": "ጠቅላላ አገልግሎት",
                "en": "General Service"
              },
              "timestamp": "2023-08-19T09:28:29.39931",
              "description": {
                "am": "ጠቅላላ አገልግሎት",
                "en": "General Service"
              }
            },
            "externalOrganizationCode": "13840",
            "timestamp": "2021-08-26T08:37:39.540498"
          },
          {
            "id": "c0e9df1b-0511-468a-b3c7-52c1e070fc9c",
            "name": {
              "am": "Woldiya University",
              "en": "Woldiya University"
            },
            "shortName": {
              "am": "WDU",
              "en": "WDU"
            },
            "description": {
              "am": "Woldiya University",
              "en": "Woldiya University"
            },
            "organizationType": {
              "id": "04c1385a-761b-4570-be88-e8ba1954f45a",
              "key": "Organization-Type",
              "code": "0035",
              "name": {
                "am": "Higher Inistitution",
                "en": "Higher Inistitution",
                "or": null,
                "tg": null
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
      
              }
            },
            "code": "ecaTm",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": {
              "fax": {
                "code": "+251",
                "number": ""
              },
              "city": {
                "am": null,
                "en": null
              },
              "zone": {
                "am": null,
                "en": null
              },
              "email": "",
              "mobile": {
                "code": "+251",
                "number": ""
              },
              "postal": "",
              "region": {
                "am": null,
                "en": null
              },
              "district": {
                "am": null,
                "en": null
              },
              "telephone": {
                "code": "+251",
                "number": ""
              },
              "houseNumber": ""
            },
            "organizationSector": null,
            "externalOrganizationCode": null,
            "timestamp": "2021-09-16T14:00:17.19564"
          },
          {
            "id": "9a572de6-b409-4893-9558-f114e7aca725",
            "name": {
              "am": "ኢትዮጲያ የባሕር ትራንስፖርትና ሎጅስቲክስ አገልግሎት ድርጅት ለሞጆ መደብ ቅ/ጽ/ቤት",
              "en": " Ethiopian Shipping and Logistics Service Enterprise to Modjo port office"
            },
            "shortName": {
              "am": "SLSEMPO",
              "en": "SLSEMPO"
            },
            "description": {
              "am": "ኢትዮጲያ የባሕር ትራንስፖርትና ሎጅስቲክስ አገልግሎት ድርጅት ለሞጆ መደብ ቅ/ጽ/ቤት\n",
              "en": " Ethiopian Shipping and Logistics Service Enterprise to Modjo port office\n"
            },
            "organizationType": {
              "id": "d12cea68-656c-45f7-b847-2863ea1980b3",
              "key": "Organization-Type",
              "code": "igy50",
              "name": {
                "am": "Office",
                "en": "Office"
              },
              "order": 0,
              "timestamp": "2021-09-16T12:30:09.689483",
              "description": {
                "am": "Office",
                "en": "Office"
              }
            },
            "code": "iNqsI",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": null,
            "externalOrganizationCode": null,
            "timestamp": "2021-09-16T13:56:46.035223"
          },
          {
            "id": "4b48714c-ab9f-4742-b977-e6fd63f41842",
            "name": {
              "am": "Technology Innovation Institute",
              "en": "Technology Innovation Institute"
            },
            "shortName": {
              "am": "TII",
              "en": "TII"
            },
            "description": {
              "am": "Technology Innovation Institute",
              "en": "Technology Innovation Institute"
            },
            "organizationType": {
              "id": "93f290b5-9516-473c-ba36-ba5c85656d3c",
              "key": "Organization-Type",
              "code": "055",
              "name": {
                "am": "ኢንሰቲትዩት",
                "en": "Institute "
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
                "am": "ኢንሰቲትዩት",
                "en": "Institute "
              }
            },
            "code": "vqZPH",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": null,
            "externalOrganizationCode": null,
            "timestamp": "2021-09-16T13:57:45.817423"
          },
          {
            "id": "09a75de2-b27a-4c8d-b829-62796f0b8a60",
            "name": {
              "am": "አትሌት ጥሩነሽ ዲባባ አትሌቲክስ ማሰልጠኛ ማዕከል",
              "en": "Athlete Tirunesh Dibaba Sport Training Center"
            },
            "shortName": {
              "am": "ATDSTC",
              "en": "ATDSTC"
            },
            "description": {
              "am": "አትሌት ጥሩነሽ ዲባባ አትሌቲክስ ማሰልጠኛ ማዕከል\n",
              "en": "Athlete Tirunesh Dibaba Sport Training Center\n"
            },
            "organizationType": {
              "id": "573b544a-434d-4c1f-beb4-b1de4d7f1be5",
              "key": "Organization-Type",
              "code": "jtlkj",
              "name": {
                "am": "Center",
                "en": "Center"
              },
              "order": 0,
              "timestamp": "2021-09-16T12:28:39.942465",
              "description": {
                "am": "Center",
                "en": "Center"
              }
            },
            "code": "6w5oa",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": {
              "id": "22b8d3a5-4861-4bcb-9cac-d4f26cc9d80e",
              "name": {
                "am": "Social",
                "en": "Social"
              },
              "timestamp": "2022-06-24T12:32:27.728597",
              "description": {
                "am": "Social",
                "en": "Social"
              }
            },
            "externalOrganizationCode": null,
            "timestamp": "2021-09-16T12:53:51.116413"
          },
          {
            "id": "70b23c49-7e0a-4aec-bc73-a076ba2f09ce",
            "name": {
              "am": "Ethiopia Prosthetic and Orthotic Service",
              "en": "Ethiopia Prosthetic and Orthotic Service"
            },
            "shortName": {
              "am": "EPOS",
              "en": "EPOS"
            },
            "description": {
              "am": "Ethiopia Prosthetic and Orthotic Service",
              "en": "Ethiopia Prosthetic and Orthotic Service"
            },
            "organizationType": {
              "id": "de36436b-a5bc-4f67-bcaf-44b171f0e5b0",
              "key": "Organization-Type",
              "code": "c8m3r",
              "name": {
                "am": "Service",
                "en": "Service"
              },
              "order": 0,
              "timestamp": "2021-07-13T12:10:26.94161",
              "description": {
                "am": "Service",
                "en": "Service"
              }
            },
            "code": "Q6Sj100280",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": {
              "id": "65f35246-9b3d-4d80-b878-e22cc9eec8ca",
              "name": {
                "am": "Health",
                "en": "Health"
              },
              "timestamp": "2022-06-24T12:31:24.832988",
              "description": {
                "am": "Health",
                "en": "Health"
              }
            },
            "externalOrganizationCode": null,
            "timestamp": "2022-11-21T09:27:29.027506"
          },
          {
            "id": "04e8838a-5a9a-45bd-849d-90047d3426d6",
            "name": {
              "am": "Afar Regional State Agriculture and Resource Bureau",
              "en": "Afar Regional State Agriculture and Resource Bureau"
            },
            "shortName": {
              "am": "ARSAR",
              "en": "ARSAR"
            },
            "description": {
              "am": "Afar Regional State Agriculture and Resource Bureau",
              "en": "Afar Regional State Agriculture and Resource Bureau"
            },
            "organizationType": {
              "id": "3a18ec22-ac23-4394-b571-0867709a1956",
              "key": "Organization-Type",
              "code": "svckf",
              "name": {
                "am": "Administration",
                "en": "Administration"
              },
              "order": 0,
              "timestamp": "2021-08-23T11:33:33.445887",
              "description": {
                "am": "Administration",
                "en": "Administration"
              }
            },
            "code": "TJ3LE00334",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": {
              "id": "87e0c7d3-b7c4-4f9b-9933-7a94633b0a8f",
              "name": {
                "am": "ግብርና እና ገጠር ልማት",
                "en": "Agriculture and Rural Development"
              },
              "timestamp": "2023-08-19T09:28:40.865568",
              "description": {
                "am": "ግብርና እና ገጠር ልማት",
                "en": "Agriculture and Rural Development"
              }
            },
            "externalOrganizationCode": null,
            "timestamp": "2023-09-25T12:58:19.912571"
          },
          {
            "id": "4f913fc4-5318-4a46-bcd6-1af4a2faf17f",
            "name": {
              "am": "ብሔራዊ ሰው ሰራሽ የማሰራጫ ማዕከል",
              "en": "National Artificial Insemination Center"
            },
            "shortName": {
              "am": "NAIC",
              "en": "NAIC"
            },
            "description": {
              "am": "ብሔራዊ ሰው ሰራሽ የማሰራጫ ማዕከል",
              "en": "National Artificial Insemination Center"
            },
            "organizationType": {
              "id": "573b544a-434d-4c1f-beb4-b1de4d7f1be5",
              "key": "Organization-Type",
              "code": "jtlkj",
              "name": {
                "am": "Center",
                "en": "Center"
              },
              "order": 0,
              "timestamp": "2021-09-16T12:28:39.942465",
              "description": {
                "am": "Center",
                "en": "Center"
              }
            },
            "code": "9OULo",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": null,
            "externalOrganizationCode": null,
            "timestamp": "2021-09-17T10:11:37.792672"
          },
          {
            "id": "a241624c-1eb5-464d-a0be-718b76935480",
            "name": {
              "am": "ብሔራዊ የኮላ ዝንብ እና የጋንዲ ብሸታ ቁጥጥር እና ማጥፋት ተቋም",
              "en": "National Institute for Control and Eradication of Tsetse and Trypanosomiasis"
            },
            "shortName": {
              "am": "NICETT",
              "en": "NICETT"
            },
            "description": {
              "am": "ብሔራዊ የኮላ ዝንብ እና የጋንዲ ብሸታ ቁጥጥር እና ማጥፋት ተቋም",
              "en": "National Institute for Control and Eradication of Tsetse and Trypanosomiasis "
            },
            "organizationType": {
              "id": "93f290b5-9516-473c-ba36-ba5c85656d3c",
              "key": "Organization-Type",
              "code": "055",
              "name": {
                "am": "ኢንሰቲትዩት",
                "en": "Institute "
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
                "am": "ኢንሰቲትዩት",
                "en": "Institute "
              }
            },
            "code": "JhAwV",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": null,
            "externalOrganizationCode": null,
            "timestamp": "2021-09-17T10:14:23.20491"
          },
          {
            "id": "701ef28e-b7c8-4d9b-b2b4-ef0ee7c36d61",
            "name": {
              "am": "Livestock Development Institute ",
              "en": "Livestock Development Institute "
            },
            "shortName": {
              "am": "LDI",
              "en": "LDI"
            },
            "description": {
              "am": "Livestock Development Institute ",
              "en": "Livestock Development Institute "
            },
            "organizationType": {
              "id": "93f290b5-9516-473c-ba36-ba5c85656d3c",
              "key": "Organization-Type",
              "code": "055",
              "name": {
                "am": "ኢንሰቲትዩት",
                "en": "Institute "
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
                "am": "ኢንሰቲትዩት",
                "en": "Institute "
              }
            },
            "code": "vTg3m",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": {
              "fax": {
                "code": "+251",
                "number": ""
              },
              "city": {
                "am": null,
                "en": null
              },
              "zone": {
                "am": null,
                "en": null
              },
              "email": "",
              "mobile": {
                "code": "+251",
                "number": ""
              },
              "postal": "",
              "region": {
                "am": null,
                "en": null
              },
              "district": {
                "am": null,
                "en": null
              },
              "telephone": {
                "code": "+251",
                "number": ""
              },
              "houseNumber": ""
            },
            "organizationSector": {
              "id": "3c224171-4702-417f-a76e-b15dc0bf94b2",
              "name": {
                "am": "Education",
                "en": "Education"
              },
              "timestamp": "2022-06-24T12:31:37.866714",
              "description": {
                "am": "Education",
                "en": "Education"
              }
            },
            "externalOrganizationCode": "14605",
            "timestamp": "2021-09-16T13:33:25.230633"
          },
          {
            "id": "387869be-03e1-40d9-945a-a70dd40e40de",
            "name": {
              "am": "ሐረማያ ዩኒቨርሲቲ",
              "en": "Haramaya University"
            },
            "shortName": {
              "am": "HRU",
              "en": "HRU"
            },
            "description": {
              "am": "ሐረማያ ዩኒቨርሲቲ",
              "en": "Haramaya University"
            },
            "organizationType": {
              "id": "04c1385a-761b-4570-be88-e8ba1954f45a",
              "key": "Organization-Type",
              "code": "0035",
              "name": {
                "am": "Higher Inistitution",
                "en": "Higher Inistitution",
                "or": null,
                "tg": null
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
      
              }
            },
            "code": "zLCpm",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": {
              "fax": {
                "code": "+251",
                "number": ""
              },
              "city": {
                "am": "ማያ ከተማ",
                "en": "Maya City "
              },
              "zone": {
                "am": "ምስራቅ ሐረርጌ",
                "en": "East Harareghe "
              },
              "email": "",
              "mobile": {
                "code": "+251",
                "number": ""
              },
              "postal": "",
              "region": {
                "am": "ኦሮሚያ",
                "en": "Oromiya"
              },
              "district": {
                "am": null,
                "en": null
              },
              "telephone": {
                "code": "+251",
                "number": ""
              },
              "houseNumber": ""
            },
            "organizationSector": null,
            "externalOrganizationCode": null,
            "timestamp": "2021-09-17T10:09:07.162575"
          },
          {
            "id": "e44d7ce6-c42b-428c-9632-dabf6500f763",
            "name": {
              "am": "Ministry of Science and Higher Education",
              "en": "Ministry of Science and Higher Education"
            },
            "shortName": {
              "am": "MoSHE",
              "en": "MoSHE"
            },
            "description": {
              "am": "Ministry of Science and Higher Education",
              "en": "Ministry of Science and Higher Education"
            },
            "organizationType": {
              "id": "a79bcd65-39d1-4ce2-b360-99ab20b2ba32",
              "key": "Organization-Type",
              "code": "09",
              "name": {
                "am": "Ministry",
                "en": "Ministry"
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
                "am": "",
                "en": ""
              }
            },
            "code": "6macv",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": "error\n",
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": null,
            "externalOrganizationCode": null,
            "timestamp": "2021-09-16T13:43:05.346183"
          },
          {
            "id": "24041d2b-6212-4306-b376-547411d0ee6c",
            "name": {
              "am": "Ethiopian Sugar Corporation omo-kuraz ii sugar development project office",
              "en": "Ethiopian Sugar Corporation omo-kuraz ii sugar development project office"
            },
            "shortName": {
              "am": "SCOKSDPO",
              "en": "SCOKSDPO"
            },
            "description": {
              "am": "Ethiopian Sugar Corporation omo-kuraz ii sugar development project office",
              "en": "Ethiopian Sugar Corporation omo-kuraz ii sugar development project office"
            },
            "organizationType": {
              "id": "25a51038-ab28-4d62-b5ee-85dff1a7ada3",
              "key": "Organization-Type",
              "code": "g1fdf",
              "name": {
                "am": "Corporation",
                "en": "Corporation"
              },
              "order": 0,
              "timestamp": "2021-09-16T12:30:33.303713",
              "description": {
                "am": "Corporation",
                "en": "Corporation"
              }
            },
            "code": "xlS34",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": null,
            "externalOrganizationCode": null,
            "timestamp": "2021-09-21T08:58:19.16396"
          },
          {
            "id": "6515aed2-8d40-43eb-9ec2-767a3154c196",
            "name": {
              "am": "ብሔራዊ የኢትዮጵያ ሥነ-ልክ እና የልኬት ደረጃ ",
              "en": "National Meteorology Agency of Ethiopia "
            },
            "shortName": {
              "am": "NMA",
              "en": "NMA"
            },
            "description": {
              "am": "ብሔራዊ የኢትዮጵያ ሥነ-ልክ እና የልኬት ደረጃ ",
              "en": "National Meteorology Agency of Ethiopia "
            },
            "organizationType": {
              "id": "c82533f5-a4d0-49d2-9b42-035c250af606",
              "key": "Organization-Type",
              "code": "0045",
              "name": {
                "am": "Agency",
                "en": "Agency"
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
                "am": null,
                "en": null
              }
            },
            "code": "IsCSl",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": false,
            "isLocked": false,
            "isDeleted": true,
            "deleteRemark": "\nduplication of PE Name",
            "deactivateRemark": "s",
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": null,
            "externalOrganizationCode": null,
            "timestamp": "2021-09-16T13:47:58.442916"
          },
          {
            "id": "28744eb0-7008-4af9-96c0-c06b79fce1be",
            "name": {
              "am": "Benshangul Gumuz Regional State Health Bureau",
              "en": "Benshangul Gumuz Regional State Health Bureau"
            },
            "shortName": {
              "am": "BGRSH",
              "en": "BGRSH"
            },
            "description": {
              "am": "Benshangul Gumuz Regional State Health Bureau",
              "en": "Benshangul Gumuz Regional State Health Bureau"
            },
            "organizationType": {
              "id": "3a18ec22-ac23-4394-b571-0867709a1956",
              "key": "Organization-Type",
              "code": "svckf",
              "name": {
                "am": "Administration",
                "en": "Administration"
              },
              "order": 0,
              "timestamp": "2021-08-23T11:33:33.445887",
              "description": {
                "am": "Administration",
                "en": "Administration"
              }
            },
            "code": "CUK1p00314",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": {
              "id": "65f35246-9b3d-4d80-b878-e22cc9eec8ca",
              "name": {
                "am": "Health",
                "en": "Health"
              },
              "timestamp": "2022-06-24T12:31:24.832988",
              "description": {
                "am": "Health",
                "en": "Health"
              }
            },
            "externalOrganizationCode": null,
            "timestamp": "2023-09-25T08:54:40.79507"
          },
          {
            "id": "035be0e8-bbc1-42f5-8185-6f6056c92f64",
            "name": {
              "am": "Ethiopia Construction Works Corporation",
              "en": "Ethiopia Construction Works Corporation"
            },
            "shortName": {
              "am": "ECWC",
              "en": "ECWC"
            },
            "description": {
              "am": "Ethiopia Construction Works Corporation",
              "en": "Ethiopia Construction Works Corporation"
            },
            "organizationType": {
              "id": "25a51038-ab28-4d62-b5ee-85dff1a7ada3",
              "key": "Organization-Type",
              "code": "g1fdf",
              "name": {
                "am": "Corporation",
                "en": "Corporation"
              },
              "order": 0,
              "timestamp": "2021-09-16T12:30:33.303713",
              "description": {
                "am": "Corporation",
                "en": "Corporation"
              }
            },
            "code": "h6PwY",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": null,
            "externalOrganizationCode": null,
            "timestamp": "2021-09-21T10:45:06.668809"
          },
          {
            "id": "9fa36199-3e14-4024-a239-8fa5d1150fda",
            "name": {
              "am": "Ethiopian Commodity Exchange",
              "en": "Ethiopian Commodity Exchange"
            },
            "shortName": {
              "am": "ECX",
              "en": "ECX"
            },
            "description": {
              "am": "Ethiopian Commodity Exchange",
              "en": "Ethiopian Commodity Exchange"
            },
            "organizationType": {
              "id": "4c2c2ef8-1c8c-40e2-82b1-2b07e10f82f0",
              "key": "Organization-Type",
              "code": "32323",
              "name": {
                "am": "Government Organization",
                "en": "Government Organization",
                "or": null,
                "tg": null
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
                "am": "-",
                "en": "-",
                "or": null,
                "tg": null
              }
            },
            "code": "ORiqY",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": true,
            "deleteRemark": "Duplications of PE name",
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": null,
            "externalOrganizationCode": null,
            "timestamp": "2021-09-21T12:03:53.531504"
          },
          {
            "id": "eeef0530-3981-46c5-8701-a723a55a36f6",
            "name": {
              "am": "Land Bank and Development Corporation",
              "en": "Land Bank and Development Corporation"
            },
            "shortName": {
              "am": "LBDC",
              "en": "LBDC"
            },
            "description": {
              "am": "Land Bank and Development Corporation",
              "en": "Land Bank and Development Corporation"
            },
            "organizationType": {
              "id": "4c2c2ef8-1c8c-40e2-82b1-2b07e10f82f0",
              "key": "Organization-Type",
              "code": "32323",
              "name": {
                "am": "Government Organization",
                "en": "Government Organization",
                "or": null,
                "tg": null
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
                "am": "-",
                "en": "-",
                "or": null,
                "tg": null
              }
            },
            "code": "w7Uxl",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": null,
            "externalOrganizationCode": null,
            "timestamp": "2021-09-21T12:43:53.29588"
          },
          {
            "id": "e6f6a3eb-ee7a-4e87-878a-fc118d8a5aee",
            "name": {
              "am": "ቡሌ ሆራ ዩኒቨርሲቲ",
              "en": "Bule Hora University"
            },
            "shortName": {
              "am": "BHU",
              "en": "BHU"
            },
            "description": {
              "am": "ቡሌ ሆራ ዩኒቨርሲቲ",
              "en": "Bule Hora University"
            },
            "organizationType": {
              "id": "04c1385a-761b-4570-be88-e8ba1954f45a",
              "key": "Organization-Type",
              "code": "0035",
              "name": {
                "am": "Higher Inistitution",
                "en": "Higher Inistitution",
                "or": null,
                "tg": null
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
      
              }
            },
            "code": "SfgCy",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": null,
            "externalOrganizationCode": null,
            "timestamp": "2021-09-29T08:07:29.811373"
          },
          {
            "id": "a2513bbe-6815-4cc7-a0e6-25e570db1a55",
            "name": {
              "am": "National Animal Genetics Improvement Institute",
              "en": "National Animal Genetics Improvement Institute"
            },
            "shortName": {
              "am": "NAGII",
              "en": "NAGII"
            },
            "description": {
              "am": "National Animal Genetics Improvement Institute",
              "en": "National Animal Genetics Improvement Institute"
            },
            "organizationType": {
              "id": "93f290b5-9516-473c-ba36-ba5c85656d3c",
              "key": "Organization-Type",
              "code": "055",
              "name": {
                "am": "ኢንሰቲትዩት",
                "en": "Institute "
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
                "am": "ኢንሰቲትዩት",
                "en": "Institute "
              }
            },
            "code": "DwB1G",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": null,
            "externalOrganizationCode": null,
            "timestamp": "2021-09-30T14:50:55.134073"
          },
          {
            "id": "89898f29-dcfb-42ab-997e-726769325fbf",
            "name": {
              "am": "Ethiopian Institute for Strategic Studies",
              "en": "Ethiopian Institute for Strategic Studies"
            },
            "shortName": {
              "am": "EISS",
              "en": "EISS"
            },
            "description": {
              "am": "Ethiopian Institute for Strategic Studies",
              "en": "Ethiopian Institute for Strategic Studies"
            },
            "organizationType": {
              "id": "93f290b5-9516-473c-ba36-ba5c85656d3c",
              "key": "Organization-Type",
              "code": "055",
              "name": {
                "am": "ኢንሰቲትዩት",
                "en": "Institute "
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
                "am": "ኢንሰቲትዩት",
                "en": "Institute "
              }
            },
            "code": "sebIW",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": null,
            "externalOrganizationCode": null,
            "timestamp": "2021-09-30T14:53:40.605056"
          },
          {
            "id": "d1eefc1f-15b9-47f1-b21a-93e1a043803a",
            "name": {
              "am": "Benshangul Gumuz Regional State Agriculture Bureau",
              "en": "Benshangul Gumuz Regional State Agriculture Bureau"
            },
            "shortName": {
              "am": "BGRSA",
              "en": "BGRSA"
            },
            "description": {
              "am": "Benshangul Gumuz Regional State Agriculture Bureau",
              "en": "Benshangul Gumuz Regional State Agriculture Bureau"
            },
            "organizationType": {
              "id": "3a18ec22-ac23-4394-b571-0867709a1956",
              "key": "Organization-Type",
              "code": "svckf",
              "name": {
                "am": "Administration",
                "en": "Administration"
              },
              "order": 0,
              "timestamp": "2021-08-23T11:33:33.445887",
              "description": {
                "am": "Administration",
                "en": "Administration"
              }
            },
            "code": "OW2EB00316",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": {
              "id": "87e0c7d3-b7c4-4f9b-9933-7a94633b0a8f",
              "name": {
                "am": "ግብርና እና ገጠር ልማት",
                "en": "Agriculture and Rural Development"
              },
              "timestamp": "2023-08-19T09:28:40.865568",
              "description": {
                "am": "ግብርና እና ገጠር ልማት",
                "en": "Agriculture and Rural Development"
              }
            },
            "externalOrganizationCode": null,
            "timestamp": "2023-09-25T08:58:48.368966"
          },
          {
            "id": "322dab1a-f1b0-4805-b955-fa205c5e3c32",
            "name": {
              "am": "Afar Regional State Health Bureau",
              "en": "Afar Regional State Health Bureau"
            },
            "shortName": {
              "am": "ARSH",
              "en": "ARSH"
            },
            "description": {
              "am": "Afar Regional State Health Bureau",
              "en": "Afar Regional State Health Bureau"
            },
            "organizationType": {
              "id": "3a18ec22-ac23-4394-b571-0867709a1956",
              "key": "Organization-Type",
              "code": "svckf",
              "name": {
                "am": "Administration",
                "en": "Administration"
              },
              "order": 0,
              "timestamp": "2021-08-23T11:33:33.445887",
              "description": {
                "am": "Administration",
                "en": "Administration"
              }
            },
            "code": "TkPpA00335",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": {
              "id": "65f35246-9b3d-4d80-b878-e22cc9eec8ca",
              "name": {
                "am": "Health",
                "en": "Health"
              },
              "timestamp": "2022-06-24T12:31:24.832988",
              "description": {
                "am": "Health",
                "en": "Health"
              }
            },
            "externalOrganizationCode": null,
            "timestamp": "2023-09-26T04:54:26.818089"
          },
          {
            "id": "20a4de07-768d-488c-aa7d-acc303e124ce",
            "name": {
              "am": "Somali Regional State Agricultural Bureau",
              "en": "Somali Regional State Agricultural Bureau "
            },
            "shortName": {
              "am": "SRSA",
              "en": "SRSA"
            },
            "description": {
              "am": "Somali Regional State Agricultural Bureau ",
              "en": "Somali Regional State Agricultural Bureau "
            },
            "organizationType": {
              "id": "3a18ec22-ac23-4394-b571-0867709a1956",
              "key": "Organization-Type",
              "code": "svckf",
              "name": {
                "am": "Administration",
                "en": "Administration"
              },
              "order": 0,
              "timestamp": "2021-08-23T11:33:33.445887",
              "description": {
                "am": "Administration",
                "en": "Administration"
              }
            },
            "code": "fjcBJ00336",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": {
              "id": "87e0c7d3-b7c4-4f9b-9933-7a94633b0a8f",
              "name": {
                "am": "ግብርና እና ገጠር ልማት",
                "en": "Agriculture and Rural Development"
              },
              "timestamp": "2023-08-19T09:28:40.865568",
              "description": {
                "am": "ግብርና እና ገጠር ልማት",
                "en": "Agriculture and Rural Development"
              }
            },
            "externalOrganizationCode": null,
            "timestamp": "2023-09-26T06:42:28.01178"
          },
          {
            "id": "79430034-5403-4168-9e28-ab37917f95e5",
            "name": {
              "am": "Somali Regional State Education Bureau",
              "en": "Somali Regional State Education Bureau"
            },
            "shortName": {
              "am": "SRSE",
              "en": "SRSE"
            },
            "description": {
              "am": "Somali Regional State Education Bureau",
              "en": "Somali Regional State Education Bureau"
            },
            "organizationType": {
              "id": "3a18ec22-ac23-4394-b571-0867709a1956",
              "key": "Organization-Type",
              "code": "svckf",
              "name": {
                "am": "Administration",
                "en": "Administration"
              },
              "order": 0,
              "timestamp": "2021-08-23T11:33:33.445887",
              "description": {
                "am": "Administration",
                "en": "Administration"
              }
            },
            "code": "5cZDX00337",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": {
              "id": "3c224171-4702-417f-a76e-b15dc0bf94b2",
              "name": {
                "am": "Education",
                "en": "Education"
              },
              "timestamp": "2022-06-24T12:31:37.866714",
              "description": {
                "am": "Education",
                "en": "Education"
              }
            },
            "externalOrganizationCode": null,
            "timestamp": "2023-09-26T06:44:09.394439"
          },
          {
            "id": "1cb38802-6402-43a3-a896-3222e9af6211",
            "name": {
              "am": "የኢትዮጵያ ኮንስትራክሽን ባለስልጣን",
              "en": "Ethiopian Construction Authority"
            },
            "shortName": {
              "am": "ECA",
              "en": "ECA"
            },
            "description": {
              "am": "የኢትዮጵያ ኮንስትራክሽን ባለስልጣን",
              "en": "Ethiopian Construction Authority"
            },
            "organizationType": {
              "id": "eaaaebc3-ea65-4ef7-8603-8861977eb2d1",
              "key": "Organization-Type",
              "code": "ryxlq",
              "name": {
                "am": "Authority",
                "en": "Authority"
              },
              "order": 0,
              "timestamp": "2021-07-13T11:59:56.336819",
              "description": {
                "am": "Authority",
                "en": "Authority"
              }
            },
            "code": "pg0Gv",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": "dd",
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": {
              "id": "3192fc10-11c7-44fe-b7ee-8f9aa869f44b",
              "name": {
                "am": "የከተማ ልማት እና ኮንስትራክሽን",
                "en": "Urban development and construction"
              },
              "timestamp": "2023-08-19T09:30:32.659427",
              "description": {
                "am": "የከተማ ልማት እና ኮንስትራክሽን",
                "en": "Urban development and construction"
              }
            },
            "externalOrganizationCode": "13848",
            "timestamp": "2021-08-24T07:29:57.336738"
          },
          {
            "id": "7f0c6911-afe4-4ac2-8163-59035bdcb6b0",
            "name": {
              "am": "Ethiopian Radiation Protection Authority ",
              "en": "Ethiopian Radiation Protection Authority "
            },
            "shortName": {
              "am": "ERPA",
              "en": "ERPA"
            },
            "description": {
              "am": "Ethiopian Radiation Protection Authority ",
              "en": "Ethiopian Radiation Protection Authority "
            },
            "organizationType": {
              "id": "eaaaebc3-ea65-4ef7-8603-8861977eb2d1",
              "key": "Organization-Type",
              "code": "ryxlq",
              "name": {
                "am": "Authority",
                "en": "Authority"
              },
              "order": 0,
              "timestamp": "2021-07-13T11:59:56.336819",
              "description": {
                "am": "Authority",
                "en": "Authority"
              }
            },
            "code": "a5HWZ",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": null,
            "externalOrganizationCode": null,
            "timestamp": "2021-09-06T08:22:00.218567"
          },
          {
            "id": "1499bc5a-d5e5-41f9-8072-c4c4346653c8",
            "name": {
              "am": "ጋምቤላ ዩንቨርሲቲ",
              "en": "Gambella University\t"
            },
            "shortName": {
              "am": "GU\t",
              "en": "GU\t"
            },
            "description": {
              "am": "ጋምቤላ ዩንቨርሲቲ",
              "en": "Gambella University\t"
            },
            "organizationType": {
              "id": "04c1385a-761b-4570-be88-e8ba1954f45a",
              "key": "Organization-Type",
              "code": "0035",
              "name": {
                "am": "Higher Inistitution",
                "en": "Higher Inistitution",
                "or": null,
                "tg": null
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
      
              }
            },
            "code": "34Lfb",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": {
              "fax": {
                "code": "+251",
                "number": ""
              },
              "city": {
                "am": "Gambella",
                "en": "Gambella"
              },
              "zone": {
                "am": "Gambella",
                "en": "Gambella"
              },
              "email": "",
              "mobile": {
                "code": "+251",
                "number": ""
              },
              "postal": "126",
              "region": {
                "am": "Gambella",
                "en": "Gambella"
              },
              "district": {
                "am": "01",
                "en": "01"
              },
              "telephone": {
                "code": "+251",
                "number": ""
              },
              "houseNumber": ""
            },
            "organizationSector": {
              "id": "3c224171-4702-417f-a76e-b15dc0bf94b2",
              "name": {
                "am": "Education",
                "en": "Education"
              },
              "timestamp": "2022-06-24T12:31:37.866714",
              "description": {
                "am": "Education",
                "en": "Education"
              }
            },
            "externalOrganizationCode": null,
            "timestamp": "2021-08-26T09:13:55.70061"
          },
          {
            "id": "fe35ff2c-317f-456b-8eec-d1f68d085e3d",
            "name": {
              "am": "Somali Regional State Water and Energy Bureau",
              "en": "Somali Regional State Water and Energy Bureau"
            },
            "shortName": {
              "am": "SRSW",
              "en": "SRSW"
            },
            "description": {
              "am": "Somali Regional State Water and Energy Bureau",
              "en": "Somali Regional State Water and Energy Bureau"
            },
            "organizationType": {
              "id": "3a18ec22-ac23-4394-b571-0867709a1956",
              "key": "Organization-Type",
              "code": "svckf",
              "name": {
                "am": "Administration",
                "en": "Administration"
              },
              "order": 0,
              "timestamp": "2021-08-23T11:33:33.445887",
              "description": {
                "am": "Administration",
                "en": "Administration"
              }
            },
            "code": "t4rB200338",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": {
              "id": "fc9fa7cc-8371-4617-b3a5-06deabb525b6",
              "name": {
                "am": "ውሃ ሀብትና ኢነርጂ",
                "en": "Water Resources and Energy"
              },
              "timestamp": "2023-08-19T09:29:09.415465",
              "description": {
                "am": "ውሃ ሀብትና ኢነርጂ",
                "en": "Water Resources and Energy"
              }
            },
            "externalOrganizationCode": null,
            "timestamp": "2023-09-26T06:46:09.403469"
          },
          {
            "id": "e231cc01-ec49-4f96-9441-257b6b5b239e",
            "name": {
              "am": "Ethiopia Media Authority",
              "en": "Ethiopia Media Authority"
            },
            "shortName": {
              "am": "EBA",
              "en": "EBA"
            },
            "description": {
              "am": "Ethiopia Media Authority",
              "en": "Ethiopia Media Authority"
            },
            "organizationType": {
              "id": "eaaaebc3-ea65-4ef7-8603-8861977eb2d1",
              "key": "Organization-Type",
              "code": "ryxlq",
              "name": {
                "am": "Authority",
                "en": "Authority"
              },
              "order": 0,
              "timestamp": "2021-07-13T11:59:56.336819",
              "description": {
                "am": "Authority",
                "en": "Authority"
              }
            },
            "code": "d0yCa",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": true,
            "deleteRemark": "d",
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": null,
            "externalOrganizationCode": null,
            "timestamp": "2021-09-16T13:05:31.89727"
          },
          {
            "id": "ba98ed9c-520e-461b-baf9-471f49417bb3",
            "name": {
              "am": "የኢትዮጵያ ሥራ አመራር ኢንስቲትዩት",
              "en": "Ethiopian Management Institute "
            },
            "shortName": {
              "am": "EMII",
              "en": "EMII"
            },
            "description": {
              "am": "የኢትዮጵያ ሥራ አመራር ኢንስቲትዩት",
              "en": "Ethiopian Management Institute "
            },
            "organizationType": {
              "id": "93f290b5-9516-473c-ba36-ba5c85656d3c",
              "key": "Organization-Type",
              "code": "055",
              "name": {
                "am": "ኢንሰቲትዩት",
                "en": "Institute "
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
                "am": "ኢንሰቲትዩት",
                "en": "Institute "
              }
            },
            "code": "XafUt",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": {
              "id": "3c224171-4702-417f-a76e-b15dc0bf94b2",
              "name": {
                "am": "Education",
                "en": "Education"
              },
              "timestamp": "2022-06-24T12:31:37.866714",
              "description": {
                "am": "Education",
                "en": "Education"
              }
            },
            "externalOrganizationCode": null,
            "timestamp": "2021-09-16T13:13:08.236498"
          },
          {
            "id": "235f6b61-1e47-4187-ac4b-193a2ddb2eb0",
            "name": {
              "am": "የኢትዮጵያ ህብረተሰብ ጤና ኢንስቲትዩት ኢንስቲትዩት",
              "en": "Ethiopian Public Health Institute Institute"
            },
            "shortName": {
              "am": "EPHIEPHI",
              "en": "EPHIEPHI"
            },
            "description": {
              "am": "የኢትዮጵያ ህብረተሰብ ጤና ኢንስቲትዩት ኢንስቲትዩት\n",
              "en": "Ethiopian Public Health Institute Institute\n"
            },
            "organizationType": {
              "id": "93f290b5-9516-473c-ba36-ba5c85656d3c",
              "key": "Organization-Type",
              "code": "055",
              "name": {
                "am": "ኢንሰቲትዩት",
                "en": "Institute "
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
                "am": "ኢንሰቲትዩት",
                "en": "Institute "
              }
            },
            "code": "AdZRc",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": true,
            "deleteRemark": "redundant ",
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": {
              "id": "65f35246-9b3d-4d80-b878-e22cc9eec8ca",
              "name": {
                "am": "Health",
                "en": "Health"
              },
              "timestamp": "2022-06-24T12:31:24.832988",
              "description": {
                "am": "Health",
                "en": "Health"
              }
            },
            "externalOrganizationCode": null,
            "timestamp": "2021-08-25T06:35:58.673683"
          },
          {
            "id": "9afff0c6-e409-4ed0-b267-e2fe5fcf9c75",
            "name": {
              "am": "የቱሪዝም ሚኒስቴር",
              "en": "Ministry of Tourism"
            },
            "shortName": {
              "am": "MoT",
              "en": "MoT"
            },
            "description": {
              "am": "የቱሪዝም ሚኒስቴር",
              "en": "Ministry of Tourism"
            },
            "organizationType": {
              "id": "a79bcd65-39d1-4ce2-b360-99ab20b2ba32",
              "key": "Organization-Type",
              "code": "09",
              "name": {
                "am": "Ministry",
                "en": "Ministry"
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
                "am": "",
                "en": ""
              }
            },
            "code": "3uLa7",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": {
              "fax": {
                "code": "+251",
                "number": ""
              },
              "city": {
                "am": "አዲሰ አበባ",
                "en": "Addis Ababa"
              },
              "zone": {
                "am": "ቦሌ",
                "en": "Bole"
              },
              "email": "",
              "mobile": {
                "code": "+251",
                "number": ""
              },
              "postal": "",
              "region": {
                "am": "አዲሰ አበባ",
                "en": "Addis Ababa"
              },
              "district": {
                "am": "02",
                "en": "02"
              },
              "telephone": {
                "code": "+251",
                "number": ""
              },
              "houseNumber": ""
            },
            "organizationSector": {
              "id": "de36e074-9440-4545-bf21-914eca5c067d",
              "name": {
                "am": "ባህና ስፖርት",
                "en": "Culture and sports"
              },
              "timestamp": "2023-08-19T09:31:07.684819",
              "description": {
                "am": "ባህና ስፖርት",
                "en": "Culture and sports"
              }
            },
            "externalOrganizationCode": "14596",
            "timestamp": "2021-08-24T08:17:38.735779"
          },
          {
            "id": "c9538352-b28b-41a1-9305-965ae9b51305",
            "name": {
              "am": "የኢትዮጵያ ዲያስፖራ አገልግሎት",
              "en": "Ethiopian Diaspora Service"
            },
            "shortName": {
              "am": "EDS",
              "en": "EDS"
            },
            "description": {
              "am": "የኢትዮጵያ ዲያስፖራ አገልግሎት",
              "en": "Ethiopian Diaspora Service"
            },
            "organizationType": {
              "id": "de36436b-a5bc-4f67-bcaf-44b171f0e5b0",
              "key": "Organization-Type",
              "code": "c8m3r",
              "name": {
                "am": "Service",
                "en": "Service"
              },
              "order": 0,
              "timestamp": "2021-07-13T12:10:26.94161",
              "description": {
                "am": "Service",
                "en": "Service"
              }
            },
            "code": "LPTCs",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": {
              "id": "2cec2cda-f0fa-4692-a486-4526642a1086",
              "name": {
                "am": "ጠቅላላ አገልግሎት",
                "en": "General Service"
              },
              "timestamp": "2023-08-19T09:28:29.39931",
              "description": {
                "am": "ጠቅላላ አገልግሎት",
                "en": "General Service"
              }
            },
            "externalOrganizationCode": "13555",
            "timestamp": "2021-08-26T08:35:34.598098"
          },
          {
            "id": "253bb75e-c04a-43ff-8c0c-be1c5884874e",
            "name": {
              "am": "የቴክኒክና ሙያ ስልጠና ኢንስቲትዩት",
              "en": "Federal Technical and Vocational Training Institute"
            },
            "shortName": {
              "am": "FTVTI",
              "en": "FTVTI"
            },
            "description": {
              "am": "የቴክኒክና ሙያ ስልጠና ኢንስቲትዩት",
              "en": "Federal Technical and Vocational Training Institute"
            },
            "organizationType": {
              "id": "93f290b5-9516-473c-ba36-ba5c85656d3c",
              "key": "Organization-Type",
              "code": "055",
              "name": {
                "am": "ኢንሰቲትዩት",
                "en": "Institute "
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
                "am": "ኢንሰቲትዩት",
                "en": "Institute "
              }
            },
            "code": "4w70n",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": true,
            "deleteRemark": "sdfs",
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": {
              "id": "3c224171-4702-417f-a76e-b15dc0bf94b2",
              "name": {
                "am": "Education",
                "en": "Education"
              },
              "timestamp": "2022-06-24T12:31:37.866714",
              "description": {
                "am": "Education",
                "en": "Education"
              }
            },
            "externalOrganizationCode": "11339",
            "timestamp": "2022-06-28T06:57:54.348543"
          },
          {
            "id": "ac59d208-91cb-4958-9383-78d7bd2a87b6",
            "name": {
              "am": "ወሎ ዩንቨርሲቲ",
              "en": "Wollo University "
            },
            "shortName": {
              "am": "WU",
              "en": "WU"
            },
            "description": {
              "am": "ወሎ ዩንቨርሲቲ",
              "en": "Wollo University "
            },
            "organizationType": {
              "id": "04c1385a-761b-4570-be88-e8ba1954f45a",
              "key": "Organization-Type",
              "code": "0035",
              "name": {
                "am": "Higher Inistitution",
                "en": "Higher Inistitution",
                "or": null,
                "tg": null
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
      
              }
            },
            "code": "h6mNS",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": {
              "id": "3c224171-4702-417f-a76e-b15dc0bf94b2",
              "name": {
                "am": "Education",
                "en": "Education"
              },
              "timestamp": "2022-06-24T12:31:37.866714",
              "description": {
                "am": "Education",
                "en": "Education"
              }
            },
            "externalOrganizationCode": "11229",
            "timestamp": "2021-08-24T10:51:13.693234"
          },
          {
            "id": "a045ee4b-3d62-4fa7-accf-4bba5d45d8fb",
            "name": {
              "am": "ኢሚግሬሽንና ዜግነት አገልግሎት",
              "en": "Immigration and Citizenship Service"
            },
            "shortName": {
              "am": "ICS",
              "en": "ICS"
            },
            "description": {
              "am": "ኢሚግሬሽንና ዜግነት አገልግሎት",
              "en": "Immigration and Citizenship Service"
            },
            "organizationType": {
              "id": "de36436b-a5bc-4f67-bcaf-44b171f0e5b0",
              "key": "Organization-Type",
              "code": "c8m3r",
              "name": {
                "am": "Service",
                "en": "Service"
              },
              "order": 0,
              "timestamp": "2021-07-13T12:10:26.94161",
              "description": {
                "am": "Service",
                "en": "Service"
              }
            },
            "code": "oQiTc",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": {
              "fax": {
                "code": "+251",
                "number": ""
              },
              "city": {
                "am": null,
                "en": null
              },
              "zone": {
                "am": null,
                "en": null
              },
              "email": "",
              "mobile": {
                "code": "+251",
                "number": ""
              },
              "postal": "",
              "region": {
                "am": null,
                "en": null
              },
              "district": {
                "am": null,
                "en": null
              },
              "telephone": {
                "code": "+251",
                "number": ""
              },
              "houseNumber": ""
            },
            "organizationSector": {
              "id": "0fc7ab4e-deab-49ae-9117-731ec0c5450c",
              "name": {
                "am": "ፍትህ እና ደህንነት",
                "en": "Justice and security"
              },
              "timestamp": "2023-08-19T09:27:30.520502",
              "description": {
                "am": "ፍትህ እና ደህንነት",
                "en": "Justice and security"
              }
            },
            "externalOrganizationCode": "11314",
            "timestamp": "2021-08-24T14:00:01.254875"
          },
          {
            "id": "c3d534c9-8b39-44ea-8f52-dd8288eaf475",
            "name": {
              "am": "ጂንካ ዩኒቨርሲቲ",
              "en": "Jinka University"
            },
            "shortName": {
              "am": "ጂን ዩ",
              "en": "JKU"
            },
            "description": {
              "am": "ጂንካ ዩኒቨርሲቲ",
              "en": "Jinka University"
            },
            "organizationType": {
              "id": "04c1385a-761b-4570-be88-e8ba1954f45a",
              "key": "Organization-Type",
              "code": "0035",
              "name": {
                "am": "Higher Inistitution",
                "en": "Higher Inistitution",
                "or": null,
                "tg": null
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
      
              }
            },
            "code": "6DdrJ",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": {
              "fax": {
                "code": "+251",
                "number": ""
              },
              "city": {
                "am": null,
                "en": null
              },
              "zone": {
                "am": null,
                "en": null
              },
              "email": "",
              "mobile": {
                "code": "+251",
                "number": ""
              },
              "postal": "",
              "region": {
                "am": null,
                "en": null
              },
              "district": {
                "am": null,
                "en": null
              },
              "telephone": {
                "code": "+251",
                "number": ""
              },
              "houseNumber": ""
            },
            "organizationSector": {
              "id": "3c224171-4702-417f-a76e-b15dc0bf94b2",
              "name": {
                "am": "Education",
                "en": "Education"
              },
              "timestamp": "2022-06-24T12:31:37.866714",
              "description": {
                "am": "Education",
                "en": "Education"
              }
            },
            "externalOrganizationCode": null,
            "timestamp": "2021-08-24T07:32:59.789335"
          },
          {
            "id": "d5601c2b-4e20-4f18-8e71-ffc21a1e53b9",
            "name": {
              "am": "Somali Regional State Health Bureau",
              "en": "Somali Regional State Health Bureau"
            },
            "shortName": {
              "am": "SRSHB",
              "en": "SRSHB"
            },
            "description": {
              "am": "Somali Regional State Health Bureau",
              "en": "Somali Regional State Health Bureau"
            },
            "organizationType": {
              "id": "3a18ec22-ac23-4394-b571-0867709a1956",
              "key": "Organization-Type",
              "code": "svckf",
              "name": {
                "am": "Administration",
                "en": "Administration"
              },
              "order": 0,
              "timestamp": "2021-08-23T11:33:33.445887",
              "description": {
                "am": "Administration",
                "en": "Administration"
              }
            },
            "code": "3wzeF00340",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": {
              "id": "65f35246-9b3d-4d80-b878-e22cc9eec8ca",
              "name": {
                "am": "Health",
                "en": "Health"
              },
              "timestamp": "2022-06-24T12:31:24.832988",
              "description": {
                "am": "Health",
                "en": "Health"
              }
            },
            "externalOrganizationCode": null,
            "timestamp": "2023-09-26T09:10:34.111995"
          },
          {
            "id": "81cee75d-6571-4888-9a1e-089d13005120",
            "name": {
              "am": "የኢትዮጵያ ቴክኖሎጂ ባለስልጣን",
              "en": "Ethiopian Technology Authority "
            },
            "shortName": {
              "am": "ETA",
              "en": "ETA"
            },
            "description": {
              "am": "የኢትዮጵያ ቴክኖሎጂ ባለስልጣን",
              "en": "Ethiopian Technology Authority "
            },
            "organizationType": {
              "id": "eaaaebc3-ea65-4ef7-8603-8861977eb2d1",
              "key": "Organization-Type",
              "code": "ryxlq",
              "name": {
                "am": "Authority",
                "en": "Authority"
              },
              "order": 0,
              "timestamp": "2021-07-13T11:59:56.336819",
              "description": {
                "am": "Authority",
                "en": "Authority"
              }
            },
            "code": "l8R7r",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": {
              "fax": {
                "code": "+251",
                "number": ""
              },
              "city": {
                "am": null,
                "en": null
              },
              "zone": {
                "am": null,
                "en": null
              },
              "email": "",
              "mobile": {
                "code": "+251",
                "number": ""
              },
              "postal": "",
              "region": {
                "am": null,
                "en": null
              },
              "district": {
                "am": null,
                "en": null
              },
              "telephone": {
                "code": "+251",
                "number": ""
              },
              "houseNumber": ""
            },
            "organizationSector": {
              "id": "2cec2cda-f0fa-4692-a486-4526642a1086",
              "name": {
                "am": "ጠቅላላ አገልግሎት",
                "en": "General Service"
              },
              "timestamp": "2023-08-19T09:28:29.39931",
              "description": {
                "am": "ጠቅላላ አገልግሎት",
                "en": "General Service"
              }
            },
            "externalOrganizationCode": "11040",
            "timestamp": "2022-06-28T08:42:10.266738"
          },
          {
            "id": "27de3588-eb02-41bb-a583-7fad00fd1ad4",
            "name": {
              "am": "የሕገ መንግሥት ጉዳዮች አጣሪ ጉባኤ ጽ/ቤት",
              "en": "የሕገ መንግሥት ጉዳዮች አጣሪ ጉባኤ ጽ/ቤት"
            },
            "shortName": {
              "am": "SCCI",
              "en": "SCCI"
            },
            "description": {
              "am": "የሕገ መንግሥት ጉዳዮች አጣሪ ጉባኤ ጽ/ቤት",
              "en": "የሕገ መንግሥት ጉዳዮች አጣሪ ጉባኤ ጽ/ቤት"
            },
            "organizationType": {
              "id": "d12cea68-656c-45f7-b847-2863ea1980b3",
              "key": "Organization-Type",
              "code": "igy50",
              "name": {
                "am": "Office",
                "en": "Office"
              },
              "order": 0,
              "timestamp": "2021-09-16T12:30:09.689483",
              "description": {
                "am": "Office",
                "en": "Office"
              }
            },
            "code": "ZpXFu",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": true,
            "deleteRemark": "\nduplication of PE Name",
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": null,
            "externalOrganizationCode": null,
            "timestamp": "2021-09-16T13:55:26.563785"
          },
          {
            "id": "95045746-a8d2-4d35-af9a-fdf52f212e6d",
            "name": {
              "am": "ብሔራዊ ኤች አይ ቪ ኤድስ መከላከያና መቆጣጠሪያ ጽ/ቤት",
              "en": "National Hiv/aids Prevention and Control Office"
            },
            "shortName": {
              "am": "FHAPCO",
              "en": "FHAPCO"
            },
            "description": {
              "am": "ብሔራዊ ኤች አይ ቪ ኤድስ መከላከያና መቆጣጠሪያ ጽ/ቤት",
              "en": "National Hiv/aids Prevention and Control Office"
            },
            "organizationType": {
              "id": "d12cea68-656c-45f7-b847-2863ea1980b3",
              "key": "Organization-Type",
              "code": "igy50",
              "name": {
                "am": "Office",
                "en": "Office"
              },
              "order": 0,
              "timestamp": "2021-09-16T12:30:09.689483",
              "description": {
                "am": "Office",
                "en": "Office"
              }
            },
            "code": "imsZ7",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": {
              "id": "65f35246-9b3d-4d80-b878-e22cc9eec8ca",
              "name": {
                "am": "Health",
                "en": "Health"
              },
              "timestamp": "2022-06-24T12:31:24.832988",
              "description": {
                "am": "Health",
                "en": "Health"
              }
            },
            "externalOrganizationCode": null,
            "timestamp": "2021-09-16T13:21:51.785121"
          },
          {
            "id": "0c2ba180-627c-4810-9785-485fef71848a",
            "name": {
              "am": "ወለጋ ዩኒቨርሲቲ",
              "en": "Wollega University"
            },
            "shortName": {
              "am": "WOU",
              "en": "WOU"
            },
            "description": {
              "am": "ወለጋ ዩኒቨርሲቲ",
              "en": "Wollega University"
            },
            "organizationType": {
              "id": "04c1385a-761b-4570-be88-e8ba1954f45a",
              "key": "Organization-Type",
              "code": "0035",
              "name": {
                "am": "Higher Inistitution",
                "en": "Higher Inistitution",
                "or": null,
                "tg": null
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
      
              }
            },
            "code": "oAx8t",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": {
              "fax": {
                "code": "+251",
                "number": ""
              },
              "city": {
                "am": "ነቀምቴ",
                "en": "Nekemte"
              },
              "zone": {
                "am": "ምስራቅ ወለጋ",
                "en": "East Wollega"
              },
              "email": "wuinfo@wollegauniversity.edu.et",
              "mobile": {
                "code": "+251",
                "number": ""
              },
              "postal": "395",
              "region": {
                "am": "ኦሮሚያ",
                "en": "Oromia"
              },
              "district": {
                "am": "ጉቶ ግዳ",
                "en": "Guto Gida"
              },
              "telephone": {
                "code": "+251",
                "number": ""
              },
              "houseNumber": ""
            },
            "organizationSector": {
              "id": "3c224171-4702-417f-a76e-b15dc0bf94b2",
              "name": {
                "am": "Education",
                "en": "Education"
              },
              "timestamp": "2022-06-24T12:31:37.866714",
              "description": {
                "am": "Education",
                "en": "Education"
              }
            },
            "externalOrganizationCode": "11232",
            "timestamp": "2021-09-17T10:27:07.010095"
          },
          {
            "id": "6d2a84cc-ebec-4bd9-b26f-132fc4abcff5",
            "name": {
              "am": "Somali Regional State Roads and Transport Bureau",
              "en": "Somali Regional State Roads and Transport Bureau"
            },
            "shortName": {
              "am": "SRSRT",
              "en": "SRSRT"
            },
            "description": {
              "am": "Somali Regional State Roads and Transport Bureau",
              "en": "Somali Regional State Roads and Transport Bureau"
            },
            "organizationType": {
              "id": "3a18ec22-ac23-4394-b571-0867709a1956",
              "key": "Organization-Type",
              "code": "svckf",
              "name": {
                "am": "Administration",
                "en": "Administration"
              },
              "order": 0,
              "timestamp": "2021-08-23T11:33:33.445887",
              "description": {
                "am": "Administration",
                "en": "Administration"
              }
            },
            "code": "y0LnF00341",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": {
              "id": "92c5683e-77c7-4177-aedf-f201a8649a8a",
              "name": {
                "am": "ትራንስፖርት እና መገናኛ",
                "en": "Transport and Communication"
              },
              "timestamp": "2023-08-19T09:30:10.492956",
              "description": {
                "am": "ትራንስፖርት እና መገናኛ",
                "en": "Transport and Communication"
              }
            },
            "externalOrganizationCode": null,
            "timestamp": "2023-09-26T09:14:34.887366"
          },
          {
            "id": "cf25f9d0-e800-43d3-b90c-6b1d2da4cd4f",
            "name": {
              "am": "የፕላንና ልማት ሚኒስቴር",
              "en": "Ministry of Planning and Development"
            },
            "shortName": {
              "am": "MoPD",
              "en": "MoPD"
            },
            "description": {
              "am": "የፕላንና ልማት ሚኒስቴር",
              "en": "Ministry of Planning and Development"
            },
            "organizationType": {
              "id": "a79bcd65-39d1-4ce2-b360-99ab20b2ba32",
              "key": "Organization-Type",
              "code": "09",
              "name": {
                "am": "Ministry",
                "en": "Ministry"
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
                "am": "",
                "en": ""
              }
            },
            "code": "ADx0P",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": {
              "fax": {
                "code": "+251",
                "number": ""
              },
              "city": {
                "am": "አዲስ አበባ ",
                "en": "Addis Ababa"
              },
              "zone": {
                "am": "ጉለሌ ክፍለ ከተማ",
                "en": "Gulele Sub City"
              },
              "email": "info@pdc.gov.et",
              "mobile": {
                "code": null,
                "number": "251111226662"
              },
              "postal": "4427",
              "region": {
                "am": "አዲስ አበባ ",
                "en": "Addis Ababa"
              },
              "district": {
                "am": "10",
                "en": "10"
              },
              "telephone": {
                "code": "+251",
                "number": "251111226662"
              },
              "houseNumber": ""
            },
            "organizationSector": {
              "id": "2cec2cda-f0fa-4692-a486-4526642a1086",
              "name": {
                "am": "ጠቅላላ አገልግሎት",
                "en": "General Service"
              },
              "timestamp": "2023-08-19T09:28:29.39931",
              "description": {
                "am": "ጠቅላላ አገልግሎት",
                "en": "General Service"
              }
            },
            "externalOrganizationCode": "11321",
            "timestamp": "2021-09-16T13:51:10.764025"
          },
          {
            "id": "14faae2a-1280-48be-afe4-e7bfc91fd268",
            "name": {
              "am": "Water Development Fund",
              "en": "Water Development Fund"
            },
            "shortName": {
              "am": "WDF",
              "en": "WDF"
            },
            "description": {
              "am": "Water Development Fund",
              "en": "Water Development Fund"
            },
            "organizationType": {
              "id": "7265a2b3-470f-4d4e-b04f-c1b9f2b393e6",
              "key": "Organization-Type",
              "code": "0gkka",
              "name": {
                "am": "Enterprise",
                "en": "Enterprise"
              },
              "order": 0,
              "timestamp": "2021-09-16T12:29:14.718541",
              "description": {
                "am": "Enterprise",
                "en": "Enterprise"
              }
            },
            "code": "B3GRi",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": true,
            "deleteRemark": "\nduplication of PE Name",
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": null,
            "externalOrganizationCode": null,
            "timestamp": "2021-09-16T13:59:43.497162"
          },
          {
            "id": "6aee5e41-d9ae-4008-b933-33ab363c6267",
            "name": {
              "am": "petroleum and petroleum products supply and distribution regulatory authority",
              "en": "petroleum and petroleum products supply and distribution regulatory authority"
            },
            "shortName": {
              "am": "PSDRA",
              "en": "PSDRA"
            },
            "description": {
              "am": "petroleum and petroleum products supply and distribution regulatory authority",
              "en": "petroleum and petroleum products supply and distribution regulatory authority"
            },
            "organizationType": {
              "id": "eaaaebc3-ea65-4ef7-8603-8861977eb2d1",
              "key": "Organization-Type",
              "code": "ryxlq",
              "name": {
                "am": "Authority",
                "en": "Authority"
              },
              "order": 0,
              "timestamp": "2021-07-13T11:59:56.336819",
              "description": {
                "am": "Authority",
                "en": "Authority"
              }
            },
            "code": "U0slB",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": true,
            "deleteRemark": "None Existence of PE \n",
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": null,
            "externalOrganizationCode": null,
            "timestamp": "2021-09-16T13:51:43.830357"
          },
          {
            "id": "0e32cc5c-010c-4be3-a150-a7f3feabe674",
            "name": {
              "am": "የኢፌዲሪ የሲቪል ማህበረሰብ ድርጅቶች ባለስልጣን",
              "en": "Authority For Civil Society Organizations "
            },
            "shortName": {
              "am": "ACSO",
              "en": "ACSO"
            },
            "description": {
              "am": "የኢፌዲሪ የሲቪል ማህበረሰብ ድርጅቶች ባለስልጣን",
              "en": "Authority For Civil Society Organizations  \n"
            },
            "organizationType": {
              "id": "4c2c2ef8-1c8c-40e2-82b1-2b07e10f82f0",
              "key": "Organization-Type",
              "code": "32323",
              "name": {
                "am": "Government Organization",
                "en": "Government Organization",
                "or": null,
                "tg": null
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
                "am": "-",
                "en": "-",
                "or": null,
                "tg": null
              }
            },
            "code": "jOzZc",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": {
              "fax": {
                "code": "+251",
                "number": " (011) 558 1825"
              },
              "city": {
                "am": "አዲስ አበባ",
                "en": "ADDIS ABEBA"
              },
              "zone": {
                "am": "አዲስ አበባ",
                "en": "ADDIS ABEBA"
              },
              "email": "info@acso.gov.et",
              "mobile": {
                "code": "+251",
                "number": ""
              },
              "postal": "14340",
              "region": {
                "am": "አዲስ አበባ",
                "en": "ADDIS ABEBA"
              },
              "district": {
                "am": null,
                "en": null
              },
              "telephone": {
                "code": "+251",
                "number": ""
              },
              "houseNumber": ""
            },
            "organizationSector": {
              "id": "0fc7ab4e-deab-49ae-9117-731ec0c5450c",
              "name": {
                "am": "ፍትህ እና ደህንነት",
                "en": "Justice and security"
              },
              "timestamp": "2023-08-19T09:27:30.520502",
              "description": {
                "am": "ፍትህ እና ደህንነት",
                "en": "Justice and security"
              }
            },
            "externalOrganizationCode": "11018",
            "timestamp": "2021-09-16T12:49:04.490557"
          },
          {
            "id": "10f2cd80-856d-4da5-a65f-71f2dbdad2aa",
            "name": {
              "am": "የቅዱስ ጳውሎስ ሆስፒታል",
              "en": " St. Paul's Hospital Millennium Medical College "
            },
            "shortName": {
              "am": "SPHMMC",
              "en": "SPHMMC"
            },
            "description": {
              "am": "የቅዱስ ጳውሎስ ሆስፒታል",
              "en": " St. Paul's Hospital Millennium Medical College "
            },
            "organizationType": {
              "id": "04c1385a-761b-4570-be88-e8ba1954f45a",
              "key": "Organization-Type",
              "code": "0035",
              "name": {
                "am": "Higher Inistitution",
                "en": "Higher Inistitution",
                "or": null,
                "tg": null
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
      
              }
            },
            "code": "1Hf9C",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": {
              "fax": {
                "code": "+251",
                "number": ""
              },
              "city": {
                "am": null,
                "en": null
              },
              "zone": {
                "am": null,
                "en": null
              },
              "email": "",
              "mobile": {
                "code": "+251",
                "number": ""
              },
              "postal": "",
              "region": {
                "am": null,
                "en": null
              },
              "district": {
                "am": null,
                "en": null
              },
              "telephone": {
                "code": "+251",
                "number": ""
              },
              "houseNumber": ""
            },
            "organizationSector": {
              "id": "65f35246-9b3d-4d80-b878-e22cc9eec8ca",
              "name": {
                "am": "Health",
                "en": "Health"
              },
              "timestamp": "2022-06-24T12:31:24.832988",
              "description": {
                "am": "Health",
                "en": "Health"
              }
            },
            "externalOrganizationCode": "11273",
            "timestamp": "2021-09-16T13:57:15.96127"
          },
          {
            "id": "820c88c7-a123-4da9-b878-a84fa81ccf3e",
            "name": {
              "am": "xx",
              "en": "xx"
            },
            "shortName": {
              "am": "AAHH",
              "en": "AAHH"
            },
            "description": {
              "am": "xx",
              "en": "xx"
            },
            "organizationType": {
              "id": "3a18ec22-ac23-4394-b571-0867709a1956",
              "key": "Organization-Type",
              "code": "svckf",
              "name": {
                "am": "Administration",
                "en": "Administration"
              },
              "order": 0,
              "timestamp": "2021-08-23T11:33:33.445887",
              "description": {
                "am": "Administration",
                "en": "Administration"
              }
            },
            "code": "imBe500342",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": true,
            "deleteRemark": "weew",
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": {
              "id": "65f35246-9b3d-4d80-b878-e22cc9eec8ca",
              "name": {
                "am": "Health",
                "en": "Health"
              },
              "timestamp": "2022-06-24T12:31:24.832988",
              "description": {
                "am": "Health",
                "en": "Health"
              }
            },
            "externalOrganizationCode": null,
            "timestamp": "2023-09-29T06:55:48.63044"
          },
          {
            "id": "7a77a5e0-3cb8-40b2-ae1d-20aeeaffdafa",
            "name": {
              "am": "የኢኖቬሽንና ቴክኖሎጂ ሚኒስቴር",
              "en": "Ministry of Innovation and Technology"
            },
            "shortName": {
              "am": "MInT",
              "en": "MInT"
            },
            "description": {
              "am": "የኢኖቬሽንና ቴክኖሎጂ ሚኒስቴር",
              "en": "Ministry of Innovation and Technology"
            },
            "organizationType": {
              "id": "a79bcd65-39d1-4ce2-b360-99ab20b2ba32",
              "key": "Organization-Type",
              "code": "09",
              "name": {
                "am": "ministry",
                "en": "ministry",
                "or": null,
                "tg": null
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
      
              }
            },
            "code": "fYlcn",
            "status": "Draft",
            "logo": {
              "file_name": "MInT logo.png",
              "file_path": "a9452672-15b5-4d9c-81d6-f6a0e1aac6f6.png",
              "file_type": ".png"
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": {
              "id": "2cec2cda-f0fa-4692-a486-4526642a1086",
              "name": {
                "am": "ጠቅላላ አገልግሎት",
                "en": "General Service"
              },
              "timestamp": "2023-08-19T09:28:29.39931",
              "description": {
                "am": "ጠቅላላ አገልግሎት",
                "en": "General Service"
              }
            },
            "externalOrganizationCode": "11037",
            "timestamp": "2021-07-13T11:48:18.786856"
          },
          {
            "id": "2f891480-c8de-430d-9d80-fa348dceac43",
            "name": {
              "am": "የግብርና ሚኒስቴር",
              "en": "Ministry of Agriculture"
            },
            "shortName": {
              "am": "MoA",
              "en": "MoA"
            },
            "description": {
              "am": "የግብርና ሚኒስቴር",
              "en": "Ministry of Agriculture"
            },
            "organizationType": {
              "id": "a79bcd65-39d1-4ce2-b360-99ab20b2ba32",
              "key": "Organization-Type",
              "code": "09",
              "name": {
                "am": "Ministry",
                "en": "Ministry"
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
                "am": "",
                "en": ""
              }
            },
            "code": "uqeK0",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": {
              "id": "87e0c7d3-b7c4-4f9b-9933-7a94633b0a8f",
              "name": {
                "am": "ግብርና እና ገጠር ልማት",
                "en": "Agriculture and Rural Development"
              },
              "timestamp": "2023-08-19T09:28:40.865568",
              "description": {
                "am": "ግብርና እና ገጠር ልማት",
                "en": "Agriculture and Rural Development"
              }
            },
            "externalOrganizationCode": "14019",
            "timestamp": "2021-09-16T14:02:41.996142"
          },
          {
            "id": "5af61473-6c0b-445e-a469-591afea45fac",
            "name": {
              "am": "አሶሳ ዩኒቨርሲቲ",
              "en": "Assosa University"
            },
            "shortName": {
              "am": "ASU",
              "en": "ASU"
            },
            "description": {
              "am": "አሶሳ ዩኒቨርሲቲ",
              "en": "Assosa University"
            },
            "organizationType": {
              "id": "04c1385a-761b-4570-be88-e8ba1954f45a",
              "key": "Organization-Type",
              "code": "0035",
              "name": {
                "am": "Higher Inistitution",
                "en": "Higher Inistitution",
                "or": null,
                "tg": null
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
      
              }
            },
            "code": "MWb6n",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": {
              "fax": {
                "code": "+251",
                "number": ""
              },
              "city": {
                "am": "አሶሳ ",
                "en": "Assosa "
              },
              "zone": {
                "am": "አሶሳ ዞን",
                "en": "Assosa Zone"
              },
              "email": "getkemal35@gmail.com",
              "mobile": {
                "code": "+251",
                "number": ""
              },
              "postal": "18",
              "region": {
                "am": "ቤንሻንጉል ጉሙዝ",
                "en": "Benishangul-Gumuz"
              },
              "district": {
                "am": "አሶሳ ",
                "en": "Assosa"
              },
              "telephone": {
                "code": "+251",
                "number": ""
              },
              "houseNumber": "New"
            },
            "organizationSector": {
              "id": "3c224171-4702-417f-a76e-b15dc0bf94b2",
              "name": {
                "am": "Education",
                "en": "Education"
              },
              "timestamp": "2022-06-24T12:31:37.866714",
              "description": {
                "am": "Education",
                "en": "Education"
              }
            },
            "externalOrganizationCode": null,
            "timestamp": "2021-08-24T07:22:27.832715"
          },
          {
            "id": "924eb842-39d7-405e-ab0a-88ebd6e24a0f",
            "name": {
              "am": "Salale University",
              "en": "Salale University"
            },
            "shortName": {
              "am": "SLU",
              "en": "SLU"
            },
            "description": {
              "am": "Salale University",
              "en": "Salale University"
            },
            "organizationType": {
              "id": "04c1385a-761b-4570-be88-e8ba1954f45a",
              "key": "Organization-Type",
              "code": "0035",
              "name": {
                "am": "Higher Inistitution",
                "en": "Higher Inistitution",
                "or": null,
                "tg": null
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
      
              }
            },
            "code": "Xxu9W",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": {
              "fax": {
                "code": "+251",
                "number": ""
              },
              "city": {
                "am": "Fitche",
                "en": "Fitche"
              },
              "zone": {
                "am": "north shoa",
                "en": "north shoa"
              },
              "email": "",
              "mobile": {
                "code": "+251",
                "number": ""
              },
              "postal": "245",
              "region": {
                "am": "oromia",
                "en": "oromia"
              },
              "district": {
                "am": null,
                "en": null
              },
              "telephone": {
                "code": "+251",
                "number": ""
              },
              "houseNumber": ""
            },
            "organizationSector": {
              "id": "3c224171-4702-417f-a76e-b15dc0bf94b2",
              "name": {
                "am": "Education",
                "en": "Education"
              },
              "timestamp": "2022-06-24T12:31:37.866714",
              "description": {
                "am": "Education",
                "en": "Education"
              }
            },
            "externalOrganizationCode": null,
            "timestamp": "2021-09-16T13:56:00.339749"
          },
          {
            "id": "acf5e9bf-20f9-4a73-b6b8-995da1190571",
            "name": {
              "am": "Alert Specialized Hospital",
              "en": "Alert Specialized Hospital"
            },
            "shortName": {
              "am": "ASH",
              "en": "ASH"
            },
            "description": {
              "am": "Alert Specialized Hospital",
              "en": "Alert Specialized Hospital"
            },
            "organizationType": {
              "id": "573b544a-434d-4c1f-beb4-b1de4d7f1be5",
              "key": "Organization-Type",
              "code": "jtlkj",
              "name": {
                "am": "Center",
                "en": "Center"
              },
              "order": 0,
              "timestamp": "2021-09-16T12:28:39.942465",
              "description": {
                "am": "Center",
                "en": "Center"
              }
            },
            "code": "Zc59O",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": {
              "fax": {
                "code": "+251",
                "number": ""
              },
              "city": {
                "am": "AA",
                "en": null
              },
              "zone": {
                "am": "KK",
                "en": null
              },
              "email": "",
              "mobile": {
                "code": "+251",
                "number": ""
              },
              "postal": "",
              "region": {
                "am": "1",
                "en": null
              },
              "district": {
                "am": "05",
                "en": "05"
              },
              "telephone": {
                "code": "+251",
                "number": ""
              },
              "houseNumber": ""
            },
            "organizationSector": {
              "id": "65f35246-9b3d-4d80-b878-e22cc9eec8ca",
              "name": {
                "am": "Health",
                "en": "Health"
              },
              "timestamp": "2022-06-24T12:31:24.832988",
              "description": {
                "am": "Health",
                "en": "Health"
              }
            },
            "externalOrganizationCode": "13741",
            "timestamp": "2022-08-16T17:26:26.237852"
          },
          {
            "id": "efd8032f-9425-457e-9e41-c921fc825d1b",
            "name": {
              "am": "Ethiopian Communication Authority",
              "en": "Ethiopian Communication Authority"
            },
            "shortName": {
              "am": "ECoA",
              "en": "ECoA"
            },
            "description": {
              "am": "Ethiopian Communication Authority",
              "en": "Ethiopian Communication Authority"
            },
            "organizationType": {
              "id": "eaaaebc3-ea65-4ef7-8603-8861977eb2d1",
              "key": "Organization-Type",
              "code": "ryxlq",
              "name": {
                "am": "Authority",
                "en": "Authority"
              },
              "order": 0,
              "timestamp": "2021-07-13T11:59:56.336819",
              "description": {
                "am": "Authority",
                "en": "Authority"
              }
            },
            "code": "3Y5hl",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": {
              "fax": {
                "code": "+251",
                "number": ""
              },
              "city": {
                "am": "Addise Ababa",
                "en": "Addise Ababa"
              },
              "zone": {
                "am": "Bole",
                "en": "Bole"
              },
              "email": "",
              "mobile": {
                "code": "+251",
                "number": ""
              },
              "postal": "",
              "region": {
                "am": "Addis Ababa",
                "en": "Addis Ababa"
              },
              "district": {
                "am": "03",
                "en": "03"
              },
              "telephone": {
                "code": "+251",
                "number": ""
              },
              "houseNumber": "Robel plaza, 2483"
            },
            "organizationSector": {
              "id": "2cec2cda-f0fa-4692-a486-4526642a1086",
              "name": {
                "am": "ጠቅላላ አገልግሎት",
                "en": "General Service"
              },
              "timestamp": "2023-08-19T09:28:29.39931",
              "description": {
                "am": "ጠቅላላ አገልግሎት",
                "en": "General Service"
              }
            },
            "externalOrganizationCode": "14141",
            "timestamp": "2022-08-02T13:47:25.357186"
          },
          {
            "id": "6170ffb2-f64d-4a29-9c6d-4169a99c7076",
            "name": {
              "am": "የብሄራዊ ስነልክ ኢንስቲትዩት",
              "en": " National Metrology Institute of Ethiopia"
            },
            "shortName": {
              "am": "NMIE",
              "en": "NMIE"
            },
            "description": {
              "am": "የብሄራዊ ስነልክ ኢንስቲትዩት",
              "en": " National Metrology Institute of Ethiopia"
            },
            "organizationType": {
              "id": "93f290b5-9516-473c-ba36-ba5c85656d3c",
              "key": "Organization-Type",
              "code": "055",
              "name": {
                "am": "ኢንሰቲትዩት",
                "en": "Institute "
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
                "am": "ኢንሰቲትዩት",
                "en": "Institute "
              }
            },
            "code": "7VGsQ",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": {
              "fax": {
                "code": "+251",
                "number": ""
              },
              "city": {
                "am": null,
                "en": null
              },
              "zone": {
                "am": null,
                "en": null
              },
              "email": "",
              "mobile": {
                "code": "+251",
                "number": ""
              },
              "postal": "",
              "region": {
                "am": null,
                "en": null
              },
              "district": {
                "am": null,
                "en": null
              },
              "telephone": {
                "code": "+251",
                "number": ""
              },
              "houseNumber": ""
            },
            "organizationSector": {
              "id": "2cec2cda-f0fa-4692-a486-4526642a1086",
              "name": {
                "am": "ጠቅላላ አገልግሎት",
                "en": "General Service"
              },
              "timestamp": "2023-08-19T09:28:29.39931",
              "description": {
                "am": "ጠቅላላ አገልግሎት",
                "en": "General Service"
              }
            },
            "externalOrganizationCode": "11094",
            "timestamp": "2022-06-28T07:02:07.688894"
          },
          {
            "id": "b703d081-2744-42c5-aad7-65a92417d64c",
            "name": {
              "am": "የኢትዮጵያ ሰብአዊ መብት ኮሚሽን",
              "en": "Ethiopian Human Rights Commission "
            },
            "shortName": {
              "am": "EHRC",
              "en": "EHRC"
            },
            "description": {
              "am": "የኢትዮጵያ ሰብአዊ መብት ኮሚሽን",
              "en": "Ethiopian Human Rights Commission "
            },
            "organizationType": {
              "id": "cb506b84-ce1a-4d14-b04f-4562c1a2448e",
              "key": "Organization-Type",
              "code": "lontv",
              "name": {
                "am": " Commission",
                "en": " Commission"
              },
              "order": 0,
              "timestamp": "2021-09-16T12:26:40.817191",
              "description": {
                "am": " Commission",
                "en": " Commission"
              }
            },
            "code": "LxurW",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": {
              "fax": {
                "code": "+251",
                "number": ""
              },
              "city": {
                "am": null,
                "en": null
              },
              "zone": {
                "am": null,
                "en": null
              },
              "email": "",
              "mobile": {
                "code": "+251",
                "number": ""
              },
              "postal": "",
              "region": {
                "am": null,
                "en": null
              },
              "district": {
                "am": null,
                "en": null
              },
              "telephone": {
                "code": "+251",
                "number": ""
              },
              "houseNumber": ""
            },
            "organizationSector": {
              "id": "0fc7ab4e-deab-49ae-9117-731ec0c5450c",
              "name": {
                "am": "ፍትህ እና ደህንነት",
                "en": "Justice and security"
              },
              "timestamp": "2023-08-19T09:27:30.520502",
              "description": {
                "am": "ፍትህ እና ደህንነት",
                "en": "Justice and security"
              }
            },
            "externalOrganizationCode": "11025",
            "timestamp": "2021-08-25T05:51:51.073046"
          },
          {
            "id": "b2bf88aa-3f63-4246-89c5-9543245bd095",
            "name": {
              "am": "Ethiopian Water Technology Institute",
              "en": "Ethiopian Water Technology Institute"
            },
            "shortName": {
              "am": "EWTI",
              "en": "EWTI"
            },
            "description": {
              "am": "Ethiopian Water Technology Institute",
              "en": "Ethiopian Water Technology Institute"
            },
            "organizationType": {
              "id": "4c2c2ef8-1c8c-40e2-82b1-2b07e10f82f0",
              "key": "Organization-Type",
              "code": "32323",
              "name": {
                "am": "Government Organization",
                "en": "Government Organization",
                "or": null,
                "tg": null
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
                "am": "-",
                "en": "-",
                "or": null,
                "tg": null
              }
            },
            "code": "WaGDl",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": {
              "fax": {
                "code": "+251",
                "number": "0114431128"
              },
              "city": {
                "am": "አዲስ አበባ",
                "en": "Addis Abeba"
              },
              "zone": {
                "am": "አቃቂ ቃሊቲ",
                "en": "Akaki,Kality"
              },
              "email": "ewti@ewti.et",
              "mobile": {
                "code": "+251",
                "number": ""
              },
              "postal": "",
              "region": {
                "am": "አዲስ አበባ",
                "en": "Addis Abeba"
              },
              "district": {
                "am": "05",
                "en": "05"
              },
              "telephone": {
                "code": "+251",
                "number": ""
              },
              "houseNumber": ""
            },
            "organizationSector": {
              "id": "fc9fa7cc-8371-4617-b3a5-06deabb525b6",
              "name": {
                "am": "ውሃ ሀብትና ኢነርጂ",
                "en": "Water Resources and Energy"
              },
              "timestamp": "2023-08-19T09:29:09.415465",
              "description": {
                "am": "ውሃ ሀብትና ኢነርጂ",
                "en": "Water Resources and Energy"
              }
            },
            "externalOrganizationCode": "13603",
            "timestamp": "2021-08-12T08:43:14.568119"
          },
          {
            "id": "baeadbd6-eaeb-4377-b042-d5e6555c0256",
            "name": {
              "am": "ለገፈርሳ አዕምሮ ህሙማን ማገገሚያ አገልግሎት ",
              "en": "Gefersa Mental Patients Rehabilitation Center"
            },
            "shortName": {
              "am": "GMPRC",
              "en": "GMPRC"
            },
            "description": {
              "am": "Gefersa Mental Patients Rehabilitation Center",
              "en": "Gefersa Mental Patients Rehabilitation Center"
            },
            "organizationType": {
              "id": "573b544a-434d-4c1f-beb4-b1de4d7f1be5",
              "key": "Organization-Type",
              "code": "jtlkj",
              "name": {
                "am": "Center",
                "en": "Center"
              },
              "order": 0,
              "timestamp": "2021-09-16T12:28:39.942465",
              "description": {
                "am": "Center",
                "en": "Center"
              }
            },
            "code": "zuZpL00278",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": {
              "id": "65f35246-9b3d-4d80-b878-e22cc9eec8ca",
              "name": {
                "am": "Health",
                "en": "Health"
              },
              "timestamp": "2022-06-24T12:31:24.832988",
              "description": {
                "am": "Health",
                "en": "Health"
              }
            },
            "externalOrganizationCode": null,
            "timestamp": "2022-10-17T11:48:44.123212"
          },
          {
            "id": "00608153-d7a6-4bd9-896e-6e27cb1cf250",
            "name": {
              "am": "አማኑኤል አዕምሮ ስፔሻላይዝድ ሆስፒታል",
              "en": "Amanuel Mental Specialized Hospital"
            },
            "shortName": {
              "am": "AMSH",
              "en": "AMSH"
            },
            "description": {
              "am": "አማኑኤል አዕምሮ ስፔሻላይዝድ ሆስፒታል\n",
              "en": "Amanuel Mental Specialized Hospital\n"
            },
            "organizationType": {
              "id": "4c2c2ef8-1c8c-40e2-82b1-2b07e10f82f0",
              "key": "Organization-Type",
              "code": "32323",
              "name": {
                "am": "Government Organization",
                "en": "Government Organization",
                "or": null,
                "tg": null
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
                "am": "-",
                "en": "-",
                "or": null,
                "tg": null
              }
            },
            "code": "afJcd",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": {
              "fax": {
                "code": "+251",
                "number": ""
              },
              "city": {
                "am": "አዲስ አበባ",
                "en": "Addis Ababa"
              },
              "zone": {
                "am": "አዲስ አበባ",
                "en": "Addis Ababa"
              },
              "email": "",
              "mobile": {
                "code": "+251",
                "number": ""
              },
              "postal": "",
              "region": {
                "am": "አዲስ አበባ",
                "en": "Addis Ababa"
              },
              "district": {
                "am": null,
                "en": null
              },
              "telephone": {
                "code": "+251",
                "number": ""
              },
              "houseNumber": ""
            },
            "organizationSector": {
              "id": "65f35246-9b3d-4d80-b878-e22cc9eec8ca",
              "name": {
                "am": "Health",
                "en": "Health"
              },
              "timestamp": "2022-06-24T12:31:24.832988",
              "description": {
                "am": "Health",
                "en": "Health"
              }
            },
            "externalOrganizationCode": "13740",
            "timestamp": "2021-08-25T07:30:11.876821"
          },
          {
            "id": "3b57b1b2-f264-47a7-8b51-e82a2f0e838a",
            "name": {
              "am": "የጉምሩክ ኮሚሽን",
              "en": "Ethiopian Customs Commission"
            },
            "shortName": {
              "am": "ECC",
              "en": "ECC"
            },
            "description": {
              "am": "የጉምሩክ ኮሚሽን",
              "en": "Ethiopian Customs Commission"
            },
            "organizationType": {
              "id": "cb506b84-ce1a-4d14-b04f-4562c1a2448e",
              "key": "Organization-Type",
              "code": "lontv",
              "name": {
                "am": " Commission",
                "en": " Commission"
              },
              "order": 0,
              "timestamp": "2021-09-16T12:26:40.817191",
              "description": {
                "am": " Commission",
                "en": " Commission"
              }
            },
            "code": "rZqQO",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": "y",
            "taxIdentificationNumber": null,
            "address": {
              "fax": {
                "code": "+251",
                "number": ""
              },
              "city": {
                "am": null,
                "en": null
              },
              "zone": {
                "am": null,
                "en": null
              },
              "email": "",
              "mobile": {
                "code": "+251",
                "number": ""
              },
              "postal": "2559",
              "region": {
                "am": "አዲስ አበባ",
                "en": "Addis ababa"
              },
              "district": {
                "am": null,
                "en": null
              },
              "telephone": {
                "code": "+251",
                "number": ""
              },
              "houseNumber": ""
            },
            "organizationSector": {
              "id": "2cec2cda-f0fa-4692-a486-4526642a1086",
              "name": {
                "am": "ጠቅላላ አገልግሎት",
                "en": "General Service"
              },
              "timestamp": "2023-08-19T09:28:29.39931",
              "description": {
                "am": "ጠቅላላ አገልግሎት",
                "en": "General Service"
              }
            },
            "externalOrganizationCode": "13809",
            "timestamp": "2021-09-16T13:07:30.850147"
          },
          {
            "id": "9f40669f-86e5-48b1-9f54-7e7a0a742988",
            "name": {
              "am": "የውጭ ጉዳይ ኢንስቲትዩት ",
              "en": "Institute of Foreign Affairs"
            },
            "shortName": {
              "am": "IFA",
              "en": "IFA"
            },
            "description": {
              "am": "የውጭ ጉዳይ ኢንስቲትዩት ",
              "en": "Institute of Foreign Affairs"
            },
            "organizationType": {
              "id": "93f290b5-9516-473c-ba36-ba5c85656d3c",
              "key": "Organization-Type",
              "code": "055",
              "name": {
                "am": "ኢንሰቲትዩት",
                "en": "Institute "
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
                "am": "ኢንሰቲትዩት",
                "en": "Institute "
              }
            },
            "code": "4fChg",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": {
              "fax": {
                "code": "+251",
                "number": ""
              },
              "city": {
                "am": "Addis Ababa",
                "en": "Addis Ababa"
              },
              "zone": {
                "am": "Kirkos",
                "en": "Kirkos"
              },
              "email": "",
              "mobile": {
                "code": "+251",
                "number": ""
              },
              "postal": "",
              "region": {
                "am": "Addis Ababa",
                "en": "Addis Ababa"
              },
              "district": {
                "am": "07",
                "en": "07"
              },
              "telephone": {
                "code": "+251",
                "number": ""
              },
              "houseNumber": ""
            },
            "organizationSector": {
              "id": "2cec2cda-f0fa-4692-a486-4526642a1086",
              "name": {
                "am": "ጠቅላላ አገልግሎት",
                "en": "General Service"
              },
              "timestamp": "2023-08-19T09:28:29.39931",
              "description": {
                "am": "ጠቅላላ አገልግሎት",
                "en": "General Service"
              }
            },
            "externalOrganizationCode": "11169",
            "timestamp": "2022-08-16T17:04:47.718355"
          },
          {
            "id": "119babc1-c656-44fa-8910-8e64fc736799",
            "name": {
              "am": "የመንገድ ደህንነትና መድን ፈንድ አገልግሎት",
              "en": "Road Safety and Insurance Fund Service "
            },
            "shortName": {
              "am": "RSIFS",
              "en": "RSIFS"
            },
            "description": {
              "am": "የመንገድ ደህንነትና መድን ፈንድ አገልግሎት",
              "en": "Road Safety and Insurance Fund Service"
            },
            "organizationType": {
              "id": "de36436b-a5bc-4f67-bcaf-44b171f0e5b0",
              "key": "Organization-Type",
              "code": "c8m3r",
              "name": {
                "am": "Service",
                "en": "Service"
              },
              "order": 0,
              "timestamp": "2021-07-13T12:10:26.94161",
              "description": {
                "am": "Service",
                "en": "Service"
              }
            },
            "code": "CX79a",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": {
              "fax": {
                "code": "+251",
                "number": ""
              },
              "city": {
                "am": null,
                "en": null
              },
              "zone": {
                "am": null,
                "en": null
              },
              "email": "",
              "mobile": {
                "code": "+251",
                "number": ""
              },
              "postal": "",
              "region": {
                "am": null,
                "en": null
              },
              "district": {
                "am": null,
                "en": null
              },
              "telephone": {
                "code": "+251",
                "number": ""
              },
              "houseNumber": ""
            },
            "organizationSector": {
              "id": "92c5683e-77c7-4177-aedf-f201a8649a8a",
              "name": {
                "am": "ትራንስፖርት እና መገናኛ",
                "en": "Transport and Communication"
              },
              "timestamp": "2023-08-19T09:30:10.492956",
              "description": {
                "am": "ትራንስፖርት እና መገናኛ",
                "en": "Transport and Communication"
              }
            },
            "externalOrganizationCode": "11154",
            "timestamp": "2021-09-16T13:32:55.432746"
          },
          {
            "id": "0b058bb3-1e4f-4bd6-8a35-6bb8d5c5efab",
            "name": {
              "am": "የስራና ክህሎት ሚኒስቴር",
              "en": "Ministry of Labor and Skills"
            },
            "shortName": {
              "am": "MoLS",
              "en": "MoLS"
            },
            "description": {
              "am": "የስራና ክህሎት ሚኒስቴር",
              "en": "Ministry of Labor and Skills"
            },
            "organizationType": {
              "id": "a79bcd65-39d1-4ce2-b360-99ab20b2ba32",
              "key": "Organization-Type",
              "code": "09",
              "name": {
                "am": "Ministry",
                "en": "Ministry"
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
                "am": "",
                "en": ""
              }
            },
            "code": "Qvtzj",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": {
              "fax": {
                "code": "+251",
                "number": ""
              },
              "city": {
                "am": null,
                "en": null
              },
              "zone": {
                "am": null,
                "en": null
              },
              "email": "",
              "mobile": {
                "code": "+251",
                "number": ""
              },
              "postal": "",
              "region": {
                "am": null,
                "en": null
              },
              "district": {
                "am": null,
                "en": null
              },
              "telephone": {
                "code": "+251",
                "number": ""
              },
              "houseNumber": ""
            },
            "organizationSector": {
              "id": "1e1b7436-f75e-440d-b356-645a9095fe74",
              "name": {
                "am": "የሰራተኛና ማህበራዊ ጉዳይ",
                "en": "Labour and Social Affairs"
              },
              "timestamp": "2023-08-19T09:31:34.192341",
              "description": {
                "am": "የሰራተኛና ማህበራዊ ጉዳይ",
                "en": "Labour and Social Affairs"
              }
            },
            "externalOrganizationCode": "14595",
            "timestamp": "2021-09-16T13:41:00.666538"
          },
          {
            "id": "6ee43ed3-a7e4-4864-b8cf-6454e785ae2e",
            "name": {
              "am": "የኢትዮጵያ ብሄራዊ ትያትር",
              "en": "Ethiopian National Theatre"
            },
            "shortName": {
              "am": "ENT",
              "en": "ENT"
            },
            "description": {
              "am": "የኢትዮጵያ ብሄራዊ ትያትር\n",
              "en": "Ethiopian National Theatre\n"
            },
            "organizationType": {
              "id": "4c2c2ef8-1c8c-40e2-82b1-2b07e10f82f0",
              "key": "Organization-Type",
              "code": "32323",
              "name": {
                "am": "Government Organization",
                "en": "Government Organization",
                "or": null,
                "tg": null
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
                "am": "-",
                "en": "-",
                "or": null,
                "tg": null
              }
            },
            "code": "f3r8Q",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": {
              "fax": {
                "code": "+251",
                "number": ""
              },
              "city": {
                "am": "Addis Ababa",
                "en": "Addis Ababa"
              },
              "zone": {
                "am": "Kirkose",
                "en": "Kirkose"
              },
              "email": "entgov3@gmail.com",
              "mobile": {
                "code": "+251",
                "number": "000911889686"
              },
              "postal": "3200",
              "region": {
                "am": "Addis Ababa",
                "en": "Addis Ababa"
              },
              "district": {
                "am": "07",
                "en": "07"
              },
              "telephone": {
                "code": "+251",
                "number": "000115158225"
              },
              "houseNumber": "new"
            },
            "organizationSector": {
              "id": "de36e074-9440-4545-bf21-914eca5c067d",
              "name": {
                "am": "ባህና ስፖርት",
                "en": "Culture and sports"
              },
              "timestamp": "2023-08-19T09:31:07.684819",
              "description": {
                "am": "ባህና ስፖርት",
                "en": "Culture and sports"
              }
            },
            "externalOrganizationCode": "11269",
            "timestamp": "2021-08-25T06:21:47.45598"
          },
          {
            "id": "123a8d1e-b7ff-45d7-b74d-1a717d8e0288",
            "name": {
              "am": "ለነዳጅ እና ኢነርጂ ባለስልጣን ",
              "en": "Petroleum and Energy Authority"
            },
            "shortName": {
              "am": "PEA",
              "en": "PEA"
            },
            "description": {
              "am": "PEA",
              "en": "PEA"
            },
            "organizationType": {
              "id": "eaaaebc3-ea65-4ef7-8603-8861977eb2d1",
              "key": "Organization-Type",
              "code": "ryxlq",
              "name": {
                "am": "Authority",
                "en": "Authority"
              },
              "order": 0,
              "timestamp": "2021-07-13T11:59:56.336819",
              "description": {
                "am": "Authority",
                "en": "Authority"
              }
            },
            "code": "2zY1M00270",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": true,
            "deleteRemark": "None Existence of PE \n",
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": {
              "id": "22b8d3a5-4861-4bcb-9cac-d4f26cc9d80e",
              "name": {
                "am": "Social",
                "en": "Social"
              },
              "timestamp": "2022-06-24T12:32:27.728597",
              "description": {
                "am": "Social",
                "en": "Social"
              }
            },
            "externalOrganizationCode": "14598",
            "timestamp": "2022-10-17T11:08:00.259588"
          },
          {
            "id": "a5c62cda-2881-4ea7-abc9-ea9c9398784b",
            "name": {
              "am": "የኢትዮጵያ ፀረ አበረታች ቅመሞች ባለስልጣን",
              "en": "Ethiopian Anti Doping Authority"
            },
            "shortName": {
              "am": "EADA",
              "en": "EADA"
            },
            "description": {
              "am": "የኢትዮጵያ ፀረ አበረታች ቅመሞች ባለስልጣን",
              "en": "Ethiopian Anti Doping Authority"
            },
            "organizationType": {
              "id": "eaaaebc3-ea65-4ef7-8603-8861977eb2d1",
              "key": "Organization-Type",
              "code": "ryxlq",
              "name": {
                "am": "Authority",
                "en": "Authority"
              },
              "order": 0,
              "timestamp": "2021-07-13T11:59:56.336819",
              "description": {
                "am": "Authority",
                "en": "Authority"
              }
            },
            "code": "hfp7I",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": {
              "fax": {
                "code": "+251",
                "number": ""
              },
              "city": {
                "am": null,
                "en": null
              },
              "zone": {
                "am": null,
                "en": null
              },
              "email": "",
              "mobile": {
                "code": "+251",
                "number": ""
              },
              "postal": "",
              "region": {
                "am": null,
                "en": null
              },
              "district": {
                "am": null,
                "en": null
              },
              "telephone": {
                "code": "+251",
                "number": ""
              },
              "houseNumber": ""
            },
            "organizationSector": {
              "id": "de36e074-9440-4545-bf21-914eca5c067d",
              "name": {
                "am": "ባህና ስፖርት",
                "en": "Culture and sports"
              },
              "timestamp": "2023-08-19T09:31:07.684819",
              "description": {
                "am": "ባህና ስፖርት",
                "en": "Culture and sports"
              }
            },
            "externalOrganizationCode": "11335",
            "timestamp": "2021-09-16T13:03:40.803291"
          },
          {
            "id": "36e3ea56-9d7e-4174-835e-e1a274701c4e",
            "name": {
              "am": "የቀብሪ ዳሃር ዩኒቨርስቲ",
              "en": "Kebri Dahar University"
            },
            "shortName": {
              "am": "KDU",
              "en": "KDU"
            },
            "description": {
              "am": "የቀብሪ ዳሃር ዩኒቨርስቲ",
              "en": "Kebri Dahar University"
            },
            "organizationType": {
              "id": "04c1385a-761b-4570-be88-e8ba1954f45a",
              "key": "Organization-Type",
              "code": "0035",
              "name": {
                "am": "Higher Inistitution",
                "en": "Higher Inistitution",
                "or": null,
                "tg": null
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
      
              }
            },
            "code": "qMxFU",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": {
              "fax": {
                "code": "+251",
                "number": ""
              },
              "city": {
                "am": null,
                "en": null
              },
              "zone": {
                "am": null,
                "en": null
              },
              "email": "",
              "mobile": {
                "code": "+251",
                "number": ""
              },
              "postal": "",
              "region": {
                "am": null,
                "en": null
              },
              "district": {
                "am": null,
                "en": null
              },
              "telephone": {
                "code": null,
                "number": ""
              },
              "houseNumber": ""
            },
            "organizationSector": {
              "id": "3c224171-4702-417f-a76e-b15dc0bf94b2",
              "name": {
                "am": "Education",
                "en": "Education"
              },
              "timestamp": "2022-06-24T12:31:37.866714",
              "description": {
                "am": "Education",
                "en": "Education"
              }
            },
            "externalOrganizationCode": null,
            "timestamp": "2021-09-16T13:37:28.422547"
          },
          {
            "id": "5ca57aaa-95d5-4936-b2f0-9346ce19d647",
            "name": {
              "am": "የጤና ሚኒስቴር",
              "en": "Ministry of Health "
            },
            "shortName": {
              "am": "MoH",
              "en": "MoH"
            },
            "description": {
              "am": "የጤና ሚኒስቴር",
              "en": "Ministry of Health "
            },
            "organizationType": {
              "id": "a79bcd65-39d1-4ce2-b360-99ab20b2ba32",
              "key": "Organization-Type",
              "code": "09",
              "name": {
                "am": "Ministry",
                "en": "Ministry"
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
                "am": "",
                "en": ""
              }
            },
            "code": "x9DdJ",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": {
              "fax": {
                "code": "+251",
                "number": ""
              },
              "city": {
                "am": "አዲስ አበባ",
                "en": "Addis Ababa"
              },
              "zone": {
                "am": "ልደታ",
                "en": "LIDETA"
              },
              "email": "",
              "mobile": {
                "code": "+251",
                "number": ""
              },
              "postal": "",
              "region": {
                "am": "አዲስ አበባ",
                "en": "Addis Ababa"
              },
              "district": {
                "am": "11",
                "en": "11"
              },
              "telephone": {
                "code": "+251",
                "number": "251115517170"
              },
              "houseNumber": ""
            },
            "organizationSector": {
              "id": "65f35246-9b3d-4d80-b878-e22cc9eec8ca",
              "name": {
                "am": "Health",
                "en": "Health"
              },
              "timestamp": "2022-06-24T12:31:24.832988",
              "description": {
                "am": "Health",
                "en": "Health"
              }
            },
            "externalOrganizationCode": "13501",
            "timestamp": "2021-09-16T13:40:16.383842"
          },
          {
            "id": "bd26628e-6678-4eb2-8bdb-0252f777c2e7",
            "name": {
              "am": "FDRE Center for Constitution and Federalism Training",
              "en": "FDRE Center for Constitution and Federalism Training"
            },
            "shortName": {
              "am": "CCFT",
              "en": "CCFT"
            },
            "description": {
              "am": "FDRE Center for Constitution and Federalism Training",
              "en": "FDRE Center for Constitution and Federalism Training"
            },
            "organizationType": {
              "id": "573b544a-434d-4c1f-beb4-b1de4d7f1be5",
              "key": "Organization-Type",
              "code": "jtlkj",
              "name": {
                "am": "Center",
                "en": "Center"
              },
              "order": 0,
              "timestamp": "2021-09-16T12:28:39.942465",
              "description": {
                "am": "Center",
                "en": "Center"
              }
            },
            "code": "02W4d",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": {
              "fax": {
                "code": "+251",
                "number": ""
              },
              "city": {
                "am": null,
                "en": null
              },
              "zone": {
                "am": null,
                "en": null
              },
              "email": "",
              "mobile": {
                "code": "+251",
                "number": ""
              },
              "postal": "",
              "region": {
                "am": null,
                "en": null
              },
              "district": {
                "am": null,
                "en": null
              },
              "telephone": {
                "code": "+251",
                "number": ""
              },
              "houseNumber": ""
            },
            "organizationSector": {
              "id": "53a63473-9f24-4ca8-a694-9404c4933d47",
              "name": {
                "am": "የህግ አውጪና አስፈፃሚ አካላት",
                "en": "Legislative and Executive Bodies"
              },
              "timestamp": "2023-08-19T09:26:54.441101",
              "description": {
                "am": "Legislative and Executive Bodies",
                "en": "Legislative and Executive Bodies"
              }
            },
            "externalOrganizationCode": "14486",
            "timestamp": "2022-08-22T12:48:19.632833"
          },
          {
            "id": "8b51a1ba-9d80-4b97-a6d5-5b9844a0bb4a",
            "name": {
              "am": "ደብረ ታቦር ዩኒቨርሲቲ",
              "en": "Debre Tabor universsity"
            },
            "shortName": {
              "am": "DTU",
              "en": "DTU"
            },
            "description": {
              "am": "ደብረ ታቦር ዩኒቨርሲቲ",
              "en": "Debre Tabor universsity"
            },
            "organizationType": {
              "id": "04c1385a-761b-4570-be88-e8ba1954f45a",
              "key": "Organization-Type",
              "code": "0035",
              "name": {
                "am": "Higher Inistitution",
                "en": "Higher Inistitution",
                "or": null,
                "tg": null
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
      
              }
            },
            "code": "BmWlC",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": "f",
            "taxIdentificationNumber": null,
            "address": {
              "fax": {
                "code": "+251",
                "number": ""
              },
              "city": {
                "am": "ደብረ ታቦር",
                "en": "Debre Tabor"
              },
              "zone": {
                "am": "ደቡብ ጎንደር",
                "en": "South Gondar"
              },
              "email": "dtu@dtu.edu.et",
              "mobile": {
                "code": "+251",
                "number": "251911001360"
              },
              "postal": "272",
              "region": {
                "am": "አማራ",
                "en": "Amhara"
              },
              "district": {
                "am": "ደብረ ታቦር",
                "en": "Debre Tabor"
              },
              "telephone": {
                "code": "+251",
                "number": ""
              },
              "houseNumber": ""
            },
            "organizationSector": {
              "id": "3c224171-4702-417f-a76e-b15dc0bf94b2",
              "name": {
                "am": "Education",
                "en": "Education"
              },
              "timestamp": "2022-06-24T12:31:37.866714",
              "description": {
                "am": "Education",
                "en": "Education"
              }
            },
            "externalOrganizationCode": null,
            "timestamp": "2021-08-24T07:17:35.018658"
          },
          {
            "id": "8d16bbb9-6168-4bcb-a4a7-fbfb67f8be54",
            "name": {
              "am": "Federal High Court",
              "en": "Federal High Court"
            },
            "shortName": {
              "am": "FHCE",
              "en": "FHCE"
            },
            "description": {
              "am": "Federal High Court",
              "en": "Federal High Court"
            },
            "organizationType": {
              "id": "4c2c2ef8-1c8c-40e2-82b1-2b07e10f82f0",
              "key": "Organization-Type",
              "code": "32323",
              "name": {
                "am": "Government Organization",
                "en": "Government Organization",
                "or": null,
                "tg": null
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
                "am": "-",
                "en": "-",
                "or": null,
                "tg": null
              }
            },
            "code": "9NTEl",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": {
              "id": "0fc7ab4e-deab-49ae-9117-731ec0c5450c",
              "name": {
                "am": "ፍትህ እና ደህንነት",
                "en": "Justice and security"
              },
              "timestamp": "2023-08-19T09:27:30.520502",
              "description": {
                "am": "ፍትህ እና ደህንነት",
                "en": "Justice and security"
              }
            },
            "externalOrganizationCode": "11013",
            "timestamp": "2021-09-16T13:22:31.889996"
          },
          {
            "id": "d2661748-c078-4b64-a73f-d8de6d583c01",
            "name": {
              "am": "የስፔስ ቴክኖሎጂና ጂኦስፓሺያል ኢንስቲትዩት",
              "en": "Space Science and Geospatial Institute"
            },
            "shortName": {
              "am": "SSGI",
              "en": "SSGI"
            },
            "description": {
              "am": "የስፔስ ቴክኖሎጂና ጂኦስፓሺያል ኢንስቲትዩት",
              "en": "Space Science and Geospatial Institute"
            },
            "organizationType": {
              "id": "93f290b5-9516-473c-ba36-ba5c85656d3c",
              "key": "Organization-Type",
              "code": "055",
              "name": {
                "am": "ኢንሰቲትዩት",
                "en": "Institute "
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
                "am": "ኢንሰቲትዩት",
                "en": "Institute "
              }
            },
            "code": "yeXVb",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": {
              "fax": {
                "code": "+251",
                "number": ""
              },
              "city": {
                "am": "አዲስ አበባ",
                "en": "Addis Ababa"
              },
              "zone": {
                "am": "ቂርቆስ ክ/ከተማ",
                "en": "kirkos sub city "
              },
              "email": "",
              "mobile": {
                "code": "+251",
                "number": ""
              },
              "postal": "",
              "region": {
                "am": "አዲስ አበባ",
                "en": "Addis Ababa"
              },
              "district": {
                "am": null,
                "en": null
              },
              "telephone": {
                "code": "+251",
                "number": ""
              },
              "houseNumber": ""
            },
            "organizationSector": {
              "id": "2cec2cda-f0fa-4692-a486-4526642a1086",
              "name": {
                "am": "ጠቅላላ አገልግሎት",
                "en": "General Service"
              },
              "timestamp": "2023-08-19T09:28:29.39931",
              "description": {
                "am": "ጠቅላላ አገልግሎት",
                "en": "General Service"
              }
            },
            "externalOrganizationCode": "13672",
            "timestamp": "2021-08-26T08:26:09.942351"
          },
          {
            "id": "64066046-4bab-4835-994a-de5b35874a84",
            "name": {
              "am": "መንግስት ኮሚኒኬሽን አገልግሎት ",
              "en": "Government Communication Service"
            },
            "shortName": {
              "am": "GCS",
              "en": "GCS"
            },
            "description": {
              "am": "Government Communication Service",
              "en": "Government Communication Service"
            },
            "organizationType": {
              "id": "de36436b-a5bc-4f67-bcaf-44b171f0e5b0",
              "key": "Organization-Type",
              "code": "c8m3r",
              "name": {
                "am": "Service",
                "en": "Service"
              },
              "order": 0,
              "timestamp": "2021-07-13T12:10:26.94161",
              "description": {
                "am": "Service",
                "en": "Service"
              }
            },
            "code": "vcCPU00272",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": {
              "id": "2cec2cda-f0fa-4692-a486-4526642a1086",
              "name": {
                "am": "ጠቅላላ አገልግሎት",
                "en": "General Service"
              },
              "timestamp": "2023-08-19T09:28:29.39931",
              "description": {
                "am": "ጠቅላላ አገልግሎት",
                "en": "General Service"
              }
            },
            "externalOrganizationCode": "14494",
            "timestamp": "2022-10-17T11:12:11.322191"
          },
          {
            "id": "1cb8a480-4b98-4da5-bcc0-c03a0a1c304e",
            "name": {
              "am": "Jimma University ",
              "en": "Jimma University "
            },
            "shortName": {
              "am": "JU",
              "en": "JU"
            },
            "description": {
              "am": "Jimma University ",
              "en": "Jimma University "
            },
            "organizationType": {
              "id": "04c1385a-761b-4570-be88-e8ba1954f45a",
              "key": "Organization-Type",
              "code": "0035",
              "name": {
                "am": "Higher Inistitution",
                "en": "Higher Inistitution",
                "or": null,
                "tg": null
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
      
              }
            },
            "code": "Xd37P",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": {
              "fax": {
                "code": "+251",
                "number": ""
              },
              "city": {
                "am": "Jimma",
                "en": "Jimma"
              },
              "zone": {
                "am": "Jimma",
                "en": "Jimma"
              },
              "email": "ero@ju.edu.et",
              "mobile": {
                "code": "+251",
                "number": ""
              },
              "postal": "378",
              "region": {
                "am": "Oromia",
                "en": "Oromia"
              },
              "district": {
                "am": null,
                "en": null
              },
              "telephone": {
                "code": "+251",
                "number": ""
              },
              "houseNumber": ""
            },
            "organizationSector": {
              "id": "3c224171-4702-417f-a76e-b15dc0bf94b2",
              "name": {
                "am": "Education",
                "en": "Education"
              },
              "timestamp": "2022-06-24T12:31:37.866714",
              "description": {
                "am": "Education",
                "en": "Education"
              }
            },
            "externalOrganizationCode": "11220",
            "timestamp": "2021-09-16T13:36:47.524714"
          },
          {
            "id": "5d25093f-673e-448e-96c2-3f007c6dd284",
            "name": {
              "am": "የኢትዮጵያ ህብረተሰብ ጤና ኢንስቲትዩት",
              "en": " Ethiopian Public Health Institute"
            },
            "shortName": {
              "am": "EPHI",
              "en": "EPHI"
            },
            "description": {
              "am": "የኢትዮጵያ ህብረተሰብ ጤና ኢንስቲትዩት",
              "en": "Ethiopian Public Health Institute"
            },
            "organizationType": {
              "id": "93f290b5-9516-473c-ba36-ba5c85656d3c",
              "key": "Organization-Type",
              "code": "055",
              "name": {
                "am": "ኢንሰቲትዩት",
                "en": "Institute "
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
                "am": "ኢንሰቲትዩት",
                "en": "Institute "
              }
            },
            "code": "prRCK",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": {
              "id": "65f35246-9b3d-4d80-b878-e22cc9eec8ca",
              "name": {
                "am": "Health",
                "en": "Health"
              },
              "timestamp": "2022-06-24T12:31:24.832988",
              "description": {
                "am": "Health",
                "en": "Health"
              }
            },
            "externalOrganizationCode": "11270",
            "timestamp": "2022-07-25T12:15:56.892937"
          },
          {
            "id": "c6faf1fc-2b1d-4d84-9b23-259e30d682bc",
            "name": {
              "am": "ለኢትዮጵያ ካፒታል ገበያ ባለስልጣን  ",
              "en": "Ethiopian Capital Market Authority"
            },
            "shortName": {
              "am": "ECMA",
              "en": "ECMA"
            },
            "description": {
              "am": "Ethiopian Capital Market Authority",
              "en": "Ethiopian Capital Market Authority"
            },
            "organizationType": {
              "id": "eaaaebc3-ea65-4ef7-8603-8861977eb2d1",
              "key": "Organization-Type",
              "code": "ryxlq",
              "name": {
                "am": "Authority",
                "en": "Authority"
              },
              "order": 0,
              "timestamp": "2021-07-13T11:59:56.336819",
              "description": {
                "am": "Authority",
                "en": "Authority"
              }
            },
            "code": "6Pmqp00274",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": {
              "id": "22b8d3a5-4861-4bcb-9cac-d4f26cc9d80e",
              "name": {
                "am": "Social",
                "en": "Social"
              },
              "timestamp": "2022-06-24T12:32:27.728597",
              "description": {
                "am": "Social",
                "en": "Social"
              }
            },
            "externalOrganizationCode": null,
            "timestamp": "2022-10-17T11:35:13.111136"
          },
          {
            "id": "af89de36-a65a-40b2-a607-73f0cd9a0c24",
            "name": {
              "am": "የኮንስትራክሽን ማኔጅመንት ኢንስቲትዩት ኢንስቲትዩት",
              "en": "Institute Construction Management Institute"
            },
            "shortName": {
              "am": "CMICMI",
              "en": "CMICMI"
            },
            "description": {
              "am": "የኮንስትራክሽን ማኔጅመንት ኢንስቲትዩት ኢንስቲትዩት",
              "en": "Institute Construction Management Institute"
            },
            "organizationType": {
              "id": "93f290b5-9516-473c-ba36-ba5c85656d3c",
              "key": "Organization-Type",
              "code": "055",
              "name": {
                "am": "ኢንሰቲትዩት",
                "en": "Institute "
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
                "am": "ኢንሰቲትዩት",
                "en": "Institute "
              }
            },
            "code": "ALIac",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": true,
            "isDeleted": true,
            "deleteRemark": "hj",
            "deactivateRemark": "f",
            "taxIdentificationNumber": null,
            "address": {
              "fax": {
                "code": "+251",
                "number": ""
              },
              "city": {
                "am": null,
                "en": null
              },
              "zone": {
                "am": null,
                "en": null
              },
              "email": "",
              "mobile": {
                "code": "+251",
                "number": ""
              },
              "postal": "",
              "region": {
                "am": null,
                "en": null
              },
              "district": {
                "am": null,
                "en": null
              },
              "telephone": {
                "code": "+251",
                "number": ""
              },
              "houseNumber": ""
            },
            "organizationSector": {
              "id": "1ed15352-c17b-4f3a-97a5-ec23c32e38df",
              "name": {
                "am": "Economy ",
                "en": "Economy "
              },
              "timestamp": "2022-06-24T12:32:13.56549",
              "description": {
                "am": "Economy ",
                "en": "Economy "
              }
            },
            "externalOrganizationCode": null,
            "timestamp": "2021-08-24T08:25:45.435693"
          },
          {
            "id": "c9214ca0-38b5-43f4-978b-cff9105f5cdd",
            "name": {
              "am": "ባዮ እና ኢመርጅንግ ቴክኖሎጂ ኢንስቲትዩት",
              "en": "Bio and Emerging technology Institute"
            },
            "shortName": {
              "am": "BTI",
              "en": "BTI"
            },
            "description": {
              "am": "ባዮ እና ኢመርጅንግ ቴክኖሎጂ ኢንስቲትዩት",
              "en": "Bio and Emerging technology Institute\n"
            },
            "organizationType": {
              "id": "93f290b5-9516-473c-ba36-ba5c85656d3c",
              "key": "Organization-Type",
              "code": "055",
              "name": {
                "am": "ኢንሰቲትዩት",
                "en": "Institute "
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
                "am": "ኢንሰቲትዩት",
                "en": "Institute "
              }
            },
            "code": "QKBdV",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": {
              "fax": {
                "code": "+251",
                "number": ""
              },
              "city": {
                "am": "አዲስ አብባ",
                "en": "Addis Ababa"
              },
              "zone": {
                "am": "ቂርቆስ ክ/ከተማ",
                "en": "Kirkose subCity "
              },
              "email": "",
              "mobile": {
                "code": "+251",
                "number": ""
              },
              "postal": "",
              "region": {
                "am": "አዲስ አብባ",
                "en": "Addis Ababa"
              },
              "district": {
                "am": null,
                "en": null
              },
              "telephone": {
                "code": "+251",
                "number": ""
              },
              "houseNumber": ""
            },
            "organizationSector": {
              "id": "2cec2cda-f0fa-4692-a486-4526642a1086",
              "name": {
                "am": "ጠቅላላ አገልግሎት",
                "en": "General Service"
              },
              "timestamp": "2023-08-19T09:28:29.39931",
              "description": {
                "am": "ጠቅላላ አገልግሎት",
                "en": "General Service"
              }
            },
            "externalOrganizationCode": "11186",
            "timestamp": "2021-09-16T12:57:54.732575"
          },
          {
            "id": "db3e9039-6ba1-4917-8ce9-de7f9dd5a6e0",
            "name": {
              "am": "የደምና ቲሹ ባንክ አገልግሎት",
              "en": "Ethiopian Blood and Tissue Bank Service"
            },
            "shortName": {
              "am": "EBTBS",
              "en": "EBTBS"
            },
            "description": {
              "am": "የደምና ቲሹ ባንክ አገልግሎት",
              "en": "Ethiopian Blood and Tissue Bank Service"
            },
            "organizationType": {
              "id": "de36436b-a5bc-4f67-bcaf-44b171f0e5b0",
              "key": "Organization-Type",
              "code": "c8m3r",
              "name": {
                "am": "Service",
                "en": "Service"
              },
              "order": 0,
              "timestamp": "2021-07-13T12:10:26.94161",
              "description": {
                "am": "Service",
                "en": "Service"
              }
            },
            "code": "Pcw7k",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": {
              "fax": {
                "code": "+251",
                "number": ""
              },
              "city": {
                "am": "አዲስ አበባ",
                "en": "Addis Ababa"
              },
              "zone": {
                "am": "ልደታ",
                "en": "Lideta"
              },
              "email": "",
              "mobile": {
                "code": "+251",
                "number": ""
              },
              "postal": "",
              "region": {
                "am": "አዲስ አበባ",
                "en": "Addis Ababa"
              },
              "district": {
                "am": "9",
                "en": "9"
              },
              "telephone": {
                "code": "+251",
                "number": "251118275325"
              },
              "houseNumber": ""
            },
            "organizationSector": {
              "id": "65f35246-9b3d-4d80-b878-e22cc9eec8ca",
              "name": {
                "am": "Health",
                "en": "Health"
              },
              "timestamp": "2022-06-24T12:31:24.832988",
              "description": {
                "am": "Health",
                "en": "Health"
              }
            },
            "externalOrganizationCode": "13396",
            "timestamp": "2021-11-02T06:41:13.185841"
          },
          {
            "id": "66aa70c7-f199-4dfc-99bf-cba11d33fd38",
            "name": {
              "am": "የሴቶችና ማህበራዊ ጉዳይ ሚኒስቴር",
              "en": "Ministry of Women and Social Affairs"
            },
            "shortName": {
              "am": "MoWSA",
              "en": "MoWSA"
            },
            "description": {
              "am": "የሴቶችና ማህበራዊ ጉዳይ ሚኒስቴር",
              "en": "Ministry of Women and Social Affairs"
            },
            "organizationType": {
              "id": "a79bcd65-39d1-4ce2-b360-99ab20b2ba32",
              "key": "Organization-Type",
              "code": "09",
              "name": {
                "am": "Ministry",
                "en": "Ministry"
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
                "am": "",
                "en": ""
              }
            },
            "code": "kqlAp",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": true,
            "isDeleted": false,
            "deleteRemark": "f",
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": {
              "fax": {
                "code": "+251",
                "number": "2056"
              },
              "city": {
                "am": "አዲስ አበባ",
                "en": "Addis Abeba"
              },
              "zone": {
                "am": "ካዛንችስ",
                "en": "Kazanchis Addis Ababa Ethiopia"
              },
              "email": "info@mowsa.gov.et",
              "mobile": {
                "code": null,
                "number": ""
              },
              "postal": "",
              "region": {
                "am": "አዲስ አበባ",
                "en": "Addis Abeba"
              },
              "district": {
                "am": "ቂርቆስ ወረዳ 08",
                "en": "KIrkos woreda 08"
              },
              "telephone": {
                "code": "+251",
                "number": ""
              },
              "houseNumber": "+251-11-551 70 80"
            },
            "organizationSector": {
              "id": "1e1b7436-f75e-440d-b356-645a9095fe74",
              "name": {
                "am": "የሰራተኛና ማህበራዊ ጉዳይ",
                "en": "Labour and Social Affairs"
              },
              "timestamp": "2023-08-19T09:31:34.192341",
              "description": {
                "am": "የሰራተኛና ማህበራዊ ጉዳይ",
                "en": "Labour and Social Affairs"
              }
            },
            "externalOrganizationCode": "11305",
            "timestamp": "2022-06-24T12:33:04.826385"
          },
          {
            "id": "fb69b2a9-4823-4799-b637-6857e9f40437",
            "name": {
              "am": "የኮንስትራክሽን ማኔጅመንት ኢንስቲትዩት",
              "en": "Construction Management Institute "
            },
            "shortName": {
              "am": "CMI",
              "en": "CMI"
            },
            "description": {
              "am": "የኮንስትራክሽን ማኔጅመንት ኢንስቲትዩት",
              "en": "Construction Management Institute "
            },
            "organizationType": {
              "id": "93f290b5-9516-473c-ba36-ba5c85656d3c",
              "key": "Organization-Type",
              "code": "055",
              "name": {
                "am": "ኢንሰቲትዩት",
                "en": "Institute "
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
                "am": "ኢንሰቲትዩት",
                "en": "Institute "
              }
            },
            "code": "O0jqz",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": {
              "id": "3192fc10-11c7-44fe-b7ee-8f9aa869f44b",
              "name": {
                "am": "የከተማ ልማት እና ኮንስትራክሽን",
                "en": "Urban development and construction"
              },
              "timestamp": "2023-08-19T09:30:32.659427",
              "description": {
                "am": "የከተማ ልማት እና ኮንስትራክሽን",
                "en": "Urban development and construction"
              }
            },
            "externalOrganizationCode": "11161",
            "timestamp": "2022-07-26T08:40:29.567427"
          },
          {
            "id": "dc9a670d-d9df-4439-a7dd-88112a990077",
            "name": {
              "am": "የከተማና መሰረተ ልማት ሚኒስቴር",
              "en": "Ministry of Urban and Infrastructure"
            },
            "shortName": {
              "am": "MoUI",
              "en": "MoUI"
            },
            "description": {
              "am": "የከተማና መሰረተ ልማት ሚኒስቴር",
              "en": "Ministry of Urban and Infrastructure"
            },
            "organizationType": {
              "id": "a79bcd65-39d1-4ce2-b360-99ab20b2ba32",
              "key": "Organization-Type",
              "code": "09",
              "name": {
                "am": "ministry",
                "en": "ministry",
                "or": null,
                "tg": null
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
      
              }
            },
            "code": "bfcWT",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": {
              "fax": {
                "code": "+251",
                "number": "555 12 68"
              },
              "city": {
                "am": "አዲስ አበባ ",
                "en": "Addis Abeba"
              },
              "zone": {
                "am": "ልደታ",
                "en": "Lideta"
              },
              "email": "PR.OFFICE@gmail.com",
              "mobile": {
                "code": "+251",
                "number": ""
              },
              "postal": "24134/1000",
              "region": {
                "am": "አዲስ አበባ",
                "en": "Addis Abeba"
              },
              "district": {
                "am": "ወረዳ 9",
                "en": "09"
              },
              "telephone": {
                "code": "+251",
                "number": ""
              },
              "houseNumber": ""
            },
            "organizationSector": {
              "id": "3192fc10-11c7-44fe-b7ee-8f9aa869f44b",
              "name": {
                "am": "የከተማ ልማት እና ኮንስትራክሽን",
                "en": "Urban development and construction"
              },
              "timestamp": "2023-08-19T09:30:32.659427",
              "description": {
                "am": "የከተማ ልማት እና ኮንስትራክሽን",
                "en": "Urban development and construction"
              }
            },
            "externalOrganizationCode": "11155",
            "timestamp": "2021-08-24T08:28:10.600098"
          },
          {
            "id": "04abe19f-d63c-47d0-93da-281b3f6b8440",
            "name": {
              "am": "Kotebe University of Education ",
              "en": "Kotebe University of Education "
            },
            "shortName": {
              "am": "KUE",
              "en": "KUE"
            },
            "description": {
              "am": "Kotebe University of Education ",
              "en": "Kotebe University of Education "
            },
            "organizationType": {
              "id": "04c1385a-761b-4570-be88-e8ba1954f45a",
              "key": "Organization-Type",
              "code": "0035",
              "name": {
                "am": "Higher Inistitution",
                "en": "Higher Inistitution",
                "or": null,
                "tg": null
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
      
              }
            },
            "code": "F7JuM",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": {
              "fax": {
                "code": "+251",
                "number": ""
              },
              "city": {
                "am": "አዲስ አበባ",
                "en": "Addis Ababa"
              },
              "zone": {
                "am": "የካ",
                "en": "Yeka"
              },
              "email": "info@kue.edu.et",
              "mobile": {
                "code": "+251",
                "number": ""
              },
              "postal": "31248",
              "region": {
                "am": "አዲስ አበባ",
                "en": "Addis Ababa"
              },
              "district": {
                "am": "11",
                "en": "11"
              },
              "telephone": {
                "code": "+251",
                "number": ""
              },
              "houseNumber": ""
            },
            "organizationSector": {
              "id": "3c224171-4702-417f-a76e-b15dc0bf94b2",
              "name": {
                "am": "Education",
                "en": "Education"
              },
              "timestamp": "2022-06-24T12:31:37.866714",
              "description": {
                "am": "Education",
                "en": "Education"
              }
            },
            "externalOrganizationCode": "13952",
            "timestamp": "2022-08-04T12:11:36.209177"
          },
          {
            "id": "204933d7-af64-41f5-8c63-d3ea8ce2bc79",
            "name": {
              "am": "የትምህርት ሚኒስቴር",
              "en": "Ministry of Education"
            },
            "shortName": {
              "am": "MoE",
              "en": "MoE"
            },
            "description": {
              "am": "የትምህርት ሚኒስቴር",
              "en": "Ministry of Education"
            },
            "organizationType": {
              "id": "a79bcd65-39d1-4ce2-b360-99ab20b2ba32",
              "key": "Organization-Type",
              "code": "09",
              "name": {
                "am": "ministry",
                "en": "ministry",
                "or": null,
                "tg": null
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
      
              }
            },
            "code": "RU4jB",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": {
              "fax": {
                "code": "+251",
                "number": ""
              },
              "city": {
                "am": "Addis ababa",
                "en": "Addis ababa"
              },
              "zone": {
                "am": "Arada",
                "en": "arada"
              },
              "email": "",
              "mobile": {
                "code": "+251",
                "number": ""
              },
              "postal": "",
              "region": {
                "am": "14",
                "en": "14"
              },
              "district": {
                "am": null,
                "en": null
              },
              "telephone": {
                "code": "+251",
                "number": ""
              },
              "houseNumber": ""
            },
            "organizationSector": {
              "id": "3c224171-4702-417f-a76e-b15dc0bf94b2",
              "name": {
                "am": "Education",
                "en": "Education"
              },
              "timestamp": "2022-06-24T12:31:37.866714",
              "description": {
                "am": "Education",
                "en": "Education"
              }
            },
            "externalOrganizationCode": "13001",
            "timestamp": "2021-08-24T09:16:46.964477"
          },
          {
            "id": "4a03cbbb-65c4-4cd9-8431-f193ccaf2f73",
            "name": {
              "am": "የማዕድን ኢንዱስትሪ ልማት ኢንስቲትዩት",
              "en": "Mining Industry Development Institute"
            },
            "shortName": {
              "am": "MineIDI",
              "en": "MineIDI"
            },
            "description": {
              "am": "የማዕድን ኢንዱስትሪ ልማት ኢንስቲትዩት",
              "en": "Mining Industry Development Institute"
            },
            "organizationType": {
              "id": "93f290b5-9516-473c-ba36-ba5c85656d3c",
              "key": "Organization-Type",
              "code": "055",
              "name": {
                "am": "ኢንሰቲትዩት",
                "en": "Institute "
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
                "am": "ኢንሰቲትዩት",
                "en": "Institute "
              }
            },
            "code": "h7obC00273",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": {
              "id": "0917099c-d23b-40b2-9653-a6ae7d7958c0",
              "name": {
                "am": "ማዕድን",
                "en": "Mines   "
              },
              "timestamp": "2023-08-19T09:29:55.46543",
              "description": {
                "am": "ማዕድን\n",
                "en": "Mines   "
              }
            },
            "externalOrganizationCode": "14603",
            "timestamp": "2022-10-17T11:15:42.144924"
          },
          {
            "id": "339ed5d9-e134-45ad-8592-9ac537276b65",
            "name": {
              "am": "Harari Regional State Health Bureau",
              "en": "Harari Regional State Health Bureau"
            },
            "shortName": {
              "am": "HRSHB",
              "en": "HRSHB"
            },
            "description": {
              "am": "Harari Regional State Health Bureau",
              "en": "Harari Regional State Health Bureau"
            },
            "organizationType": {
              "id": "3a18ec22-ac23-4394-b571-0867709a1956",
              "key": "Organization-Type",
              "code": "svckf",
              "name": {
                "am": "Administration",
                "en": "Administration"
              },
              "order": 0,
              "timestamp": "2021-08-23T11:33:33.445887",
              "description": {
                "am": "Administration",
                "en": "Administration"
              }
            },
            "code": "hHe9800285",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": {
              "id": "65f35246-9b3d-4d80-b878-e22cc9eec8ca",
              "name": {
                "am": "Health",
                "en": "Health"
              },
              "timestamp": "2022-06-24T12:31:24.832988",
              "description": {
                "am": "Health",
                "en": "Health"
              }
            },
            "externalOrganizationCode": null,
            "timestamp": "2023-09-23T08:24:57.815088"
          },
          {
            "id": "432275b9-2588-4d55-922d-5d8377d678c2",
            "name": {
              "am": "የመንግስት ግዥና ንብረት ባለስልጣን",
              "en": "Federal Public Procurement and Property Authority "
            },
            "shortName": {
              "am": "FPPA",
              "en": "FPPA"
            },
            "description": {
              "am": "የመንግስት ግዥና ንብረት ባለስልጣን",
              "en": "Federal Public Procurement and Property Authority "
            },
            "organizationType": {
              "id": "eaaaebc3-ea65-4ef7-8603-8861977eb2d1",
              "key": "Organization-Type",
              "code": "ryxlq",
              "name": {
                "am": "Authority",
                "en": "Authority"
              },
              "order": 0,
              "timestamp": "2021-07-13T11:59:56.336819",
              "description": {
                "am": "Authority",
                "en": "Authority"
              }
            },
            "code": "MHS2U",
            "status": "Draft",
            "logo": {
              "file_name": "FPPA logo.png",
              "file_path": "9ed5171b-e559-4d96-a99a-dc952a6df57e.png",
              "file_type": ".png"
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": {
              "fax": {
                "code": "+251",
                "number": ""
              },
              "city": {
                "am": null,
                "en": null
              },
              "zone": {
                "am": null,
                "en": null
              },
              "email": "",
              "mobile": {
                "code": "+251",
                "number": ""
              },
              "postal": "",
              "region": {
                "am": null,
                "en": null
              },
              "district": {
                "am": null,
                "en": null
              },
              "telephone": {
                "code": "+251",
                "number": ""
              },
              "houseNumber": ""
            },
            "organizationSector": {
              "id": "2cec2cda-f0fa-4692-a486-4526642a1086",
              "name": {
                "am": "ጠቅላላ አገልግሎት",
                "en": "General Service"
              },
              "timestamp": "2023-08-19T09:28:29.39931",
              "description": {
                "am": "ጠቅላላ አገልግሎት",
                "en": "General Service"
              }
            },
            "externalOrganizationCode": "11039",
            "timestamp": "2021-07-13T12:04:06.635147"
          },
          {
            "id": "9e59034f-d080-4bfd-8f37-15a6f2effbe3",
            "name": {
              "am": "የፖሊሲ ጥናት ኢንሰቲትዩት",
              "en": "Policy Study Institute "
            },
            "shortName": {
              "am": "PSI",
              "en": "PSI"
            },
            "description": {
              "am": "የፖሊሲ ጥናት ኢንሰቲትዩት",
              "en": "Policy Study Institute "
            },
            "organizationType": {
              "id": "93f290b5-9516-473c-ba36-ba5c85656d3c",
              "key": "Organization-Type",
              "code": "055",
              "name": {
                "am": "ኢንሰቲትዩት",
                "en": "Institute "
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
                "am": "ኢንሰቲትዩት",
                "en": "Institute "
              }
            },
            "code": "DXzI0",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": {
              "fax": {
                "code": "+251",
                "number": ""
              },
              "city": {
                "am": null,
                "en": null
              },
              "zone": {
                "am": null,
                "en": null
              },
              "email": "",
              "mobile": {
                "code": "+251",
                "number": ""
              },
              "postal": "",
              "region": {
                "am": null,
                "en": null
              },
              "district": {
                "am": null,
                "en": null
              },
              "telephone": {
                "code": "+251",
                "number": ""
              },
              "houseNumber": ""
            },
            "organizationSector": {
              "id": "2cec2cda-f0fa-4692-a486-4526642a1086",
              "name": {
                "am": "ጠቅላላ አገልግሎት",
                "en": "General Service"
              },
              "timestamp": "2023-08-19T09:28:29.39931",
              "description": {
                "am": "ጠቅላላ አገልግሎት",
                "en": "General Service"
              }
            },
            "externalOrganizationCode": "11341",
            "timestamp": "2021-08-26T08:34:14.530692"
          },
          {
            "id": "f0c4f602-66d8-47fb-abdb-8dd95a29e509",
            "name": {
              "am": "ኦዳ ቡልቱም  ዩኒቨርሲቲ",
              "en": "Oda Bultum University "
            },
            "shortName": {
              "am": "OBU",
              "en": "OBU"
            },
            "description": {
              "am": "ኦዳ ቡልቱም  ዩኒቨርሲቲ",
              "en": "Oda Bultum University "
            },
            "organizationType": {
              "id": "04c1385a-761b-4570-be88-e8ba1954f45a",
              "key": "Organization-Type",
              "code": "0035",
              "name": {
                "am": "Higher Inistitution",
                "en": "Higher Inistitution",
                "or": null,
                "tg": null
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
      
              }
            },
            "code": "MZL4s",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": {
              "fax": {
                "code": "+251",
                "number": ""
              },
              "city": {
                "am": null,
                "en": null
              },
              "zone": {
                "am": null,
                "en": null
              },
              "email": "",
              "mobile": {
                "code": "+251",
                "number": ""
              },
              "postal": "226",
              "region": {
                "am": null,
                "en": null
              },
              "district": {
                "am": null,
                "en": null
              },
              "telephone": {
                "code": "+251",
                "number": ""
              },
              "houseNumber": ""
            },
            "organizationSector": {
              "id": "3c224171-4702-417f-a76e-b15dc0bf94b2",
              "name": {
                "am": "Education",
                "en": "Education"
              },
              "timestamp": "2022-06-24T12:31:37.866714",
              "description": {
                "am": "Education",
                "en": "Education"
              }
            },
            "externalOrganizationCode": null,
            "timestamp": "2021-08-26T09:15:24.589357"
          },
          {
            "id": "dc3f8f7b-2df3-4dc1-ba99-16b574b840d1",
            "name": {
              "am": "ገዋኔ ግብርና ቴክኒክና ሙያ ትምህርትና ስልጠና ኮሌጅ ",
              "en": "Gewane ATVET College"
            },
            "shortName": {
              "am": "GATVET",
              "en": "GATVET"
            },
            "description": {
              "am": "Gewane ATVET College",
              "en": "Gewane ATVET College"
            },
            "organizationType": {
              "id": "04c1385a-761b-4570-be88-e8ba1954f45a",
              "key": "Organization-Type",
              "code": "0035",
              "name": {
                "am": "Higher Inistitution",
                "en": "Higher Inistitution",
                "or": null,
                "tg": null
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
      
              }
            },
            "code": "u2pal00276",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": {
              "id": "3c224171-4702-417f-a76e-b15dc0bf94b2",
              "name": {
                "am": "Education",
                "en": "Education"
              },
              "timestamp": "2022-06-24T12:31:37.866714",
              "description": {
                "am": "Education",
                "en": "Education"
              }
            },
            "externalOrganizationCode": null,
            "timestamp": "2022-10-17T11:40:46.719891"
          },
          {
            "id": "2ae62c6b-0037-44f2-911a-82b29e6d1f07",
            "name": {
              "am": "አላጌ ግብርና ቴክኒክና ሙያ ትምህርትና ስልጠና ኮሌጅ  ",
              "en": "Alage ATVET college"
            },
            "shortName": {
              "am": "AAC",
              "en": "AAC"
            },
            "description": {
              "am": "Alage ATVET college",
              "en": "Alage ATVET college"
            },
            "organizationType": {
              "id": "04c1385a-761b-4570-be88-e8ba1954f45a",
              "key": "Organization-Type",
              "code": "0035",
              "name": {
                "am": "Higher Inistitution",
                "en": "Higher Inistitution",
                "or": null,
                "tg": null
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
      
              }
            },
            "code": "cDPHq00275",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": {
              "id": "3c224171-4702-417f-a76e-b15dc0bf94b2",
              "name": {
                "am": "Education",
                "en": "Education"
              },
              "timestamp": "2022-06-24T12:31:37.866714",
              "description": {
                "am": "Education",
                "en": "Education"
              }
            },
            "externalOrganizationCode": null,
            "timestamp": "2022-10-17T11:39:04.423587"
          },
          {
            "id": "fb90dcf7-ca90-4ed4-8541-c81cc9be05b4",
            "name": {
              "am": "ለኢትዮጵያ ሀገራዊ ምክክር ኮሚሽን ጽ/ቤት ",
              "en": "Ethiopian National Dialogue Commission"
            },
            "shortName": {
              "am": "ENDC",
              "en": "ENDC"
            },
            "description": {
              "am": "Ethiopian National Dialogue Commission",
              "en": "Ethiopian National Dialogue Commission"
            },
            "organizationType": {
              "id": "cb506b84-ce1a-4d14-b04f-4562c1a2448e",
              "key": "Organization-Type",
              "code": "lontv",
              "name": {
                "am": " Commission",
                "en": " Commission"
              },
              "order": 0,
              "timestamp": "2021-09-16T12:26:40.817191",
              "description": {
                "am": " Commission",
                "en": " Commission"
              }
            },
            "code": "XTYqO00271",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": {
              "id": "22b8d3a5-4861-4bcb-9cac-d4f26cc9d80e",
              "name": {
                "am": "Social",
                "en": "Social"
              },
              "timestamp": "2022-06-24T12:32:27.728597",
              "description": {
                "am": "Social",
                "en": "Social"
              }
            },
            "externalOrganizationCode": "14606",
            "timestamp": "2022-10-17T11:10:04.785165"
          },
          {
            "id": "2103627f-3284-41eb-8afe-cd311ec8164c",
            "name": {
              "am": "የኢትዮጵያ ግብርና ባለስልጣን",
              "en": "Ethiopian Agricultural Authority  "
            },
            "shortName": {
              "am": "EAA",
              "en": "EAA"
            },
            "description": {
              "am": "የኢትዮጵያ ግብርና ባለስልጣን",
              "en": "Ethiopian Agricultural Authority  "
            },
            "organizationType": {
              "id": "eaaaebc3-ea65-4ef7-8603-8861977eb2d1",
              "key": "Organization-Type",
              "code": "ryxlq",
              "name": {
                "am": "Authority",
                "en": "Authority"
              },
              "order": 0,
              "timestamp": "2021-07-13T11:59:56.336819",
              "description": {
                "am": "Authority",
                "en": "Authority"
              }
            },
            "code": "1KQmO",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": {
              "fax": {
                "code": "+251",
                "number": ""
              },
              "city": {
                "am": "አዲስ አበባ",
                "en": "Addis Abeba"
              },
              "zone": {
                "am": "ቂርቆስ ክፍለ ከተማ",
                "en": "Kirkos Sub City"
              },
              "email": "",
              "mobile": {
                "code": "+251",
                "number": ""
              },
              "postal": "31303",
              "region": {
                "am": "አዲስ አበባ",
                "en": "Addis Abeba"
              },
              "district": {
                "am": "10",
                "en": "10"
              },
              "telephone": {
                "code": "+251",
                "number": ""
              },
              "houseNumber": ""
            },
            "organizationSector": {
              "id": "87e0c7d3-b7c4-4f9b-9933-7a94633b0a8f",
              "name": {
                "am": "ግብርና እና ገጠር ልማት",
                "en": "Agriculture and Rural Development"
              },
              "timestamp": "2023-08-19T09:28:40.865568",
              "description": {
                "am": "ግብርና እና ገጠር ልማት",
                "en": "Agriculture and Rural Development"
              }
            },
            "externalOrganizationCode": "13600",
            "timestamp": "2022-06-28T07:05:16.095924"
          },
          {
            "id": "e4479c94-ada0-424c-a5e6-84c8543b46d4",
            "name": {
              "am": "የግብርና ትራንስፎርሜሽን ኢንስቲትዩት",
              "en": "Ethiopian Agricultural Transformation Institute"
            },
            "shortName": {
              "am": "ATI",
              "en": "ATI"
            },
            "description": {
              "am": "የግብርና ትራንስፎርሜሽን ኢንስቲትዩት",
              "en": "Ethiopian Agricultural Transformation Institute\n"
            },
            "organizationType": {
              "id": "93f290b5-9516-473c-ba36-ba5c85656d3c",
              "key": "Organization-Type",
              "code": "055",
              "name": {
                "am": "ኢንሰቲትዩት",
                "en": "Institute "
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
                "am": "ኢንሰቲትዩት",
                "en": "Institute "
              }
            },
            "code": "45fxQ",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": {
              "id": "87e0c7d3-b7c4-4f9b-9933-7a94633b0a8f",
              "name": {
                "am": "ግብርና እና ገጠር ልማት",
                "en": "Agriculture and Rural Development"
              },
              "timestamp": "2023-08-19T09:28:40.865568",
              "description": {
                "am": "ግብርና እና ገጠር ልማት",
                "en": "Agriculture and Rural Development"
              }
            },
            "externalOrganizationCode": "11105",
            "timestamp": "2021-09-16T12:52:51.111911"
          },
          {
            "id": "e8499226-1c4c-478d-bab4-f22b0fb6f158",
            "name": {
              "am": "የትምህርትና ስልጠና ባለስልጣን",
              "en": "FDRE Education and Training Authority"
            },
            "shortName": {
              "am": "FETA",
              "en": "FETA"
            },
            "description": {
              "am": "የትምህርትና ስልጠና ባለስልጣን",
              "en": "FDRE Education and Training Authority"
            },
            "organizationType": {
              "id": "eaaaebc3-ea65-4ef7-8603-8861977eb2d1",
              "key": "Organization-Type",
              "code": "ryxlq",
              "name": {
                "am": "Authority",
                "en": "Authority"
              },
              "order": 0,
              "timestamp": "2021-07-13T11:59:56.336819",
              "description": {
                "am": "Authority",
                "en": "Authority"
              }
            },
            "code": "Cnxec",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": {
              "fax": {
                "code": "+251",
                "number": ""
              },
              "city": {
                "am": "አዲስ አበባ",
                "en": "Addis Ababa"
              },
              "zone": {
                "am": "ጉለሌ",
                "en": "Gulele"
              },
              "email": "",
              "mobile": {
                "code": "+251",
                "number": ""
              },
              "postal": "27424/1000",
              "region": {
                "am": "አዲስ አበባ",
                "en": "Addis Ababa"
              },
              "district": {
                "am": "03",
                "en": "03"
              },
              "telephone": {
                "code": "+251",
                "number": ""
              },
              "houseNumber": ""
            },
            "organizationSector": {
              "id": "3c224171-4702-417f-a76e-b15dc0bf94b2",
              "name": {
                "am": "Education",
                "en": "Education"
              },
              "timestamp": "2022-06-24T12:31:37.866714",
              "description": {
                "am": "Education",
                "en": "Education"
              }
            },
            "externalOrganizationCode": "11225",
            "timestamp": "2021-08-30T10:33:10.851897"
          },
          {
            "id": "ae9f8706-88b0-44d4-ae71-8f8eefaf5a2f",
            "name": {
              "am": "የኢትዮጵያ ኅብረት ሥራ ኮሚሽን ",
              "en": "Ethiopian Cooperative Commission"
            },
            "shortName": {
              "am": "ECC",
              "en": "ECC"
            },
            "description": {
              "am": "የኢትዮጵያ ኅብረት ሥራ ኮሚሽን",
              "en": "Ethiopian Cooperative Commission"
            },
            "organizationType": {
              "id": "cb506b84-ce1a-4d14-b04f-4562c1a2448e",
              "key": "Organization-Type",
              "code": "lontv",
              "name": {
                "am": " Commission",
                "en": " Commission"
              },
              "order": 0,
              "timestamp": "2021-09-16T12:26:40.817191",
              "description": {
                "am": " Commission",
                "en": " Commission"
              }
            },
            "code": "ZW1zF00277",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": {
              "fax": {
                "code": "+251",
                "number": ""
              },
              "city": {
                "am": "addiss ababa",
                "en": "addiss ababa"
              },
              "zone": {
                "am": "qirqos",
                "en": "qirqos"
              },
              "email": "",
              "mobile": {
                "code": "+251",
                "number": ""
              },
              "postal": "",
              "region": {
                "am": "addiss ababa",
                "en": "addiss ababa"
              },
              "district": {
                "am": null,
                "en": null
              },
              "telephone": {
                "code": "+251",
                "number": ""
              },
              "houseNumber": ""
            },
            "organizationSector": {
              "id": "87e0c7d3-b7c4-4f9b-9933-7a94633b0a8f",
              "name": {
                "am": "ግብርና እና ገጠር ልማት",
                "en": "Agriculture and Rural Development"
              },
              "timestamp": "2023-08-19T09:28:40.865568",
              "description": {
                "am": "ግብርና እና ገጠር ልማት",
                "en": "Agriculture and Rural Development"
              }
            },
            "externalOrganizationCode": "11109",
            "timestamp": "2022-10-17T11:47:12.7411"
          },
          {
            "id": "b382f6f7-3995-4408-ae91-a4c41c472453",
            "name": {
              "am": "Madda Walabu University",
              "en": "Madda Walabu University"
            },
            "shortName": {
              "am": "MWU",
              "en": "MWU"
            },
            "description": {
              "am": "Madda Walabu University",
              "en": "Madda Walabu University"
            },
            "organizationType": {
              "id": "04c1385a-761b-4570-be88-e8ba1954f45a",
              "key": "Organization-Type",
              "code": "0035",
              "name": {
                "am": "Higher Inistitution",
                "en": "Higher Inistitution",
                "or": null,
                "tg": null
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
      
              }
            },
            "code": "TdIh2",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": {
              "fax": {
                "code": "+251",
                "number": ""
              },
              "city": {
                "am": "Robe",
                "en": "Robe"
              },
              "zone": {
                "am": "Bale",
                "en": "Bale"
              },
              "email": "",
              "mobile": {
                "code": "+251",
                "number": ""
              },
              "postal": "247",
              "region": {
                "am": "Oromiya",
                "en": "Oromiya"
              },
              "district": {
                "am": "Robe",
                "en": "Robe"
              },
              "telephone": {
                "code": "+251",
                "number": ""
              },
              "houseNumber": ""
            },
            "organizationSector": {
              "id": "3c224171-4702-417f-a76e-b15dc0bf94b2",
              "name": {
                "am": "Education",
                "en": "Education"
              },
              "timestamp": "2022-06-24T12:31:37.866714",
              "description": {
                "am": "Education",
                "en": "Education"
              }
            },
            "externalOrganizationCode": "11234",
            "timestamp": "2021-09-16T13:46:39.579547"
          },
          {
            "id": "a6d12b7f-85f3-494f-a81a-d095ee4c75cb",
            "name": {
              "am": "የኢትዮጵያ ግብርና ምርምር ኢንስቲትዩት",
              "en": "Ethiopian Institute of Agricultural Research"
            },
            "shortName": {
              "am": "EIAR",
              "en": "EIAR"
            },
            "description": {
              "am": "በኢትዮጵያ የግብርና ምርምር ኢንስቲትዩት",
              "en": "Ethiopian Institute of Agricultural Research"
            },
            "organizationType": {
              "id": "93f290b5-9516-473c-ba36-ba5c85656d3c",
              "key": "Organization-Type",
              "code": "055",
              "name": {
                "am": "ኢንሰቲትዩት",
                "en": "Institute "
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
                "am": "ኢንሰቲትዩት",
                "en": "Institute "
              }
            },
            "code": "uQ7kx",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": {
              "fax": {
                "code": "+251",
                "number": "25116461294"
              },
              "city": {
                "am": "አዲስ አበባ",
                "en": "Addis Ababa"
              },
              "zone": {
                "am": "ቦሌ",
                "en": "Bole"
              },
              "email": "dg@eiar.gov.et",
              "mobile": {
                "code": "+251",
                "number": ""
              },
              "postal": "2003",
              "region": {
                "am": "አዲስ አበባ ኢትዮጵያ",
                "en": "Addis Ababa Ethiopia"
              },
              "district": {
                "am": null,
                "en": null
              },
              "telephone": {
                "code": "+251",
                "number": "25101116462633"
              },
              "houseNumber": ""
            },
            "organizationSector": {
              "id": "87e0c7d3-b7c4-4f9b-9933-7a94633b0a8f",
              "name": {
                "am": "ግብርና እና ገጠር ልማት",
                "en": "Agriculture and Rural Development"
              },
              "timestamp": "2023-08-19T09:28:40.865568",
              "description": {
                "am": "ግብርና እና ገጠር ልማት",
                "en": "Agriculture and Rural Development"
              }
            },
            "externalOrganizationCode": "11106",
            "timestamp": "2021-09-16T13:11:50.556498"
          },
          {
            "id": "0d14a072-58b8-4d17-96e0-9e78dcf7935e",
            "name": {
              "am": "የምግብና መድሀኒት ባለስልጣን",
              "en": "Ethiopian Food and Drug Authority"
            },
            "shortName": {
              "am": "EFDA",
              "en": "EFDA"
            },
            "description": {
              "am": "የምግብና መድሀኒት ባለስልጣን",
              "en": "Ethiopian Food and Drug Authority"
            },
            "organizationType": {
              "id": "eaaaebc3-ea65-4ef7-8603-8861977eb2d1",
              "key": "Organization-Type",
              "code": "ryxlq",
              "name": {
                "am": "Authority",
                "en": "Authority"
              },
              "order": 0,
              "timestamp": "2021-07-13T11:59:56.336819",
              "description": {
                "am": "Authority",
                "en": "Authority"
              }
            },
            "code": "7kV9Q",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": {
              "fax": {
                "code": "+251",
                "number": ""
              },
              "city": {
                "am": null,
                "en": null
              },
              "zone": {
                "am": null,
                "en": null
              },
              "email": "",
              "mobile": {
                "code": "+251",
                "number": ""
              },
              "postal": "",
              "region": {
                "am": null,
                "en": null
              },
              "district": {
                "am": null,
                "en": null
              },
              "telephone": {
                "code": "+251",
                "number": ""
              },
              "houseNumber": ""
            },
            "organizationSector": {
              "id": "65f35246-9b3d-4d80-b878-e22cc9eec8ca",
              "name": {
                "am": "Health",
                "en": "Health"
              },
              "timestamp": "2022-06-24T12:31:24.832988",
              "description": {
                "am": "Health",
                "en": "Health"
              }
            },
            "externalOrganizationCode": "11271",
            "timestamp": "2021-08-25T13:16:45.231427"
          },
          {
            "id": "5c59e930-f458-4260-9ba3-044dc13b4751",
            "name": {
              "am": "የመስኖና ቆላማ አካባቢ ሚኒስቴር",
              "en": "Ministry of Irrigation & Lowlands "
            },
            "shortName": {
              "am": "MILL",
              "en": "MILL"
            },
            "description": {
              "am": "የመስኖና ቆላማ አካባቢ ሚኒስቴር",
              "en": "Ministry of Irrigation & Lowlands "
            },
            "organizationType": {
              "id": "a79bcd65-39d1-4ce2-b360-99ab20b2ba32",
              "key": "Organization-Type",
              "code": "09",
              "name": {
                "am": "Ministry",
                "en": "Ministry"
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
                "am": "",
                "en": ""
              }
            },
            "code": "Z6Czx",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": {
              "fax": {
                "code": "+251",
                "number": ""
              },
              "city": {
                "am": null,
                "en": null
              },
              "zone": {
                "am": null,
                "en": null
              },
              "email": "",
              "mobile": {
                "code": "+251",
                "number": ""
              },
              "postal": "",
              "region": {
                "am": "አዲስ አበባ",
                "en": "Addis Ababa"
              },
              "district": {
                "am": null,
                "en": null
              },
              "telephone": {
                "code": "+251",
                "number": ""
              },
              "houseNumber": ""
            },
            "organizationSector": {
              "id": "fc9fa7cc-8371-4617-b3a5-06deabb525b6",
              "name": {
                "am": "ውሃ ሀብትና ኢነርጂ",
                "en": "Water Resources and Energy"
              },
              "timestamp": "2023-08-19T09:29:09.415465",
              "description": {
                "am": "ውሃ ሀብትና ኢነርጂ",
                "en": "Water Resources and Energy"
              }
            },
            "externalOrganizationCode": "13954",
            "timestamp": "2022-06-28T07:14:15.292137"
          },
          {
            "id": "f1e98246-80b6-40bd-bb45-f8e76aee21c1",
            "name": {
              "am": "የቡናና ሻይ ባለስልጣን",
              "en": "Ethiopian Coffee and Tea Authority"
            },
            "shortName": {
              "am": "ECTA",
              "en": "ECTA"
            },
            "description": {
              "am": "የቡናና ሻይ ባለስልጣን",
              "en": "Ethiopian Coffee and Tea Authority"
            },
            "organizationType": {
              "id": "eaaaebc3-ea65-4ef7-8603-8861977eb2d1",
              "key": "Organization-Type",
              "code": "ryxlq",
              "name": {
                "am": "Authority",
                "en": "Authority"
              },
              "order": 0,
              "timestamp": "2021-07-13T11:59:56.336819",
              "description": {
                "am": "Authority",
                "en": "Authority"
              }
            },
            "code": "FOcMY",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": {
              "fax": {
                "code": "+251",
                "number": ""
              },
              "city": {
                "am": null,
                "en": null
              },
              "zone": {
                "am": null,
                "en": null
              },
              "email": "",
              "mobile": {
                "code": "+251",
                "number": ""
              },
              "postal": "",
              "region": {
                "am": "አዲስ አበባ",
                "en": null
              },
              "district": {
                "am": null,
                "en": null
              },
              "telephone": {
                "code": "+251",
                "number": ""
              },
              "houseNumber": ""
            },
            "organizationSector": {
              "id": "87e0c7d3-b7c4-4f9b-9933-7a94633b0a8f",
              "name": {
                "am": "ግብርና እና ገጠር ልማት",
                "en": "Agriculture and Rural Development"
              },
              "timestamp": "2023-08-19T09:28:40.865568",
              "description": {
                "am": "ግብርና እና ገጠር ልማት",
                "en": "Agriculture and Rural Development"
              }
            },
            "externalOrganizationCode": "11164",
            "timestamp": "2021-08-12T08:20:06.67582"
          },
          {
            "id": "8154a152-58de-457e-b9b3-a59e7442a75f",
            "name": {
              "am": "Public Enterprises Holdings Administration",
              "en": "Public Enterprises Holdings Administration"
            },
            "shortName": {
              "am": "PEHA",
              "en": "PEHA"
            },
            "description": {
              "am": "Public Enterprises Holdings Administration",
              "en": "Public Enterprises Holdings Administration"
            },
            "organizationType": {
              "id": "3a18ec22-ac23-4394-b571-0867709a1956",
              "key": "Organization-Type",
              "code": "svckf",
              "name": {
                "am": "Administration",
                "en": "Administration"
              },
              "order": 0,
              "timestamp": "2021-08-23T11:33:33.445887",
              "description": {
                "am": "Administration",
                "en": "Administration"
              }
            },
            "code": "rV9QN",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": {
              "fax": {
                "code": "+251",
                "number": "0116619734"
              },
              "city": {
                "am": "አዲስ አበባ ",
                "en": "Addis Ababa"
              },
              "zone": {
                "am": "ቦሌ",
                "en": "Bole"
              },
              "email": "info@peha.gov.et",
              "mobile": {
                "code": "+251",
                "number": ""
              },
              "postal": "27444",
              "region": {
                "am": "አዲስ አበባ ",
                "en": "Addis Ababa"
              },
              "district": {
                "am": "5",
                "en": "5"
              },
              "telephone": {
                "code": "+251",
                "number": ""
              },
              "houseNumber": "New"
            },
            "organizationSector": {
              "id": "6921c8fd-f6a9-49d6-bc0a-4d3ef0b8c547",
              "name": {
                "am": "ንግድ እና ኢንዱስትሪ",
                "en": "Trade and Industry"
              },
              "timestamp": "2023-08-19T09:29:25.803321",
              "description": {
                "am": "ንግድ እና ኢንዱስትሪ",
                "en": "Trade and Industry"
              }
            },
            "externalOrganizationCode": "11138",
            "timestamp": "2022-08-15T13:04:46.101958"
          },
          {
            "id": "ae66bacc-70a8-4184-a3cd-8730224e6212",
            "name": {
              "am": "Mekelle University",
              "en": "Mekelle University"
            },
            "shortName": {
              "am": "MU",
              "en": "MU"
            },
            "description": {
              "am": "Mekelle University",
              "en": "Mekelle University"
            },
            "organizationType": {
              "id": "04c1385a-761b-4570-be88-e8ba1954f45a",
              "key": "Organization-Type",
              "code": "0035",
              "name": {
                "am": "Higher Inistitution",
                "en": "Higher Inistitution",
                "or": null,
                "tg": null
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
      
              }
            },
            "code": "orNqT",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": {
              "id": "3c224171-4702-417f-a76e-b15dc0bf94b2",
              "name": {
                "am": "Education",
                "en": "Education"
              },
              "timestamp": "2022-06-24T12:31:37.866714",
              "description": {
                "am": "Education",
                "en": "Education"
              }
            },
            "externalOrganizationCode": "11218",
            "timestamp": "2021-09-16T13:45:51.116673"
          },
          {
            "id": "8261bda3-b8b4-49b3-b624-b6b5125664db",
            "name": {
              "am": "የፌዴራል ቴክኒክና ሙያ ትምህርትና ሥልጠና ኢንስቲትዩት",
              "en": "Federal Technical and Vocational Education and Training Institute "
            },
            "shortName": {
              "am": "FTVETI",
              "en": "FTVETI"
            },
            "description": {
              "am": "የፌዴራል ቴክኒክና ሙያ ትምህርትና ሥልጠና ኢንስቲትዩት",
              "en": "Federal Technical and Vocational Education and Training Institute "
            },
            "organizationType": {
              "id": "93f290b5-9516-473c-ba36-ba5c85656d3c",
              "key": "Organization-Type",
              "code": "055",
              "name": {
                "am": "ኢንሰቲትዩት",
                "en": "Institute "
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
                "am": "ኢንሰቲትዩት",
                "en": "Institute "
              }
            },
            "code": "ec3uw",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": true,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": {
              "fax": {
                "code": "+251",
                "number": "011 646 56 75/78"
              },
              "city": {
                "am": "Addis Ababa ",
                "en": "Addis Ababa "
              },
              "zone": {
                "am": "Yeka",
                "en": "Yeka"
              },
              "email": "info@ftveti.edu.et",
              "mobile": {
                "code": "+251",
                "number": ""
              },
              "postal": "190310",
              "region": {
                "am": "Addis Ababa ",
                "en": "Addis Ababa "
              },
              "district": {
                "am": "9",
                "en": "9"
              },
              "telephone": {
                "code": "+251",
                "number": ""
              },
              "houseNumber": ""
            },
            "organizationSector": {
              "id": "3c224171-4702-417f-a76e-b15dc0bf94b2",
              "name": {
                "am": "Education",
                "en": "Education"
              },
              "timestamp": "2022-06-24T12:31:37.866714",
              "description": {
                "am": "Education",
                "en": "Education"
              }
            },
            "externalOrganizationCode": "11338",
            "timestamp": "2021-09-16T13:30:00.662118"
          },
          {
            "id": "a6e503dd-08f5-49b6-9527-f56e487f9706",
            "name": {
              "am": "አቤት ሆስፒታል",
              "en": "SPMMC_Addis Abeba Burn Emergency Troma"
            },
            "shortName": {
              "am": "AaBET",
              "en": "AaBET"
            },
            "description": {
              "am": "SPMMC_Addis Abeba Burn Emergency Troma",
              "en": "SPMMC_Addis Abeba Burn Emergency Troma"
            },
            "organizationType": {
              "id": "573b544a-434d-4c1f-beb4-b1de4d7f1be5",
              "key": "Organization-Type",
              "code": "jtlkj",
              "name": {
                "am": "Center",
                "en": "Center"
              },
              "order": 0,
              "timestamp": "2021-09-16T12:28:39.942465",
              "description": {
                "am": "Center",
                "en": "Center"
              }
            },
            "code": "H8tqi00279",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": {
              "id": "65f35246-9b3d-4d80-b878-e22cc9eec8ca",
              "name": {
                "am": "Health",
                "en": "Health"
              },
              "timestamp": "2022-06-24T12:31:24.832988",
              "description": {
                "am": "Health",
                "en": "Health"
              }
            },
            "externalOrganizationCode": null,
            "timestamp": "2022-10-17T13:25:37.785913"
          },
          {
            "id": "65a9ac6a-7db1-405f-8662-b759d2694e04",
            "name": {
              "am": "Harari Regional State Education Bureau",
              "en": "Harari Regional State Education Bureau"
            },
            "shortName": {
              "am": "HRSEB",
              "en": "HRSEB"
            },
            "description": {
              "am": "Harari Regional State Education Bureau",
              "en": "Harari Regional State Education Bureau"
            },
            "organizationType": {
              "id": "3a18ec22-ac23-4394-b571-0867709a1956",
              "key": "Organization-Type",
              "code": "svckf",
              "name": {
                "am": "Administration",
                "en": "Administration"
              },
              "order": 0,
              "timestamp": "2021-08-23T11:33:33.445887",
              "description": {
                "am": "Administration",
                "en": "Administration"
              }
            },
            "code": "sQo2w00286",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": {
              "id": "3c224171-4702-417f-a76e-b15dc0bf94b2",
              "name": {
                "am": "Education",
                "en": "Education"
              },
              "timestamp": "2022-06-24T12:31:37.866714",
              "description": {
                "am": "Education",
                "en": "Education"
              }
            },
            "externalOrganizationCode": null,
            "timestamp": "2023-09-23T08:27:22.781416"
          },
          {
            "id": "8001ba67-22cd-4546-b448-42791c134cab",
            "name": {
              "am": "የኢትዮጵያ ሚቲዎሮሎጂ ኢንስቲትዩት",
              "en": "Ethiopian Meteorological Institute"
            },
            "shortName": {
              "am": "NMIEn",
              "en": "NMIEn"
            },
            "description": {
              "am": "የኢትዮጵያ ሚቲዎሮሎጂ ኢንስቲትዩት",
              "en": "Ethiopian Meteorological Institute"
            },
            "organizationType": {
              "id": "93f290b5-9516-473c-ba36-ba5c85656d3c",
              "key": "Organization-Type",
              "code": "055",
              "name": {
                "am": "ኢንሰቲትዩት",
                "en": "Institute "
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
                "am": "ኢንሰቲትዩት",
                "en": "Institute "
              }
            },
            "code": "T6jl2",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": false,
            "isLocked": false,
            "isDeleted": true,
            "deleteRemark": "Duplications of PE name",
            "deactivateRemark": "f",
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": {
              "id": "22b8d3a5-4861-4bcb-9cac-d4f26cc9d80e",
              "name": {
                "am": "Social",
                "en": "Social"
              },
              "timestamp": "2022-06-24T12:32:27.728597",
              "description": {
                "am": "Social",
                "en": "Social"
              }
            },
            "externalOrganizationCode": null,
            "timestamp": "2021-09-16T13:49:00.988787"
          },
          {
            "id": "e26f30f0-bdc2-4021-9781-e31923a75787",
            "name": {
              "am": "Harari Regional State Road and Transport Bureau",
              "en": "Harari Regional State Road and Transport Bureau"
            },
            "shortName": {
              "am": "HRSRTB",
              "en": "HRSRTB"
            },
            "description": {
              "am": "Harari Regional State Road and Transport Bureau",
              "en": "Harari Regional State Road and Transport Bureau"
            },
            "organizationType": {
              "id": "3a18ec22-ac23-4394-b571-0867709a1956",
              "key": "Organization-Type",
              "code": "svckf",
              "name": {
                "am": "Administration",
                "en": "Administration"
              },
              "order": 0,
              "timestamp": "2021-08-23T11:33:33.445887",
              "description": {
                "am": "Administration",
                "en": "Administration"
              }
            },
            "code": "AbVcf00287",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": {
              "id": "92c5683e-77c7-4177-aedf-f201a8649a8a",
              "name": {
                "am": "ትራንስፖርት እና መገናኛ",
                "en": "Transport and Communication"
              },
              "timestamp": "2023-08-19T09:30:10.492956",
              "description": {
                "am": "ትራንስፖርት እና መገናኛ",
                "en": "Transport and Communication"
              }
            },
            "externalOrganizationCode": null,
            "timestamp": "2023-09-23T08:29:44.607937"
          },
          {
            "id": "13017666-036f-4e5e-a7c9-b0279039f0b6",
            "name": {
              "am": "Ambo University",
              "en": "Ambo University"
            },
            "shortName": {
              "am": "AU",
              "en": "AU"
            },
            "description": {
              "am": "Ambo University\n",
              "en": "Ambo University\n"
            },
            "organizationType": {
              "id": "04c1385a-761b-4570-be88-e8ba1954f45a",
              "key": "Organization-Type",
              "code": "0035",
              "name": {
                "am": "Higher Inistitution",
                "en": "Higher Inistitution",
                "or": null,
                "tg": null
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
      
              }
            },
            "code": "s9lP1",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": {
              "fax": {
                "code": "+251",
                "number": ""
              },
              "city": {
                "am": "Ambo",
                "en": "Ambo"
              },
              "zone": {
                "am": "Ambo",
                "en": "Ambo"
              },
              "email": "",
              "mobile": {
                "code": "+251",
                "number": ""
              },
              "postal": "19",
              "region": {
                "am": "Oromia",
                "en": "Oromia"
              },
              "district": {
                "am": "Hora Hayetu",
                "en": "Hora Hayetu"
              },
              "telephone": {
                "code": "+251",
                "number": ""
              },
              "houseNumber": ""
            },
            "organizationSector": null,
            "externalOrganizationCode": null,
            "timestamp": "2021-09-16T12:55:33.465572"
          },
          {
            "id": "ca09482b-1ab6-477f-8189-14a6c43648c6",
            "name": {
              "am": "Harari Regional State Agricultural and Resource Bureau",
              "en": "Harari Regional State Agricultural and Resource Bureau"
            },
            "shortName": {
              "am": "HRSARB",
              "en": "HRSARB"
            },
            "description": {
              "am": "Harari Regional State Agricultural and Resource Bureau",
              "en": "Harari Regional State Agricultural and Resource Bureau"
            },
            "organizationType": {
              "id": "3a18ec22-ac23-4394-b571-0867709a1956",
              "key": "Organization-Type",
              "code": "svckf",
              "name": {
                "am": "Administration",
                "en": "Administration"
              },
              "order": 0,
              "timestamp": "2021-08-23T11:33:33.445887",
              "description": {
                "am": "Administration",
                "en": "Administration"
              }
            },
            "code": "68nWo00295",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": {
              "id": "87e0c7d3-b7c4-4f9b-9933-7a94633b0a8f",
              "name": {
                "am": "ግብርና እና ገጠር ልማት",
                "en": "Agriculture and Rural Development"
              },
              "timestamp": "2023-08-19T09:28:40.865568",
              "description": {
                "am": "ግብርና እና ገጠር ልማት",
                "en": "Agriculture and Rural Development"
              }
            },
            "externalOrganizationCode": null,
            "timestamp": "2023-09-25T06:59:36.994755"
          },
          {
            "id": "201d0b3a-07d2-46b5-a2c4-e0a6ffd2463b",
            "name": {
              "am": "የኢትዮጵያ  አደጋ ስጋት አመራር ኮሚሽን",
              "en": "Ethiopian Disaster Risk Management Commission"
            },
            "shortName": {
              "am": "DRMC",
              "en": "DRMC"
            },
            "description": {
              "am": " የኢትዮጵያ የአደጋ ስጋት አመራር ኮሚሽን",
              "en": "Ethiopia Disaster Risk Management Commission"
            },
            "organizationType": {
              "id": "4c2c2ef8-1c8c-40e2-82b1-2b07e10f82f0",
              "key": "Organization-Type",
              "code": "32323",
              "name": {
                "am": "Government Organization",
                "en": "Government Organization",
                "or": null,
                "tg": null
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
                "am": "-",
                "en": "-",
                "or": null,
                "tg": null
              }
            },
            "code": "VfDYn",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": {
              "fax": {
                "code": "+251",
                "number": "0114424974"
              },
              "city": {
                "am": "አዲስ አበባ",
                "en": "Nifasilk Lafto"
              },
              "zone": {
                "am": "ንፋስ ስልክ ላፍቶ",
                "en": "Nifasilk Lafto"
              },
              "email": "",
              "mobile": {
                "code": "+251",
                "number": ""
              },
              "postal": "5686",
              "region": {
                "am": "አዲስ አበባ",
                "en": "Addis Abeba"
              },
              "district": {
                "am": null,
                "en": null
              },
              "telephone": {
                "code": "+251",
                "number": ""
              },
              "houseNumber": ""
            },
            "organizationSector": {
              "id": "3884a5cd-955a-4b12-bc2c-8be9f82624c4",
              "name": {
                "am": "አደጋ መከላከል",
                "en": "Disaster Risk Management "
              },
              "timestamp": "2023-08-19T09:32:58.132194",
              "description": {
                "am": "አደጋ መከላከል",
                "en": "Disaster Risk Management "
              }
            },
            "externalOrganizationCode": "11353",
            "timestamp": "2021-08-25T05:54:09.805718"
          },
          {
            "id": "d3b45e28-3417-4efb-be40-d26f80cf2c2d",
            "name": {
              "am": "የፌዴራል መንግሥት ሕንጻዎች ግንባታ ፕሮጀክት ጽ/ቤት",
              "en": " Federal Government Buildings Construction Project Office"
            },
            "shortName": {
              "am": "BCPO",
              "en": "BCPO"
            },
            "description": {
              "am": "የፌዴራል መንግሥት ሕንጻዎች ግንባታ ፕሮጀክት ጽ/ቤት",
              "en": " Federal Government Buildings Construction Project Office"
            },
            "organizationType": {
              "id": "4c2c2ef8-1c8c-40e2-82b1-2b07e10f82f0",
              "key": "Organization-Type",
              "code": "32323",
              "name": {
                "am": "Government Organization",
                "en": "Government Organization",
                "or": null,
                "tg": null
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
                "am": "-",
                "en": "-",
                "or": null,
                "tg": null
              }
            },
            "code": "Qp97q00282",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": {
              "id": "3192fc10-11c7-44fe-b7ee-8f9aa869f44b",
              "name": {
                "am": "የከተማ ልማት እና ኮንስትራክሽን",
                "en": "Urban development and construction"
              },
              "timestamp": "2023-08-19T09:30:32.659427",
              "description": {
                "am": "የከተማ ልማት እና ኮንስትራክሽን",
                "en": "Urban development and construction"
              }
            },
            "externalOrganizationCode": null,
            "timestamp": "2023-08-03T05:53:36.239059"
          },
          {
            "id": "a3f9e003-b34f-41be-92f0-9dbc20028a6d",
            "name": {
              "am": "የኢትዮጵያ ጂኦሎጂካል ኢንስቲትዩት",
              "en": "Geological Institute of Ethiopia"
            },
            "shortName": {
              "am": "GSE",
              "en": "GSE"
            },
            "description": {
              "am": "የኢትዮጵያ ጂኦሎጂካል ኢንስቲትዩት",
              "en": "Geological Institute of Ethiopia\n"
            },
            "organizationType": {
              "id": "4c2c2ef8-1c8c-40e2-82b1-2b07e10f82f0",
              "key": "Organization-Type",
              "code": "32323",
              "name": {
                "am": "Government Organization",
                "en": "Government Organization",
                "or": null,
                "tg": null
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
                "am": "-",
                "en": "-",
                "or": null,
                "tg": null
              }
            },
            "code": "QX608",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": {
              "fax": {
                "code": "+251",
                "number": ""
              },
              "city": {
                "am": null,
                "en": null
              },
              "zone": {
                "am": null,
                "en": null
              },
              "email": "",
              "mobile": {
                "code": "+251",
                "number": ""
              },
              "postal": "",
              "region": {
                "am": null,
                "en": null
              },
              "district": {
                "am": null,
                "en": null
              },
              "telephone": {
                "code": "+251",
                "number": ""
              },
              "houseNumber": ""
            },
            "organizationSector": {
              "id": "0917099c-d23b-40b2-9653-a6ae7d7958c0",
              "name": {
                "am": "ማዕድን",
                "en": "Mines   "
              },
              "timestamp": "2023-08-19T09:29:55.46543",
              "description": {
                "am": "ማዕድን\n",
                "en": "Mines   "
              }
            },
            "externalOrganizationCode": "11143",
            "timestamp": "2021-08-25T07:03:33.945275"
          },
          {
            "id": "7ad460ee-706e-4c61-9334-54c750d63734",
            "name": {
              "am": "Animal Health Institute ",
              "en": "Animal Health Institute "
            },
            "shortName": {
              "am": "AHI",
              "en": "AHI"
            },
            "description": {
              "am": "Animal Health Institute ",
              "en": "Animal Health Institute "
            },
            "organizationType": {
              "id": "93f290b5-9516-473c-ba36-ba5c85656d3c",
              "key": "Organization-Type",
              "code": "055",
              "name": {
                "am": "ኢንሰቲትዩት",
                "en": "Institute "
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
                "am": "ኢንሰቲትዩት",
                "en": "Institute "
              }
            },
            "code": "ysC7R00281",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": {
              "fax": {
                "code": "+251",
                "number": ""
              },
              "city": {
                "am": "ሰበታ",
                "en": "Sebeta"
              },
              "zone": {
                "am": "ሸገር ሲቲ",
                "en": "Shagar City"
              },
              "email": "director@ahi.gov.et",
              "mobile": {
                "code": "+251",
                "number": ""
              },
              "postal": "04",
              "region": {
                "am": "ኦሮሚያ",
                "en": "Oromia"
              },
              "district": {
                "am": "ሜታ",
                "en": "meta"
              },
              "telephone": {
                "code": "+251",
                "number": ""
              },
              "houseNumber": ""
            },
            "organizationSector": {
              "id": "87e0c7d3-b7c4-4f9b-9933-7a94633b0a8f",
              "name": {
                "am": "ግብርና እና ገጠር ልማት",
                "en": "Agriculture and Rural Development"
              },
              "timestamp": "2023-08-19T09:28:40.865568",
              "description": {
                "am": "ግብርና እና ገጠር ልማት",
                "en": "Agriculture and Rural Development"
              }
            },
            "externalOrganizationCode": "14604",
            "timestamp": "2023-07-14T06:17:17.901748"
          },
          {
            "id": "ab51bc45-debf-4b8b-81a5-02b94773f980",
            "name": {
              "am": "የንግድና ቀጠናዊ ትስስር ሚኒስቴር",
              "en": "Ministry of Trade and Regional Integration"
            },
            "shortName": {
              "am": "MoTRI",
              "en": "MoTRI"
            },
            "description": {
              "am": "የንግድና ቀጠናዊ ትስስር ሚኒስቴር",
              "en": "Ministry of Trade and Regional Integration "
            },
            "organizationType": {
              "id": "a79bcd65-39d1-4ce2-b360-99ab20b2ba32",
              "key": "Organization-Type",
              "code": "09",
              "name": {
                "am": "Ministry",
                "en": "Ministry"
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
                "am": "",
                "en": ""
              }
            },
            "code": "KV9Gk",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": {
              "fax": {
                "code": "+251",
                "number": ""
              },
              "city": {
                "am": null,
                "en": null
              },
              "zone": {
                "am": null,
                "en": null
              },
              "email": "",
              "mobile": {
                "code": "+251",
                "number": ""
              },
              "postal": "",
              "region": {
                "am": null,
                "en": null
              },
              "district": {
                "am": null,
                "en": null
              },
              "telephone": {
                "code": "+251",
                "number": ""
              },
              "houseNumber": ""
            },
            "organizationSector": {
              "id": "6921c8fd-f6a9-49d6-bc0a-4d3ef0b8c547",
              "name": {
                "am": "ንግድ እና ኢንዱስትሪ",
                "en": "Trade and Industry"
              },
              "timestamp": "2023-08-19T09:29:25.803321",
              "description": {
                "am": "ንግድ እና ኢንዱስትሪ",
                "en": "Trade and Industry"
              }
            },
            "externalOrganizationCode": "11130",
            "timestamp": "2021-09-16T13:43:48.079014"
          },
          {
            "id": "aa745343-20c7-4864-8eee-c2434fb4881a",
            "name": {
              "am": "የኢትዮጵያ ደረጃዎች ኢንስቲትዩት",
              "en": "Institute of Ethiopian Standards"
            },
            "shortName": {
              "am": "IES",
              "en": "IES"
            },
            "description": {
              "am": "የኢትዮጵያ ደረጃዎች ኢንስቲትዩት",
              "en": "Institute of Ethiopian Standards"
            },
            "organizationType": {
              "id": "93f290b5-9516-473c-ba36-ba5c85656d3c",
              "key": "Organization-Type",
              "code": "055",
              "name": {
                "am": "ኢንሰቲትዩት",
                "en": "Institute "
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
                "am": "ኢንሰቲትዩት",
                "en": "Institute "
              }
            },
            "code": "u6HVx",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": {
              "fax": {
                "code": "+251",
                "number": ""
              },
              "city": {
                "am": null,
                "en": null
              },
              "zone": {
                "am": null,
                "en": null
              },
              "email": "",
              "mobile": {
                "code": "+251",
                "number": ""
              },
              "postal": "",
              "region": {
                "am": null,
                "en": null
              },
              "district": {
                "am": null,
                "en": null
              },
              "telephone": {
                "code": "+251",
                "number": ""
              },
              "houseNumber": ""
            },
            "organizationSector": {
              "id": "6921c8fd-f6a9-49d6-bc0a-4d3ef0b8c547",
              "name": {
                "am": "ንግድ እና ኢንዱስትሪ",
                "en": "Trade and Industry"
              },
              "timestamp": "2023-08-19T09:29:25.803321",
              "description": {
                "am": "ንግድ እና ኢንዱስትሪ",
                "en": "Trade and Industry"
              }
            },
            "externalOrganizationCode": "11135",
            "timestamp": "2021-08-25T06:26:41.776583"
          },
          {
            "id": "ff5402dd-9a75-44d3-9190-95863579b85e",
            "name": {
              "am": "የፌዴራል የመጀመሪያ ደረጃ ፍርድ ቤት",
              "en": "Federal First Instance Court"
            },
            "shortName": {
              "am": "FFIC",
              "en": "FFIC"
            },
            "description": {
              "am": "የፌዴራል የመጀመሪያ ደረጃ ፍርድ ቤት",
              "en": "Federal First Instance Court"
            },
            "organizationType": {
              "id": "4c2c2ef8-1c8c-40e2-82b1-2b07e10f82f0",
              "key": "Organization-Type",
              "code": "32323",
              "name": {
                "am": "Government Organization",
                "en": "Government Organization",
                "or": null,
                "tg": null
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
                "am": "-",
                "en": "-",
                "or": null,
                "tg": null
              }
            },
            "code": "wr6hS",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": {
              "fax": {
                "code": "+251",
                "number": ""
              },
              "city": {
                "am": null,
                "en": null
              },
              "zone": {
                "am": null,
                "en": null
              },
              "email": "",
              "mobile": {
                "code": "+251",
                "number": ""
              },
              "postal": "",
              "region": {
                "am": null,
                "en": null
              },
              "district": {
                "am": null,
                "en": null
              },
              "telephone": {
                "code": "+251",
                "number": ""
              },
              "houseNumber": ""
            },
            "organizationSector": {
              "id": "0fc7ab4e-deab-49ae-9117-731ec0c5450c",
              "name": {
                "am": "ፍትህ እና ደህንነት",
                "en": "Justice and security"
              },
              "timestamp": "2023-08-19T09:27:30.520502",
              "description": {
                "am": "ፍትህ እና ደህንነት",
                "en": "Justice and security"
              }
            },
            "externalOrganizationCode": "11014",
            "timestamp": "2021-09-16T13:21:00.734237"
          },
          {
            "id": "f904f69f-bac1-4912-8e46-3c0041baeb41",
            "name": {
              "am": "Artificial Intelligence Institute",
              "en": "Artificial Intelligence Institute"
            },
            "shortName": {
              "am": "AII",
              "en": "AII"
            },
            "description": {
              "am": "Artificial Intelligence Institute",
              "en": "Artificial Intelligence Institute"
            },
            "organizationType": {
              "id": "573b544a-434d-4c1f-beb4-b1de4d7f1be5",
              "key": "Organization-Type",
              "code": "jtlkj",
              "name": {
                "am": "Center",
                "en": "Center"
              },
              "order": 0,
              "timestamp": "2021-09-16T12:28:39.942465",
              "description": {
                "am": "Center",
                "en": "Center"
              }
            },
            "code": "WmRTF",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": {
              "fax": {
                "code": "+251",
                "number": ""
              },
              "city": {
                "am": null,
                "en": null
              },
              "zone": {
                "am": null,
                "en": null
              },
              "email": "",
              "mobile": {
                "code": "+251",
                "number": ""
              },
              "postal": "",
              "region": {
                "am": null,
                "en": null
              },
              "district": {
                "am": null,
                "en": null
              },
              "telephone": {
                "code": "+251",
                "number": ""
              },
              "houseNumber": ""
            },
            "organizationSector": {
              "id": "0fc7ab4e-deab-49ae-9117-731ec0c5450c",
              "name": {
                "am": "ፍትህ እና ደህንነት",
                "en": "Justice and security"
              },
              "timestamp": "2023-08-19T09:27:30.520502",
              "description": {
                "am": "ፍትህ እና ደህንነት",
                "en": "Justice and security"
              }
            },
            "externalOrganizationCode": "14104",
            "timestamp": "2021-09-21T12:18:32.823819"
          },
          {
            "id": "5c8a59a3-7c0d-4131-8422-8edd91c16768",
            "name": {
              "am": "የቅርስ ጥበቃ ባለስልጣን",
              "en": " Ethiopian Heritage Authority"
            },
            "shortName": {
              "am": "EHA",
              "en": "EHA"
            },
            "description": {
              "am": "የቅርስ ጥበቃ ባለስልጣን",
              "en": "\nEthiopian Heritage Authority\n\n"
            },
            "organizationType": {
              "id": "eaaaebc3-ea65-4ef7-8603-8861977eb2d1",
              "key": "Organization-Type",
              "code": "ryxlq",
              "name": {
                "am": "Authority",
                "en": "Authority"
              },
              "order": 0,
              "timestamp": "2021-07-13T11:59:56.336819",
              "description": {
                "am": "Authority",
                "en": "Authority"
              }
            },
            "code": "J9xrd",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": {
              "fax": {
                "code": "+251",
                "number": ""
              },
              "city": {
                "am": null,
                "en": null
              },
              "zone": {
                "am": null,
                "en": null
              },
              "email": "",
              "mobile": {
                "code": "+251",
                "number": ""
              },
              "postal": "",
              "region": {
                "am": "ጀጀ",
                "en": null
              },
              "district": {
                "am": null,
                "en": null
              },
              "telephone": {
                "code": "+251",
                "number": ""
              },
              "houseNumber": ""
            },
            "organizationSector": {
              "id": "de36e074-9440-4545-bf21-914eca5c067d",
              "name": {
                "am": "ባህና ስፖርት",
                "en": "Culture and sports"
              },
              "timestamp": "2023-08-19T09:31:07.684819",
              "description": {
                "am": "ባህና ስፖርት",
                "en": "Culture and sports"
              }
            },
            "externalOrganizationCode": "11265",
            "timestamp": "2021-08-24T13:22:49.45357"
          },
          {
            "id": "022ef48b-a44f-42ff-8313-5a436442d7ca",
            "name": {
              "am": "Oromia Regional Roads and Logistics Bureau",
              "en": "Oromia Regional Roads and Logistics Bureau"
            },
            "shortName": {
              "am": "ORRLB",
              "en": "ORRLB"
            },
            "description": {
              "am": "Oromia Regional Roads and Logistics Bureau",
              "en": "Oromia Regional Roads and Logistics Bureau"
            },
            "organizationType": {
              "id": "3a18ec22-ac23-4394-b571-0867709a1956",
              "key": "Organization-Type",
              "code": "svckf",
              "name": {
                "am": "Administration",
                "en": "Administration"
              },
              "order": 0,
              "timestamp": "2021-08-23T11:33:33.445887",
              "description": {
                "am": "Administration",
                "en": "Administration"
              }
            },
            "code": "Gy1tO00293",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": {
              "id": "92c5683e-77c7-4177-aedf-f201a8649a8a",
              "name": {
                "am": "ትራንስፖርት እና መገናኛ",
                "en": "Transport and Communication"
              },
              "timestamp": "2023-08-19T09:30:10.492956",
              "description": {
                "am": "ትራንስፖርት እና መገናኛ",
                "en": "Transport and Communication"
              }
            },
            "externalOrganizationCode": null,
            "timestamp": "2023-09-25T06:28:52.667606"
          },
          {
            "id": "216e759c-17c3-41cf-89f1-ba6f89ed42d1",
            "name": {
              "am": "የኢንዱስትሪ ሚኒስቴር",
              "en": "Ministry of Industry"
            },
            "shortName": {
              "am": "MoI",
              "en": "MoI"
            },
            "description": {
              "am": "የኢንዱስትሪ ሚኒስቴር",
              "en": "Ministry of Industry"
            },
            "organizationType": {
              "id": "a79bcd65-39d1-4ce2-b360-99ab20b2ba32",
              "key": "Organization-Type",
              "code": "09",
              "name": {
                "am": "Ministry",
                "en": "Ministry"
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
                "am": "",
                "en": ""
              }
            },
            "code": "9hCWm",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": {
              "fax": {
                "code": "+251",
                "number": ""
              },
              "city": {
                "am": null,
                "en": null
              },
              "zone": {
                "am": null,
                "en": null
              },
              "email": "",
              "mobile": {
                "code": "+251",
                "number": ""
              },
              "postal": "",
              "region": {
                "am": null,
                "en": null
              },
              "district": {
                "am": null,
                "en": null
              },
              "telephone": {
                "code": "+251",
                "number": ""
              },
              "houseNumber": ""
            },
            "organizationSector": {
              "id": "6921c8fd-f6a9-49d6-bc0a-4d3ef0b8c547",
              "name": {
                "am": "ንግድ እና ኢንዱስትሪ",
                "en": "Trade and Industry"
              },
              "timestamp": "2023-08-19T09:29:25.803321",
              "description": {
                "am": "ንግድ እና ኢንዱስትሪ",
                "en": "Trade and Industry"
              }
            },
            "externalOrganizationCode": "14597",
            "timestamp": "2022-06-28T08:53:18.342661"
          },
          {
            "id": "d4019675-dfd5-4ffe-bd13-bb8f70aae0cc",
            "name": {
              "am": "Arsi University",
              "en": "Arsi University"
            },
            "shortName": {
              "am": "ARU",
              "en": "ARU"
            },
            "description": {
              "am": "Arsi University",
              "en": "Arsi University"
            },
            "organizationType": {
              "id": "04c1385a-761b-4570-be88-e8ba1954f45a",
              "key": "Organization-Type",
              "code": "0035",
              "name": {
                "am": "Higher Inistitution",
                "en": "Higher Inistitution",
                "or": null,
                "tg": null
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
      
              }
            },
            "code": "OB4i1",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": {
              "fax": {
                "code": "+251",
                "number": ""
              },
              "city": {
                "am": "አሰላ",
                "en": "Asella"
              },
              "zone": {
                "am": "አሰላ",
                "en": "Asella"
              },
              "email": "arsiun@arsiun.edu.et",
              "mobile": {
                "code": "+251",
                "number": ""
              },
              "postal": "193",
              "region": {
                "am": "Oromia",
                "en": "Oromia"
              },
              "district": {
                "am": "Tiyo",
                "en": "Tiyo"
              },
              "telephone": {
                "code": "+251",
                "number": ""
              },
              "houseNumber": ""
            },
            "organizationSector": {
              "id": "3c224171-4702-417f-a76e-b15dc0bf94b2",
              "name": {
                "am": "Education",
                "en": "Education"
              },
              "timestamp": "2022-06-24T12:31:37.866714",
              "description": {
                "am": "Education",
                "en": "Education"
              }
            },
            "externalOrganizationCode": "13089",
            "timestamp": "2021-09-16T14:06:56.02407"
          },
          {
            "id": "05ca5294-dc3f-4939-a6fb-905ffe2dd77c",
            "name": {
              "am": "አርባምንጭ ዩኒቨርሲቲ",
              "en": "Arbaminch University "
            },
            "shortName": {
              "am": "AmU",
              "en": "AmU"
            },
            "description": {
              "am": "አርባምንጭ ዩኒቨርሲቲ",
              "en": "Arbaminch University "
            },
            "organizationType": {
              "id": "04c1385a-761b-4570-be88-e8ba1954f45a",
              "key": "Organization-Type",
              "code": "0035",
              "name": {
                "am": "Higher Inistitution",
                "en": "Higher Inistitution",
                "or": null,
                "tg": null
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
      
              }
            },
            "code": "2Nuvb",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": {
              "fax": {
                "code": "+251",
                "number": ""
              },
              "city": {
                "am": "አርባ ምንጭ",
                "en": "Arba Minch"
              },
              "zone": {
                "am": "ጋሞ",
                "en": "Gammo"
              },
              "email": "",
              "mobile": {
                "code": "+251",
                "number": ""
              },
              "postal": "21",
              "region": {
                "am": "ደቡብ ኢትዮጵያ ክልል",
                "en": "South Ethiopia Region"
              },
              "district": {
                "am": null,
                "en": null
              },
              "telephone": {
                "code": "+251",
                "number": ""
              },
              "houseNumber": ""
            },
            "organizationSector": {
              "id": "3c224171-4702-417f-a76e-b15dc0bf94b2",
              "name": {
                "am": "Education",
                "en": "Education"
              },
              "timestamp": "2022-06-24T12:31:37.866714",
              "description": {
                "am": "Education",
                "en": "Education"
              }
            },
            "externalOrganizationCode": null,
            "timestamp": "2021-08-24T10:48:15.521129"
          },
          {
            "id": "b34acd0e-229d-43e0-b88f-0239e91973bb",
            "name": {
              "am": "NATIONAL ELECTION BOARD OF ETHIOPIA",
              "en": "NATIONAL ELECTION BOARD OF ETHIOPIA"
            },
            "shortName": {
              "am": "NEBE",
              "en": "NEBE"
            },
            "description": {
              "am": "NATIONAL ELECTION BOARD OF ETHIOPIA",
              "en": "NATIONAL ELECTION BOARD OF ETHIOPIA"
            },
            "organizationType": {
              "id": "4c2c2ef8-1c8c-40e2-82b1-2b07e10f82f0",
              "key": "Organization-Type",
              "code": "32323",
              "name": {
                "am": "Government Organization",
                "en": "Government Organization",
                "or": null,
                "tg": null
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
                "am": "-",
                "en": "-",
                "or": null,
                "tg": null
              }
            },
            "code": "b5N4j",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": true,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": "s",
            "taxIdentificationNumber": null,
            "address": {
              "fax": {
                "code": "+251",
                "number": ""
              },
              "city": {
                "am": null,
                "en": null
              },
              "zone": {
                "am": null,
                "en": null
              },
              "email": "contact@nebe.org.et",
              "mobile": {
                "code": "+251",
                "number": ""
              },
              "postal": "",
              "region": {
                "am": "Addis Ababa",
                "en": "Addis Ababa"
              },
              "district": {
                "am": "Africa Avenue near Flamingo Restaurant",
                "en": null
              },
              "telephone": {
                "code": "+251",
                "number": ""
              },
              "houseNumber": ""
            },
            "organizationSector": {
              "id": "53a63473-9f24-4ca8-a694-9404c4933d47",
              "name": {
                "am": "የህግ አውጪና አስፈፃሚ አካላት",
                "en": "Legislative and Executive Bodies"
              },
              "timestamp": "2023-08-19T09:26:54.441101",
              "description": {
                "am": "Legislative and Executive Bodies",
                "en": "Legislative and Executive Bodies"
              }
            },
            "externalOrganizationCode": "11008",
            "timestamp": "2021-08-24T08:38:47.769703"
          },
          {
            "id": "c3089196-1d00-49c7-abe3-92ff18164a59",
            "name": {
              "am": "አዳማ ሳይንስና ቴክኖሎጂ ዩኒቨርሲቲ",
              "en": "Adama Science and Technology University"
            },
            "shortName": {
              "am": "ASTU",
              "en": "ASTU"
            },
            "description": {
              "am": "አዳማ ሳይንስና ቴክኖሎጂ ዩኒቨርሲቲ\n",
              "en": "Adama Science and Technology University\n"
            },
            "organizationType": {
              "id": "04c1385a-761b-4570-be88-e8ba1954f45a",
              "key": "Organization-Type",
              "code": "0035",
              "name": {
                "am": "Higher Inistitution",
                "en": "Higher Inistitution",
                "or": null,
                "tg": null
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
      
              }
            },
            "code": "U5YHe",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": {
              "fax": {
                "code": "+251",
                "number": ""
              },
              "city": {
                "am": null,
                "en": null
              },
              "zone": {
                "am": null,
                "en": null
              },
              "email": "",
              "mobile": {
                "code": "+251",
                "number": ""
              },
              "postal": "",
              "region": {
                "am": null,
                "en": null
              },
              "district": {
                "am": null,
                "en": null
              },
              "telephone": {
                "code": "+251",
                "number": ""
              },
              "houseNumber": ""
            },
            "organizationSector": {
              "id": "3c224171-4702-417f-a76e-b15dc0bf94b2",
              "name": {
                "am": "Education",
                "en": "Education"
              },
              "timestamp": "2022-06-24T12:31:37.866714",
              "description": {
                "am": "Education",
                "en": "Education"
              }
            },
            "externalOrganizationCode": "11223",
            "timestamp": "2021-09-16T12:52:16.144576"
          },
          {
            "id": "07446130-278c-46f6-88b5-f3a6c81372f3",
            "name": {
              "am": "ደብረ ብርሃን ዩኒቨርሰቲ ",
              "en": "Debre Birhan University"
            },
            "shortName": {
              "am": "DBU",
              "en": "DBU"
            },
            "description": {
              "am": "ደብረ ብርሃን ዩኒቨርሰቲ \n",
              "en": "Debre Birhan University\n"
            },
            "organizationType": {
              "id": "04c1385a-761b-4570-be88-e8ba1954f45a",
              "key": "Organization-Type",
              "code": "0035",
              "name": {
                "am": "Higher Inistitution",
                "en": "Higher Inistitution",
                "or": null,
                "tg": null
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
      
              }
            },
            "code": "VJlZ1",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": {
              "fax": {
                "code": "+251",
                "number": "1116812065"
              },
              "city": {
                "am": "ደብረ ብርሃን",
                "en": "Debre Berhan"
              },
              "zone": {
                "am": "ሰሜን ሸዋ",
                "en": "North Shewa"
              },
              "email": "president@dbu.edu.et",
              "mobile": {
                "code": "+251",
                "number": ""
              },
              "postal": "445",
              "region": {
                "am": "አማራ",
                "en": "Amhara"
              },
              "district": {
                "am": "ደብረ ብርሃን / ጠባሴ",
                "en": "Debre Berhan / Tebessie"
              },
              "telephone": {
                "code": "+251",
                "number": ""
              },
              "houseNumber": ""
            },
            "organizationSector": {
              "id": "3c224171-4702-417f-a76e-b15dc0bf94b2",
              "name": {
                "am": "Education",
                "en": "Education"
              },
              "timestamp": "2022-06-24T12:31:37.866714",
              "description": {
                "am": "Education",
                "en": "Education"
              }
            },
            "externalOrganizationCode": "11235",
            "timestamp": "2021-08-24T14:09:06.369497"
          },
          {
            "id": "87407215-d856-41d9-bae5-1571dff5c16c",
            "name": {
              "am": "Harari Reginal State Finance Bureau",
              "en": "Harari Reginal State Finance Bureau"
            },
            "shortName": {
              "am": "HRSFB",
              "en": "HRSFB"
            },
            "description": {
              "am": "Harari Reginal State Finance Bureau",
              "en": "Harari Reginal State Finance Bureau"
            },
            "organizationType": {
              "id": "3a18ec22-ac23-4394-b571-0867709a1956",
              "key": "Organization-Type",
              "code": "svckf",
              "name": {
                "am": "Administration",
                "en": "Administration"
              },
              "order": 0,
              "timestamp": "2021-08-23T11:33:33.445887",
              "description": {
                "am": "Administration",
                "en": "Administration"
              }
            },
            "code": "JStUh00284",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": {
              "fax": {
                "code": "+251",
                "number": ""
              },
              "city": {
                "am": "ሀረር",
                "en": "Harar"
              },
              "zone": {
                "am": null,
                "en": null
              },
              "email": "",
              "mobile": {
                "code": "+251",
                "number": ""
              },
              "postal": "",
              "region": {
                "am": "የሀረሪ ህዝብ ክልላዊ መንግስት",
                "en": "Harari People Regional State"
              },
              "district": {
                "am": null,
                "en": null
              },
              "telephone": {
                "code": "+251",
                "number": ""
              },
              "houseNumber": ""
            },
            "organizationSector": {
              "id": "1ed15352-c17b-4f3a-97a5-ec23c32e38df",
              "name": {
                "am": "Economy ",
                "en": "Economy "
              },
              "timestamp": "2022-06-24T12:32:13.56549",
              "description": {
                "am": "Economy ",
                "en": "Economy "
              }
            },
            "externalOrganizationCode": null,
            "timestamp": "2023-09-23T08:20:19.682081"
          },
          {
            "id": "b36cddb9-c779-4013-bbc3-f15c397ff34b",
            "name": {
              "am": "Federal Judicial Administration Council secretariat",
              "en": "Federal Judicial Administration Council secretariat"
            },
            "shortName": {
              "am": "FJACS",
              "en": "FJACS"
            },
            "description": {
              "am": "Federal Judicial Administration Council secretariat",
              "en": "Federal Judicial Administration Council secretariat"
            },
            "organizationType": {
              "id": "d12cea68-656c-45f7-b847-2863ea1980b3",
              "key": "Organization-Type",
              "code": "igy50",
              "name": {
                "am": "Office",
                "en": "Office"
              },
              "order": 0,
              "timestamp": "2021-09-16T12:30:09.689483",
              "description": {
                "am": "Office",
                "en": "Office"
              }
            },
            "code": "Tb4Xg",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": {
              "fax": {
                "code": "+251",
                "number": "111733029"
              },
              "city": {
                "am": null,
                "en": null
              },
              "zone": {
                "am": null,
                "en": null
              },
              "email": "fjacouncil@gmail.com",
              "mobile": {
                "code": "+251",
                "number": ""
              },
              "postal": "",
              "region": {
                "am": null,
                "en": null
              },
              "district": {
                "am": null,
                "en": null
              },
              "telephone": {
                "code": "+251",
                "number": ""
              },
              "houseNumber": ""
            },
            "organizationSector": {
              "id": "0fc7ab4e-deab-49ae-9117-731ec0c5450c",
              "name": {
                "am": "ፍትህ እና ደህንነት",
                "en": "Justice and security"
              },
              "timestamp": "2023-08-19T09:27:30.520502",
              "description": {
                "am": "ፍትህ እና ደህንነት",
                "en": "Justice and security"
              }
            },
            "externalOrganizationCode": "11016",
            "timestamp": "2021-09-16T13:23:31.262024"
          },
          {
            "id": "f295819a-0e12-4d15-8b43-30b7b9b0ed9c",
            "name": {
              "am": "ወላይታ ሶዶ  ዩንቨርሲቲ",
              "en": "Wolaita  Sodo University"
            },
            "shortName": {
              "am": "WSU",
              "en": "WSU"
            },
            "description": {
              "am": "ወላይታ ሶዶ  ዩንቨርሲቲ",
              "en": "Wolaita  Sodo University"
            },
            "organizationType": {
              "id": "04c1385a-761b-4570-be88-e8ba1954f45a",
              "key": "Organization-Type",
              "code": "0035",
              "name": {
                "am": "Higher Inistitution",
                "en": "Higher Inistitution",
                "or": null,
                "tg": null
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
      
              }
            },
            "code": "YFsXo",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": {
              "fax": {
                "code": "+251",
                "number": ""
              },
              "city": {
                "am": "Wolaita Sodo",
                "en": "Wolaita Sodo"
              },
              "zone": {
                "am": "Wolaita Sodo",
                "en": "Wolaita Sodo"
              },
              "email": "",
              "mobile": {
                "code": "+251",
                "number": ""
              },
              "postal": "138",
              "region": {
                "am": "South Ethiopia",
                "en": "South Ethiopia"
              },
              "district": {
                "am": "Fana",
                "en": "Fana"
              },
              "telephone": {
                "code": "+251",
                "number": ""
              },
              "houseNumber": ""
            },
            "organizationSector": {
              "id": "3c224171-4702-417f-a76e-b15dc0bf94b2",
              "name": {
                "am": "Education",
                "en": "Education"
              },
              "timestamp": "2022-06-24T12:31:37.866714",
              "description": {
                "am": "Education",
                "en": "Education"
              }
            },
            "externalOrganizationCode": "11231",
            "timestamp": "2021-09-17T06:45:07.656074"
          },
          {
            "id": "d993f571-11ca-4b6b-b9ff-cb0df74b6e4b",
            "name": {
              "am": "የአፍሪካ አመራር ልህቀት አካዳሚ",
              "en": "African Leadership Excellence Academy"
            },
            "shortName": {
              "am": "ALEA",
              "en": "ALEA"
            },
            "description": {
              "am": "የአፍሪካ አመራር ልህቀት አካዳሚ",
              "en": "African Leadership Excellence Academy"
            },
            "organizationType": {
              "id": "4c2c2ef8-1c8c-40e2-82b1-2b07e10f82f0",
              "key": "Organization-Type",
              "code": "32323",
              "name": {
                "am": "Government Organization",
                "en": "Government Organization",
                "or": null,
                "tg": null
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
                "am": "-",
                "en": "-",
                "or": null,
                "tg": null
              }
            },
            "code": "7cLj8",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": {
              "fax": {
                "code": "+251",
                "number": ""
              },
              "city": {
                "am": null,
                "en": null
              },
              "zone": {
                "am": null,
                "en": null
              },
              "email": "",
              "mobile": {
                "code": "+251",
                "number": ""
              },
              "postal": "",
              "region": {
                "am": null,
                "en": null
              },
              "district": {
                "am": null,
                "en": null
              },
              "telephone": {
                "code": "+251",
                "number": ""
              },
              "houseNumber": ""
            },
            "organizationSector": {
              "id": "2cec2cda-f0fa-4692-a486-4526642a1086",
              "name": {
                "am": "ጠቅላላ አገልግሎት",
                "en": "General Service"
              },
              "timestamp": "2023-08-19T09:28:29.39931",
              "description": {
                "am": "ጠቅላላ አገልግሎት",
                "en": "General Service"
              }
            },
            "externalOrganizationCode": "13950",
            "timestamp": "2021-08-24T08:35:26.901955"
          },
          {
            "id": "baf9e416-5102-4b0d-a6af-4df5716c0363",
            "name": {
              "am": "ደምቢ ዶሎ ዩኒቨርሲቲ",
              "en": "Damibi Dollo University\t"
            },
            "shortName": {
              "am": "DaDU\t",
              "en": "DaDU\t"
            },
            "description": {
              "am": "ደምቢ ዶሎ ዩኒቨርሲቲ",
              "en": "Damibi Dollo University\t"
            },
            "organizationType": {
              "id": "04c1385a-761b-4570-be88-e8ba1954f45a",
              "key": "Organization-Type",
              "code": "0035",
              "name": {
                "am": "Higher Inistitution",
                "en": "Higher Inistitution",
                "or": null,
                "tg": null
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
      
              }
            },
            "code": "LPk4R",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": {
              "fax": {
                "code": "+251",
                "number": ""
              },
              "city": {
                "am": "ደንቢ ዶሎ ",
                "en": "Dambi Dollo "
              },
              "zone": {
                "am": "ከለም ወለጋ",
                "en": "Kelem Wollega"
              },
              "email": "dambidollouniversity@dadu.edu.et",
              "mobile": {
                "code": "+251",
                "number": ""
              },
              "postal": "260",
              "region": {
                "am": "ኦሮሚያ",
                "en": "Oromia"
              },
              "district": {
                "am": "ሳዮ",
                "en": "Sayo"
              },
              "telephone": {
                "code": "+251",
                "number": ""
              },
              "houseNumber": ""
            },
            "organizationSector": {
              "id": "3c224171-4702-417f-a76e-b15dc0bf94b2",
              "name": {
                "am": "Education",
                "en": "Education"
              },
              "timestamp": "2022-06-24T12:31:37.866714",
              "description": {
                "am": "Education",
                "en": "Education"
              }
            },
            "externalOrganizationCode": null,
            "timestamp": "2021-08-26T09:10:55.853598"
          },
          {
            "id": "9ccf5abc-eec6-4a8d-9ef2-09756c17b609",
            "name": {
              "am": "Oromia Regional State Agricultural Bureau ",
              "en": "Oromia Regional State Agricultural Bureau "
            },
            "shortName": {
              "am": "ORSAB",
              "en": "ORSAB"
            },
            "description": {
              "am": "Oromia Regional State Agricultural Bureau ",
              "en": "Oromia Regional State Agricultural Bureau "
            },
            "organizationType": {
              "id": "3a18ec22-ac23-4394-b571-0867709a1956",
              "key": "Organization-Type",
              "code": "svckf",
              "name": {
                "am": "Administration",
                "en": "Administration"
              },
              "order": 0,
              "timestamp": "2021-08-23T11:33:33.445887",
              "description": {
                "am": "Administration",
                "en": "Administration"
              }
            },
            "code": "j3QX500323",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": {
              "id": "87e0c7d3-b7c4-4f9b-9933-7a94633b0a8f",
              "name": {
                "am": "ግብርና እና ገጠር ልማት",
                "en": "Agriculture and Rural Development"
              },
              "timestamp": "2023-08-19T09:28:40.865568",
              "description": {
                "am": "ግብርና እና ገጠር ልማት",
                "en": "Agriculture and Rural Development"
              }
            },
            "externalOrganizationCode": null,
            "timestamp": "2023-09-25T10:48:56.694845"
          },
          {
            "id": "f4495d90-f89b-41ac-abd7-b14cbfbbace9",
            "name": {
              "am": "Ethiopian Federal Police",
              "en": "Ethiopian Federal Police"
            },
            "shortName": {
              "am": "EFP",
              "en": "EFP"
            },
            "description": {
              "am": "Ethiopian Federal Police",
              "en": "Ethiopian Federal Police"
            },
            "organizationType": {
              "id": "4c2c2ef8-1c8c-40e2-82b1-2b07e10f82f0",
              "key": "Organization-Type",
              "code": "32323",
              "name": {
                "am": "Government Organization",
                "en": "Government Organization",
                "or": null,
                "tg": null
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
                "am": "-",
                "en": "-",
                "or": null,
                "tg": null
              }
            },
            "code": "jHsbN",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": {
              "fax": {
                "code": "+251",
                "number": ""
              },
              "city": {
                "am": "Addis Ababa",
                "en": "Addis Ababa"
              },
              "zone": {
                "am": "LIDETA K/K",
                "en": "LIDETA K/K"
              },
              "email": "ethiopiafederalpolice@gmail.com",
              "mobile": {
                "code": "+251",
                "number": ""
              },
              "postal": "199",
              "region": {
                "am": "Addis Ababa",
                "en": "Addis Ababa"
              },
              "district": {
                "am": "Woreda 06",
                "en": "Woreda 06"
              },
              "telephone": {
                "code": "+251",
                "number": ""
              },
              "houseNumber": "0000"
            },
            "organizationSector": {
              "id": "0fc7ab4e-deab-49ae-9117-731ec0c5450c",
              "name": {
                "am": "ፍትህ እና ደህንነት",
                "en": "Justice and security"
              },
              "timestamp": "2023-08-19T09:27:30.520502",
              "description": {
                "am": "ፍትህ እና ደህንነት",
                "en": "Justice and security"
              }
            },
            "externalOrganizationCode": "11021",
            "timestamp": "2021-08-24T08:59:31.533827"
          },
          {
            "id": "16f8afd2-6ce4-4152-aa6b-3071105cb018",
            "name": {
              "am": "የህዝብ ተወካዮች ምክር ቤት",
              "en": "Houses of Peoples Representative"
            },
            "shortName": {
              "am": "HoPR",
              "en": "HoPR"
            },
            "description": {
              "am": "የህዝብ ተወካዮች ምክር ቤት",
              "en": "Houses of Peoples Representative"
            },
            "organizationType": {
              "id": "4c2c2ef8-1c8c-40e2-82b1-2b07e10f82f0",
              "key": "Organization-Type",
              "code": "32323",
              "name": {
                "am": "Government Organization",
                "en": "Government Organization",
                "or": null,
                "tg": null
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
                "am": "-",
                "en": "-",
                "or": null,
                "tg": null
              }
            },
            "code": "lZ7Rb",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": {
              "fax": {
                "code": "+251",
                "number": ""
              },
              "city": {
                "am": "አዲስ አበባ",
                "en": "Addis Ababa"
              },
              "zone": {
                "am": "አራዳ",
                "en": "Arada "
              },
              "email": "",
              "mobile": {
                "code": "+251",
                "number": ""
              },
              "postal": "80001",
              "region": {
                "am": "አዲስ አበባ",
                "en": "Addis Ababa"
              },
              "district": {
                "am": null,
                "en": null
              },
              "telephone": {
                "code": "+251",
                "number": ""
              },
              "houseNumber": ""
            },
            "organizationSector": {
              "id": "53a63473-9f24-4ca8-a694-9404c4933d47",
              "name": {
                "am": "የህግ አውጪና አስፈፃሚ አካላት",
                "en": "Legislative and Executive Bodies"
              },
              "timestamp": "2023-08-19T09:26:54.441101",
              "description": {
                "am": "Legislative and Executive Bodies",
                "en": "Legislative and Executive Bodies"
              }
            },
            "externalOrganizationCode": "11001",
            "timestamp": "2021-08-24T08:44:56.911645"
          },
          {
            "id": "8eeb5896-f7dd-48a5-8829-fb3b6a118ab9",
            "name": {
              "am": "የኢትዮጵያ የደን ምርምር",
              "en": "Ethiopian Forestry Development "
            },
            "shortName": {
              "am": "EFD",
              "en": "EFD"
            },
            "description": {
              "am": "የኢትዮጵያ የደን ምርምር",
              "en": "Ethiopian Forestry Development"
            },
            "organizationType": {
              "id": "d12cea68-656c-45f7-b847-2863ea1980b3",
              "key": "Organization-Type",
              "code": "igy50",
              "name": {
                "am": "Office",
                "en": "Office"
              },
              "order": 0,
              "timestamp": "2021-09-16T12:30:09.689483",
              "description": {
                "am": "Office",
                "en": "Office"
              }
            },
            "code": "W8d1X",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": {
              "fax": {
                "code": "+251",
                "number": ""
              },
              "city": {
                "am": "አዲስ አበባ",
                "en": "Addis Ababa"
              },
              "zone": {
                "am": "የካ",
                "en": "Yeka"
              },
              "email": "info.efd2014@gmail.com",
              "mobile": {
                "code": "+251",
                "number": ""
              },
              "postal": "24536 code 1000",
              "region": {
                "am": "አዲስ አበባ",
                "en": "Addis Ababa"
              },
              "district": {
                "am": "09",
                "en": "09"
              },
              "telephone": {
                "code": "+251",
                "number": ""
              },
              "houseNumber": "New"
            },
            "organizationSector": {
              "id": "87e0c7d3-b7c4-4f9b-9933-7a94633b0a8f",
              "name": {
                "am": "ግብርና እና ገጠር ልማት",
                "en": "Agriculture and Rural Development"
              },
              "timestamp": "2023-08-19T09:28:40.865568",
              "description": {
                "am": "ግብርና እና ገጠር ልማት",
                "en": "Agriculture and Rural Development"
              }
            },
            "externalOrganizationCode": "11179",
            "timestamp": "2021-08-24T08:31:46.081718"
          },
          {
            "id": "c4d7b44d-fc8f-4650-aeed-c96d112e1d1b",
            "name": {
              "am": "BONGA UNIVERSITY",
              "en": "BONGA UNIVERSITY"
            },
            "shortName": {
              "am": "BU",
              "en": "BU"
            },
            "description": {
              "am": "BONGA UNIVERSITY\n",
              "en": "BONGA UNIVERSITY\n"
            },
            "organizationType": {
              "id": "04c1385a-761b-4570-be88-e8ba1954f45a",
              "key": "Organization-Type",
              "code": "0035",
              "name": {
                "am": "Higher Inistitution",
                "en": "Higher Inistitution",
                "or": null,
                "tg": null
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
      
              }
            },
            "code": "Xljmt",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": {
              "fax": {
                "code": "+251",
                "number": ""
              },
              "city": {
                "am": "Bonga",
                "en": "Bonga"
              },
              "zone": {
                "am": "Kaffa",
                "en": "Kaffa"
              },
              "email": "info@bongau.edu.et",
              "mobile": {
                "code": "+251",
                "number": ""
              },
              "postal": "334",
              "region": {
                "am": null,
                "en": null
              },
              "district": {
                "am": "Bonga",
                "en": "Bonga"
              },
              "telephone": {
                "code": "+251",
                "number": ""
              },
              "houseNumber": ""
            },
            "organizationSector": {
              "id": "3c224171-4702-417f-a76e-b15dc0bf94b2",
              "name": {
                "am": "Education",
                "en": "Education"
              },
              "timestamp": "2022-06-24T12:31:37.866714",
              "description": {
                "am": "Education",
                "en": "Education"
              }
            },
            "externalOrganizationCode": null,
            "timestamp": "2021-09-16T12:58:37.558176"
          },
          {
            "id": "3ff01ef6-5e4a-4876-8730-2b165e188fa3",
            "name": {
              "am": "የትራንስፖርትና ሎጂስቲክስ ሚኒስቴር",
              "en": "Ministry of Transport and Logistics"
            },
            "shortName": {
              "am": "MoTL",
              "en": "MoTL"
            },
            "description": {
              "am": "የትራንስፖርትና ሎጂስቲክስ ሚኒስቴር\n",
              "en": "Ministry of Transport and Logistics\n"
            },
            "organizationType": {
              "id": "a79bcd65-39d1-4ce2-b360-99ab20b2ba32",
              "key": "Organization-Type",
              "code": "09",
              "name": {
                "am": "ministry",
                "en": "ministry",
                "or": null,
                "tg": null
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
      
              }
            },
            "code": "njCPE",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": {
              "fax": {
                "code": "+251",
                "number": ""
              },
              "city": {
                "am": "አዲስ አበባ ",
                "en": "Addis Ababa "
              },
              "zone": {
                "am": "ልደታ ክፍለ ከተማ",
                "en": "Lideta Subcity "
              },
              "email": "",
              "mobile": {
                "code": "+251",
                "number": ""
              },
              "postal": "1238",
              "region": {
                "am": "አዲስ አበባ ",
                "en": "Addis Ababa "
              },
              "district": {
                "am": "7",
                "en": "7"
              },
              "telephone": {
                "code": "+251",
                "number": "251115518292"
              },
              "houseNumber": ""
            },
            "organizationSector": {
              "id": "92c5683e-77c7-4177-aedf-f201a8649a8a",
              "name": {
                "am": "ትራንስፖርት እና መገናኛ",
                "en": "Transport and Communication"
              },
              "timestamp": "2023-08-19T09:30:10.492956",
              "description": {
                "am": "ትራንስፖርት እና መገናኛ",
                "en": "Transport and Communication"
              }
            },
            "externalOrganizationCode": "11144",
            "timestamp": "2021-08-25T07:14:37.536162"
          },
          {
            "id": "c188a160-8e44-40e0-8725-0d6254db60ae",
            "name": {
              "am": "የኢትዮጵያ ሲቪል አቪይሽን ባለስልጣን",
              "en": "Ethiopian Civil Aviation Authority"
            },
            "shortName": {
              "am": "ECAA",
              "en": "ECAA"
            },
            "description": {
              "am": "የኢትዮጵያ ሲቪል አቪይሽን ባለስልጣን\n",
              "en": "Ethiopian Civil Aviation Authority"
            },
            "organizationType": {
              "id": "eaaaebc3-ea65-4ef7-8603-8861977eb2d1",
              "key": "Organization-Type",
              "code": "ryxlq",
              "name": {
                "am": "Authority",
                "en": "Authority"
              },
              "order": 0,
              "timestamp": "2021-07-13T11:59:56.336819",
              "description": {
                "am": "Authority",
                "en": "Authority"
              }
            },
            "code": "ROL6d",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": {
              "fax": {
                "code": "+251",
                "number": ""
              },
              "city": {
                "am": null,
                "en": null
              },
              "zone": {
                "am": null,
                "en": null
              },
              "email": "",
              "mobile": {
                "code": "+251",
                "number": ""
              },
              "postal": "",
              "region": {
                "am": null,
                "en": null
              },
              "district": {
                "am": null,
                "en": null
              },
              "telephone": {
                "code": "+251",
                "number": ""
              },
              "houseNumber": ""
            },
            "organizationSector": {
              "id": "92c5683e-77c7-4177-aedf-f201a8649a8a",
              "name": {
                "am": "ትራንስፖርት እና መገናኛ",
                "en": "Transport and Communication"
              },
              "timestamp": "2023-08-19T09:30:10.492956",
              "description": {
                "am": "ትራንስፖርት እና መገናኛ",
                "en": "Transport and Communication"
              }
            },
            "externalOrganizationCode": "11147",
            "timestamp": "2021-08-25T06:02:16.281831"
          },
          {
            "id": "a34ba531-4cc0-44b8-8e37-bfac43859ed9",
            "name": {
              "am": "Petroleum and Energy Authority",
              "en": "Petroleum and Energy Authority"
            },
            "shortName": {
              "am": "PEA",
              "en": "PEA"
            },
            "description": {
              "am": "Petroleum and Energy Authority",
              "en": "Petroleum and Energy Authority"
            },
            "organizationType": {
              "id": "eaaaebc3-ea65-4ef7-8603-8861977eb2d1",
              "key": "Organization-Type",
              "code": "ryxlq",
              "name": {
                "am": "Authority",
                "en": "Authority"
              },
              "order": 0,
              "timestamp": "2021-07-13T11:59:56.336819",
              "description": {
                "am": "Authority",
                "en": "Authority"
              }
            },
            "code": "1F4qS",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": {
              "fax": {
                "code": "+251",
                "number": ""
              },
              "city": {
                "am": "አዲስ አበባ",
                "en": "Addis Ababa"
              },
              "zone": {
                "am": "የካ",
                "en": "Yeka"
              },
              "email": "",
              "mobile": {
                "code": "+251",
                "number": ""
              },
              "postal": "",
              "region": {
                "am": "አዲስ አበባ",
                "en": "Addis Ababa"
              },
              "district": {
                "am": null,
                "en": null
              },
              "telephone": {
                "code": "+251",
                "number": ""
              },
              "houseNumber": ""
            },
            "organizationSector": {
              "id": "0917099c-d23b-40b2-9653-a6ae7d7958c0",
              "name": {
                "am": "ማዕድን",
                "en": "Mines   "
              },
              "timestamp": "2023-08-19T09:29:55.46543",
              "description": {
                "am": "ማዕድን\n",
                "en": "Mines   "
              }
            },
            "externalOrganizationCode": "14598",
            "timestamp": "2021-08-12T08:23:00.054886"
          },
          {
            "id": "bba1e149-8096-4dc2-afd9-c234609ff856",
            "name": {
              "am": "Ethiopian Police University",
              "en": "Ethiopian Police University"
            },
            "shortName": {
              "am": "EPU",
              "en": "EPU"
            },
            "description": {
              "am": "Ethiopian Police University",
              "en": "Ethiopian Police University"
            },
            "organizationType": {
              "id": "93f290b5-9516-473c-ba36-ba5c85656d3c",
              "key": "Organization-Type",
              "code": "055",
              "name": {
                "am": "ኢንሰቲትዩት",
                "en": "Institute "
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
                "am": "ኢንሰቲትዩት",
                "en": "Institute "
              }
            },
            "code": "O8Vb000269",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": {
              "fax": {
                "code": "+251",
                "number": "116860420"
              },
              "city": {
                "am": "ሰንዳፋ",
                "en": "Sendafa"
              },
              "zone": {
                "am": "ፍንፍኔ ኦሮሜያ ሊ ዞን",
                "en": "Finfine Oromia Liyu Zone"
              },
              "email": "",
              "mobile": {
                "code": "+251",
                "number": ""
              },
              "postal": "1503",
              "region": {
                "am": "ኦሮሜያ ",
                "en": "Oromia"
              },
              "district": {
                "am": "ብርሔ",
                "en": "bereh"
              },
              "telephone": {
                "code": "+251",
                "number": ""
              },
              "houseNumber": ""
            },
            "organizationSector": {
              "id": "0fc7ab4e-deab-49ae-9117-731ec0c5450c",
              "name": {
                "am": "ፍትህ እና ደህንነት",
                "en": "Justice and security"
              },
              "timestamp": "2023-08-19T09:27:30.520502",
              "description": {
                "am": "ፍትህ እና ደህንነት",
                "en": "Justice and security"
              }
            },
            "externalOrganizationCode": "14487",
            "timestamp": "2022-10-05T07:20:38.386988"
          },
          {
            "id": "0bd33d3c-72fc-4be3-ab3e-d0c5ed641aa8",
            "name": {
              "am": "አዲስ አበባ ሳይንስና ቴክኖሎጂ ዩኒቨርስቲ",
              "en": "Addis Ababa Science and Technology University"
            },
            "shortName": {
              "am": "AASTU",
              "en": "AASTU"
            },
            "description": {
              "am": "አዲስ አበባ ሳይንስና ቴክኖሎጂ ዩኒቨርስቲ",
              "en": "Addis Ababa Science and Technology University"
            },
            "organizationType": {
              "id": "04c1385a-761b-4570-be88-e8ba1954f45a",
              "key": "Organization-Type",
              "code": "0035",
              "name": {
                "am": "Higher Inistitution",
                "en": "Higher Inistitution",
                "or": null,
                "tg": null
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
      
              }
            },
            "code": "XFxbq",
            "status": "Draft",
            "logo": {
              "file_name": "AASTU logo.jpg",
              "file_path": "e07104c9-f811-40bc-8d61-7cf3a62c3c90.jpg",
              "file_type": ".jpg"
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": {
              "fax": {
                "code": "+251",
                "number": ""
              },
              "city": {
                "am": null,
                "en": null
              },
              "zone": {
                "am": null,
                "en": null
              },
              "email": "",
              "mobile": {
                "code": "+251",
                "number": ""
              },
              "postal": "",
              "region": {
                "am": null,
                "en": null
              },
              "district": {
                "am": null,
                "en": null
              },
              "telephone": {
                "code": "+251",
                "number": ""
              },
              "houseNumber": ""
            },
            "organizationSector": {
              "id": "3c224171-4702-417f-a76e-b15dc0bf94b2",
              "name": {
                "am": "Education",
                "en": "Education"
              },
              "timestamp": "2022-06-24T12:31:37.866714",
              "description": {
                "am": "Education",
                "en": "Education"
              }
            },
            "externalOrganizationCode": "11239",
            "timestamp": "2021-07-13T11:54:06.106916"
          },
          {
            "id": "56719cf0-a3a5-4030-9da8-b55c40941097",
            "name": {
              "am": "Debark University",
              "en": "Debark University"
            },
            "shortName": {
              "am": "DKU",
              "en": "DKU"
            },
            "description": {
              "am": "Debark University\n",
              "en": "Debark University"
            },
            "organizationType": {
              "id": "04c1385a-761b-4570-be88-e8ba1954f45a",
              "key": "Organization-Type",
              "code": "0035",
              "name": {
                "am": "Higher Inistitution",
                "en": "Higher Inistitution",
                "or": null,
                "tg": null
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
      
              }
            },
            "code": "zrcIn",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": {
              "fax": {
                "code": "+251",
                "number": ""
              },
              "city": {
                "am": "ደባርቅ",
                "en": "Debark"
              },
              "zone": {
                "am": "ሰ/ጎንደር",
                "en": "N/Gondar"
              },
              "email": "",
              "mobile": {
                "code": "+251",
                "number": ""
              },
              "postal": "",
              "region": {
                "am": "አማራ",
                "en": "Amhara"
              },
              "district": {
                "am": "ደባርቅ",
                "en": "Debark"
              },
              "telephone": {
                "code": "+251",
                "number": ""
              },
              "houseNumber": ""
            },
            "organizationSector": {
              "id": "3c224171-4702-417f-a76e-b15dc0bf94b2",
              "name": {
                "am": "Education",
                "en": "Education"
              },
              "timestamp": "2022-06-24T12:31:37.866714",
              "description": {
                "am": "Education",
                "en": "Education"
              }
            },
            "externalOrganizationCode": null,
            "timestamp": "2021-09-16T13:00:54.220942"
          },
          {
            "id": "de81e55a-c312-43ab-a32c-3ecfa22a524e",
            "name": {
              "am": "የአፍሪካ የሥጋ ደዌ ምርምር",
              "en": "African Leprosy Research Hospital"
            },
            "shortName": {
              "am": "ALERT",
              "en": "ALERT"
            },
            "description": {
              "am": "የአፍሪካ የሥጋ ደዌ ምርምር\n",
              "en": "African Leprosy Research Hospital\n"
            },
            "organizationType": {
              "id": "04c1385a-761b-4570-be88-e8ba1954f45a",
              "key": "Organization-Type",
              "code": "0035",
              "name": {
                "am": "Higher Inistitution",
                "en": "Higher Inistitution",
                "or": null,
                "tg": null
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
      
              }
            },
            "code": "nsYp3",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": true,
            "deleteRemark": "sffs",
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": {
              "id": "65f35246-9b3d-4d80-b878-e22cc9eec8ca",
              "name": {
                "am": "Health",
                "en": "Health"
              },
              "timestamp": "2022-06-24T12:31:24.832988",
              "description": {
                "am": "Health",
                "en": "Health"
              }
            },
            "externalOrganizationCode": "",
            "timestamp": "2021-09-16T12:50:52.81851"
          },
          {
            "id": "3d97bb74-f9ab-49ff-bba1-c6fb0c6a264a",
            "name": {
              "am": "ጎንደር ዩኒቨርሲቲ ",
              "en": "University of Gondar"
            },
            "shortName": {
              "am": "UoG",
              "en": "UoG"
            },
            "description": {
              "am": "ጎንደር ዩኒቨርሲቲ ",
              "en": "University of Gondar"
            },
            "organizationType": {
              "id": "04c1385a-761b-4570-be88-e8ba1954f45a",
              "key": "Organization-Type",
              "code": "0035",
              "name": {
                "am": "Higher Inistitution",
                "en": "Higher Inistitution",
                "or": null,
                "tg": null
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
      
              }
            },
            "code": "wor7X",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": {
              "fax": {
                "code": "+251",
                "number": ""
              },
              "city": {
                "am": "ጎንደር",
                "en": "Gondar"
              },
              "zone": {
                "am": "ማዕካላዊ ጎንደር",
                "en": "Central Gondar"
              },
              "email": "tewodros.abebaw@uog.edu.et",
              "mobile": {
                "code": "+251",
                "number": "251910153087"
              },
              "postal": "196",
              "region": {
                "am": "አማራ",
                "en": "Amahara"
              },
              "district": {
                "am": "ጎንደር",
                "en": "Gondar"
              },
              "telephone": {
                "code": "+251",
                "number": ""
              },
              "houseNumber": ""
            },
            "organizationSector": {
              "id": "3c224171-4702-417f-a76e-b15dc0bf94b2",
              "name": {
                "am": "Education",
                "en": "Education"
              },
              "timestamp": "2022-06-24T12:31:37.866714",
              "description": {
                "am": "Education",
                "en": "Education"
              }
            },
            "externalOrganizationCode": null,
            "timestamp": "2021-08-24T10:44:57.534344"
          },
          {
            "id": "d7bab274-4e6d-45c2-a284-2fea00a7728b",
            "name": {
              "am": "Dummy PE",
              "en": "Dummy PE"
            },
            "shortName": {
              "am": "DummyPE",
              "en": "DummyPE"
            },
            "description": {
              "am": "DummyPE",
              "en": "DummyPE"
            },
            "organizationType": {
              "id": "4c2c2ef8-1c8c-40e2-82b1-2b07e10f82f0",
              "key": "Organization-Type",
              "code": "32323",
              "name": {
                "am": "Government Organization",
                "en": "Government Organization"
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
                "am": "Government Organization",
                "en": "Government Organization"
              }
            },
            "code": "LZqIs00343",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": {
              "id": "fb7130d7-cf7a-459e-92e7-e7358e54bb12",
              "name": {
                "am": "ሌሎች",
                "en": "Others"
              },
              "timestamp": "2023-08-19T09:33:17.521458",
              "description": {
                "am": "ሌሎች",
                "en": "Others"
              }
            },
            "externalOrganizationCode": "2050",
            "timestamp": "2024-02-29T05:23:05.589374"
          },
          {
            "id": "cf5abc2c-f19f-4679-bb7c-ee843217248a",
            "name": {
              "am": "ሳማራ ዩኒቨርሲቲ",
              "en": "Samara University"
            },
            "shortName": {
              "am": "SU",
              "en": "SU"
            },
            "description": {
              "am": "ሳማራ ዩኒቨርሲቲ",
              "en": "Samara University"
            },
            "organizationType": {
              "id": "04c1385a-761b-4570-be88-e8ba1954f45a",
              "key": "Organization-Type",
              "code": "0035",
              "name": {
                "am": "Higher Inistitution",
                "en": "Higher Inistitution",
                "or": null,
                "tg": null
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
      
              }
            },
            "code": "ITsxm",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": {
              "fax": {
                "code": "+251",
                "number": "336660621"
              },
              "city": {
                "am": "semera",
                "en": "semera"
              },
              "zone": {
                "am": "zone one",
                "en": "zone one"
              },
              "email": "psd@su.edu.et",
              "mobile": {
                "code": "+251",
                "number": ""
              },
              "postal": "132",
              "region": {
                "am": "Afar Region",
                "en": "Afar Region"
              },
              "district": {
                "am": "Samara ",
                "en": "Samara"
              },
              "telephone": {
                "code": "+251",
                "number": ""
              },
              "houseNumber": "132"
            },
            "organizationSector": {
              "id": "3c224171-4702-417f-a76e-b15dc0bf94b2",
              "name": {
                "am": "Education",
                "en": "Education"
              },
              "timestamp": "2022-06-24T12:31:37.866714",
              "description": {
                "am": "Education",
                "en": "Education"
              }
            },
            "externalOrganizationCode": "11237",
            "timestamp": "2021-08-30T12:34:31.275653"
          },
          {
            "id": "76a787ba-362a-4d27-b6df-03727c67d45a",
            "name": {
              "am": "Werabe University",
              "en": "Werabe University"
            },
            "shortName": {
              "am": "WRU",
              "en": "WRU"
            },
            "description": {
              "am": "Werabe University",
              "en": "Werabe University"
            },
            "organizationType": {
              "id": "04c1385a-761b-4570-be88-e8ba1954f45a",
              "key": "Organization-Type",
              "code": "0035",
              "name": {
                "am": "Higher Inistitution",
                "en": "Higher Inistitution",
                "or": null,
                "tg": null
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
      
              }
            },
            "code": "RU76y",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": {
              "fax": {
                "code": "+251",
                "number": ""
              },
              "city": {
                "am": "ወራቤ",
                "en": "werabe"
              },
              "zone": {
                "am": "ስልጤ",
                "en": "siltie"
              },
              "email": "",
              "mobile": {
                "code": "+251",
                "number": ""
              },
              "postal": "46",
              "region": {
                "am": "ማዕከላዊ ኢትዮጵያ ክልል",
                "en": "Central Ethiopia Region"
              },
              "district": {
                "am": "ወራቤ",
                "en": "werabe"
              },
              "telephone": {
                "code": "+251",
                "number": ""
              },
              "houseNumber": ""
            },
            "organizationSector": {
              "id": "3c224171-4702-417f-a76e-b15dc0bf94b2",
              "name": {
                "am": "Education",
                "en": "Education"
              },
              "timestamp": "2022-06-24T12:31:37.866714",
              "description": {
                "am": "Education",
                "en": "Education"
              }
            },
            "externalOrganizationCode": null,
            "timestamp": "2021-09-16T14:01:57.139167"
          },
          {
            "id": "d503c961-09dc-4a30-bc6b-7d3cc52bd281",
            "name": {
              "am": "የኢትዮጵያ ሚቲዎሮሎጂ ኢንስቲትዩት",
              "en": "Ethiopian meteorology institute"
            },
            "shortName": {
              "am": "EMI",
              "en": "EMI"
            },
            "description": {
              "am": "የኢትዮጵያ ሚቲዎሮሎጂ ኢንስቲትዩት",
              "en": "Ethiopian meteorology institute"
            },
            "organizationType": {
              "id": "93f290b5-9516-473c-ba36-ba5c85656d3c",
              "key": "Organization-Type",
              "code": "055",
              "name": {
                "am": "ኢንሰቲትዩት",
                "en": "Institute "
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
                "am": "ኢንሰቲትዩት",
                "en": "Institute "
              }
            },
            "code": "42bmw",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": true,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": {
              "fax": {
                "code": "+251",
                "number": ""
              },
              "city": {
                "am": null,
                "en": null
              },
              "zone": {
                "am": null,
                "en": null
              },
              "email": "",
              "mobile": {
                "code": "+251",
                "number": ""
              },
              "postal": "",
              "region": {
                "am": null,
                "en": null
              },
              "district": {
                "am": null,
                "en": null
              },
              "telephone": {
                "code": "+251",
                "number": ""
              },
              "houseNumber": ""
            },
            "organizationSector": {
              "id": "fc9fa7cc-8371-4617-b3a5-06deabb525b6",
              "name": {
                "am": "ውሃ ሀብትና ኢነርጂ",
                "en": "Water Resources and Energy"
              },
              "timestamp": "2023-08-19T09:29:09.415465",
              "description": {
                "am": "ውሃ ሀብትና ኢነርጂ",
                "en": "Water Resources and Energy"
              }
            },
            "externalOrganizationCode": "11176",
            "timestamp": "2022-08-17T06:54:10.821837"
          },
          {
            "id": "8e7b01f3-ea91-49fa-b7fb-d29afad66591",
            "name": {
              "am": "የኢትዮጵያ የማሪታይም ባለስልጣን",
              "en": "Ethiopian Maritime Authority"
            },
            "shortName": {
              "am": "EMAA",
              "en": "EMAA"
            },
            "description": {
              "am": "የኢትዮጵያ የማሪታይም ባለስልጣን\n\n",
              "en": "Ethiopian Maritime Authority\n\n"
            },
            "organizationType": {
              "id": "eaaaebc3-ea65-4ef7-8603-8861977eb2d1",
              "key": "Organization-Type",
              "code": "ryxlq",
              "name": {
                "am": "Authority",
                "en": "Authority"
              },
              "order": 0,
              "timestamp": "2021-07-13T11:59:56.336819",
              "description": {
                "am": "Authority",
                "en": "Authority"
              }
            },
            "code": "oIPQv",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": {
              "fax": {
                "code": "+251",
                "number": ""
              },
              "city": {
                "am": null,
                "en": null
              },
              "zone": {
                "am": null,
                "en": null
              },
              "email": "",
              "mobile": {
                "code": "+251",
                "number": ""
              },
              "postal": "",
              "region": {
                "am": null,
                "en": null
              },
              "district": {
                "am": null,
                "en": null
              },
              "telephone": {
                "code": "+251",
                "number": ""
              },
              "houseNumber": ""
            },
            "organizationSector": {
              "id": "92c5683e-77c7-4177-aedf-f201a8649a8a",
              "name": {
                "am": "ትራንስፖርት እና መገናኛ",
                "en": "Transport and Communication"
              },
              "timestamp": "2023-08-19T09:30:10.492956",
              "description": {
                "am": "ትራንስፖርት እና መገናኛ",
                "en": "Transport and Communication"
              }
            },
            "externalOrganizationCode": "11148",
            "timestamp": "2021-08-25T06:08:01.706243"
          },
          {
            "id": "e86574fd-a784-4d48-9cfc-2af4085ffa88",
            "name": {
              "am": "የቅዱስ ጴጥሮስ ሆስፒታል",
              "en": "St. Peter Specialized Hospital"
            },
            "shortName": {
              "am": "SPSH",
              "en": "SPSH"
            },
            "description": {
              "am": "የቅዱስ ጴጥሮስ ሆስፒታል\n",
              "en": "St. Peter Specialized Hospital\n"
            },
            "organizationType": {
              "id": "4c2c2ef8-1c8c-40e2-82b1-2b07e10f82f0",
              "key": "Organization-Type",
              "code": "32323",
              "name": {
                "am": "Government Organization",
                "en": "Government Organization",
                "or": null,
                "tg": null
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
                "am": "-",
                "en": "-",
                "or": null,
                "tg": null
              }
            },
            "code": "6RyWK",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": {
              "fax": {
                "code": "+251",
                "number": ""
              },
              "city": {
                "am": null,
                "en": null
              },
              "zone": {
                "am": null,
                "en": null
              },
              "email": "",
              "mobile": {
                "code": "+251",
                "number": ""
              },
              "postal": "",
              "region": {
                "am": null,
                "en": null
              },
              "district": {
                "am": null,
                "en": null
              },
              "telephone": {
                "code": "+251",
                "number": ""
              },
              "houseNumber": ""
            },
            "organizationSector": {
              "id": "65f35246-9b3d-4d80-b878-e22cc9eec8ca",
              "name": {
                "am": "Health",
                "en": "Health"
              },
              "timestamp": "2022-06-24T12:31:24.832988",
              "description": {
                "am": "Health",
                "en": "Health"
              }
            },
            "externalOrganizationCode": "13742",
            "timestamp": "2021-08-25T07:37:30.026675"
          },
          {
            "id": "ca7ec865-6bac-46ed-b3b4-eec932cb0456",
            "name": {
              "am": "የታክስ ይግባኝ ኮሚሽን",
              "en": "Federal Tax Appeal Commission "
            },
            "shortName": {
              "am": "FTAC",
              "en": "FTAC"
            },
            "description": {
              "am": "የታክስ ይግባኝ ኮሚሽን",
              "en": "Federal Tax Appeal Commission "
            },
            "organizationType": {
              "id": "cb506b84-ce1a-4d14-b04f-4562c1a2448e",
              "key": "Organization-Type",
              "code": "lontv",
              "name": {
                "am": " Commission",
                "en": " Commission"
              },
              "order": 0,
              "timestamp": "2021-09-16T12:26:40.817191",
              "description": {
                "am": " Commission",
                "en": " Commission"
              }
            },
            "code": "MZR9w",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": {
              "fax": {
                "code": "+251",
                "number": ""
              },
              "city": {
                "am": "አዲስ አበባ",
                "en": "Addis Abeba"
              },
              "zone": {
                "am": "አራዳ",
                "en": "Arada"
              },
              "email": "taxapp33@gmail.com",
              "mobile": {
                "code": "+251",
                "number": ""
              },
              "postal": "",
              "region": {
                "am": null,
                "en": null
              },
              "district": {
                "am": "09",
                "en": "09"
              },
              "telephone": {
                "code": "+251",
                "number": ""
              },
              "houseNumber": ""
            },
            "organizationSector": {
              "id": "0fc7ab4e-deab-49ae-9117-731ec0c5450c",
              "name": {
                "am": "ፍትህ እና ደህንነት",
                "en": "Justice and security"
              },
              "timestamp": "2023-08-19T09:27:30.520502",
              "description": {
                "am": "ፍትህ እና ደህንነት",
                "en": "Justice and security"
              }
            },
            "externalOrganizationCode": "13847",
            "timestamp": "2021-09-16T13:29:03.071493"
          },
          {
            "id": "d8c1ec48-f30d-4cc6-8ad3-41b5f2b4295f",
            "name": {
              "am": "የውሃና ኢነርጂ ሚኒስቴር",
              "en": "Ministry of Water and Energy"
            },
            "shortName": {
              "am": "MoWE",
              "en": "MoWE"
            },
            "description": {
              "am": "የውሃና ኢነርጂ ሚኒስቴር",
              "en": "Ministry of Water and Energy"
            },
            "organizationType": {
              "id": "a79bcd65-39d1-4ce2-b360-99ab20b2ba32",
              "key": "Organization-Type",
              "code": "09",
              "name": {
                "am": "ministry",
                "en": "ministry",
                "or": null,
                "tg": null
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
      
              }
            },
            "code": "r5W4u",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": {
              "fax": {
                "code": "+251",
                "number": ""
              },
              "city": {
                "am": null,
                "en": "Addis Ababa"
              },
              "zone": {
                "am": null,
                "en": "Bole sub city"
              },
              "email": "info@mowe.gov.et",
              "mobile": {
                "code": "+251",
                "number": ""
              },
              "postal": "5744",
              "region": {
                "am": null,
                "en": ""
              },
              "district": {
                "am": "",
                "en": ""
              },
              "telephone": {
                "code": "+251",
                "number": "251116611111"
              },
              "houseNumber": ""
            },
            "organizationSector": {
              "id": "fc9fa7cc-8371-4617-b3a5-06deabb525b6",
              "name": {
                "am": "ውሃ ሀብትና ኢነርጂ",
                "en": "Water Resources and Energy"
              },
              "timestamp": "2023-08-19T09:29:09.415465",
              "description": {
                "am": "ውሃ ሀብትና ኢነርጂ",
                "en": "Water Resources and Energy"
              }
            },
            "externalOrganizationCode": "11112",
            "timestamp": "2021-08-24T10:37:59.101725"
          },
          {
            "id": "fe698004-9f38-45cf-afa3-ae4a21bde3a2",
            "name": {
              "am": "የጠቅላይ ሚኒስቴር ጽ/ቤት",
              "en": "Prime Minister Office"
            },
            "shortName": {
              "am": "PMO",
              "en": "PMO"
            },
            "description": {
              "am": "የጠቅላይ ሚኒስቴር ጽ/ቤት",
              "en": "Prime Minister Office"
            },
            "organizationType": {
              "id": "a79bcd65-39d1-4ce2-b360-99ab20b2ba32",
              "key": "Organization-Type",
              "code": "09",
              "name": {
                "am": "ministry",
                "en": "ministry",
                "or": null,
                "tg": null
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
      
              }
            },
            "code": "X1uNK",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": {
              "fax": {
                "code": "+251",
                "number": ""
              },
              "city": {
                "am": null,
                "en": null
              },
              "zone": {
                "am": null,
                "en": null
              },
              "email": "",
              "mobile": {
                "code": "+251",
                "number": ""
              },
              "postal": "",
              "region": {
                "am": null,
                "en": null
              },
              "district": {
                "am": null,
                "en": null
              },
              "telephone": {
                "code": "+251",
                "number": ""
              },
              "houseNumber": ""
            },
            "organizationSector": {
              "id": "53a63473-9f24-4ca8-a694-9404c4933d47",
              "name": {
                "am": "የህግ አውጪና አስፈፃሚ አካላት",
                "en": "Legislative and Executive Bodies"
              },
              "timestamp": "2023-08-19T09:26:54.441101",
              "description": {
                "am": "Legislative and Executive Bodies",
                "en": "Legislative and Executive Bodies"
              }
            },
            "externalOrganizationCode": "11002",
            "timestamp": "2021-08-24T08:28:31.321657"
          },
          {
            "id": "a506a8cd-04ea-4a02-bd75-759571569f06",
            "name": {
              "am": "Debremarkos University",
              "en": "Debremarkos University"
            },
            "shortName": {
              "am": "DMU",
              "en": "DMU"
            },
            "description": {
              "am": "Debremarkos University\n",
              "en": "Debremarkos University\n"
            },
            "organizationType": {
              "id": "04c1385a-761b-4570-be88-e8ba1954f45a",
              "key": "Organization-Type",
              "code": "0035",
              "name": {
                "am": "Higher Inistitution",
                "en": "Higher Inistitution",
                "or": null,
                "tg": null
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
      
              }
            },
            "code": "zixQK",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": {
              "fax": {
                "code": "+251",
                "number": " 581780026"
              },
              "city": {
                "am": "Debremarkos",
                "en": "Debremarkos"
              },
              "zone": {
                "am": "East Gojjam",
                "en": "East Gojjam"
              },
              "email": "prcd@dmu.edu.et",
              "mobile": {
                "code": "+251",
                "number": ""
              },
              "postal": "269",
              "region": {
                "am": "Amhara",
                "en": "Amhara"
              },
              "district": {
                "am": "Debremarkos",
                "en": "Debremarkos"
              },
              "telephone": {
                "code": "+251",
                "number": ""
              },
              "houseNumber": "+251-58-178-0033"
            },
            "organizationSector": {
              "id": "3c224171-4702-417f-a76e-b15dc0bf94b2",
              "name": {
                "am": "Education",
                "en": "Education"
              },
              "timestamp": "2022-06-24T12:31:37.866714",
              "description": {
                "am": "Education",
                "en": "Education"
              }
            },
            "externalOrganizationCode": "11230",
            "timestamp": "2021-09-16T13:01:30.531354"
          },
          {
            "id": "d5ca7ec9-623d-4a77-bca0-5cdc411c0d1d",
            "name": {
              "am": "የቤተመንግስት አስተዳደር",
              "en": "FDRE Palace Administration"
            },
            "shortName": {
              "am": "PA",
              "en": "PA"
            },
            "description": {
              "am": "የቤተመንግስት አስተዳደር",
              "en": "FDRE Palace Administration"
            },
            "organizationType": {
              "id": "eaaaebc3-ea65-4ef7-8603-8861977eb2d1",
              "key": "Organization-Type",
              "code": "ryxlq",
              "name": {
                "am": "Authority",
                "en": "Authority"
              },
              "order": 0,
              "timestamp": "2021-07-13T11:59:56.336819",
              "description": {
                "am": "Authority",
                "en": "Authority"
              }
            },
            "code": "eh4UG",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": {
              "fax": {
                "code": "+251",
                "number": ""
              },
              "city": {
                "am": null,
                "en": null
              },
              "zone": {
                "am": null,
                "en": null
              },
              "email": "palaceadmin@palace.gov.et",
              "mobile": {
                "code": "+251",
                "number": ""
              },
              "postal": "",
              "region": {
                "am": null,
                "en": null
              },
              "district": {
                "am": null,
                "en": null
              },
              "telephone": {
                "code": "+251",
                "number": ""
              },
              "houseNumber": ""
            },
            "organizationSector": {
              "id": "53a63473-9f24-4ca8-a694-9404c4933d47",
              "name": {
                "am": "የህግ አውጪና አስፈፃሚ አካላት",
                "en": "Legislative and Executive Bodies"
              },
              "timestamp": "2023-08-19T09:26:54.441101",
              "description": {
                "am": "Legislative and Executive Bodies",
                "en": "Legislative and Executive Bodies"
              }
            },
            "externalOrganizationCode": "11007",
            "timestamp": "2021-08-23T11:34:14.267835"
          },
          {
            "id": "88b5626f-9c90-4e79-8ce3-37baa264c2e8",
            "name": {
              "am": "የመንገድ ፈንድ ጽ/ ቤት",
              "en": "Ethiopian Road Fund "
            },
            "shortName": {
              "am": "RF",
              "en": "RF"
            },
            "description": {
              "am": "የመንገድ ፈንድ ጽ/ ቤት",
              "en": "Ethiopian Road Fund "
            },
            "organizationType": {
              "id": "4c2c2ef8-1c8c-40e2-82b1-2b07e10f82f0",
              "key": "Organization-Type",
              "code": "32323",
              "name": {
                "am": "Government Organization",
                "en": "Government Organization",
                "or": null,
                "tg": null
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
                "am": "-",
                "en": "-",
                "or": null,
                "tg": null
              }
            },
            "code": "NHpcm",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": {
              "id": "92c5683e-77c7-4177-aedf-f201a8649a8a",
              "name": {
                "am": "ትራንስፖርት እና መገናኛ",
                "en": "Transport and Communication"
              },
              "timestamp": "2023-08-19T09:30:10.492956",
              "description": {
                "am": "ትራንስፖርት እና መገናኛ",
                "en": "Transport and Communication"
              }
            },
            "externalOrganizationCode": "11160",
            "timestamp": "2021-09-16T13:53:39.19366"
          },
          {
            "id": "11dff56b-2667-4173-b548-98f54f55ed05",
            "name": {
              "am": "Gambella Regional State Educational Bureau",
              "en": "Gambella Regional State Educational Bureau"
            },
            "shortName": {
              "am": "GRSEB",
              "en": "GRSEB"
            },
            "description": {
              "am": "Gambella Regional State Educational Bureau",
              "en": "Gambella Regional State Educational Bureau"
            },
            "organizationType": {
              "id": "3a18ec22-ac23-4394-b571-0867709a1956",
              "key": "Organization-Type",
              "code": "svckf",
              "name": {
                "am": "Administration",
                "en": "Administration"
              },
              "order": 0,
              "timestamp": "2021-08-23T11:33:33.445887",
              "description": {
                "am": "Administration",
                "en": "Administration"
              }
            },
            "code": "3mUxP00294",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": {
              "id": "3c224171-4702-417f-a76e-b15dc0bf94b2",
              "name": {
                "am": "Education",
                "en": "Education"
              },
              "timestamp": "2022-06-24T12:31:37.866714",
              "description": {
                "am": "Education",
                "en": "Education"
              }
            },
            "externalOrganizationCode": null,
            "timestamp": "2023-09-25T06:56:56.556867"
          },
          {
            "id": "05e5bf16-f2af-4186-b05b-9e898f0c6829",
            "name": {
              "am": "Oromia Regional State Finance Bureau",
              "en": "Oromia Regional State Finance Bureau"
            },
            "shortName": {
              "am": "ORSFB",
              "en": "ORSFB"
            },
            "description": {
              "am": "Oromia Regional State Finance Bureau",
              "en": "Oromia Regional State Finance Bureau"
            },
            "organizationType": {
              "id": "3a18ec22-ac23-4394-b571-0867709a1956",
              "key": "Organization-Type",
              "code": "svckf",
              "name": {
                "am": "Administration",
                "en": "Administration"
              },
              "order": 0,
              "timestamp": "2021-08-23T11:33:33.445887",
              "description": {
                "am": "Administration",
                "en": "Administration"
              }
            },
            "code": "fGKTZ00297",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": {
              "id": "1ed15352-c17b-4f3a-97a5-ec23c32e38df",
              "name": {
                "am": "Economy ",
                "en": "Economy "
              },
              "timestamp": "2022-06-24T12:32:13.56549",
              "description": {
                "am": "Economy ",
                "en": "Economy "
              }
            },
            "externalOrganizationCode": null,
            "timestamp": "2023-09-25T07:27:20.10258"
          },
          {
            "id": "4724a8ff-61e8-4777-9c3a-3e30b256aa34",
            "name": {
              "am": "መቅደላአምባ ዩንቨርሲቲ",
              "en": "Mekidelamba University\t"
            },
            "shortName": {
              "am": "MAU\t",
              "en": "MAU\t"
            },
            "description": {
              "am": "መቅደላአምባ ዩንቨርሲቲ",
              "en": "Mekidelamba University"
            },
            "organizationType": {
              "id": "04c1385a-761b-4570-be88-e8ba1954f45a",
              "key": "Organization-Type",
              "code": "0035",
              "name": {
                "am": "Higher Inistitution",
                "en": "Higher Inistitution",
                "or": null,
                "tg": null
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
      
              }
            },
            "code": "hrRYj",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": {
              "fax": {
                "code": "+251",
                "number": ""
              },
              "city": {
                "am": "ቱሉአውሊያ",
                "en": "TULUAWLIA"
              },
              "zone": {
                "am": "ደቡብ ወሎ",
                "en": "SOUTH WOLLO"
              },
              "email": "",
              "mobile": {
                "code": "+251",
                "number": ""
              },
              "postal": "",
              "region": {
                "am": "አማራ",
                "en": "AMHARA"
              },
              "district": {
                "am": "ለጋምቦ",
                "en": "LEGAMBO"
              },
              "telephone": {
                "code": "+251",
                "number": ""
              },
              "houseNumber": ""
            },
            "organizationSector": {
              "id": "3c224171-4702-417f-a76e-b15dc0bf94b2",
              "name": {
                "am": "Education",
                "en": "Education"
              },
              "timestamp": "2022-06-24T12:31:37.866714",
              "description": {
                "am": "Education",
                "en": "Education"
              }
            },
            "externalOrganizationCode": null,
            "timestamp": "2021-08-26T09:11:34.940505"
          },
          {
            "id": "1bec8c96-cd5a-4867-8799-fa466e3658a7",
            "name": {
              "am": "Sidama Regional State Education Bureau",
              "en": "Sidama Regional State Education Bureau"
            },
            "shortName": {
              "am": "SRSEB",
              "en": "SRSEB"
            },
            "description": {
              "am": "Sidama Regional State Education Bureau",
              "en": "Sidama Regional State Education Bureau"
            },
            "organizationType": {
              "id": "3a18ec22-ac23-4394-b571-0867709a1956",
              "key": "Organization-Type",
              "code": "svckf",
              "name": {
                "am": "Administration",
                "en": "Administration"
              },
              "order": 0,
              "timestamp": "2021-08-23T11:33:33.445887",
              "description": {
                "am": "Administration",
                "en": "Administration"
              }
            },
            "code": "IOj9P00298",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": {
              "id": "3c224171-4702-417f-a76e-b15dc0bf94b2",
              "name": {
                "am": "Education",
                "en": "Education"
              },
              "timestamp": "2022-06-24T12:31:37.866714",
              "description": {
                "am": "Education",
                "en": "Education"
              }
            },
            "externalOrganizationCode": null,
            "timestamp": "2023-09-25T07:37:27.678908"
          },
          {
            "id": "c394b929-a5fb-4bf4-b4b8-5e724e099301",
            "name": {
              "am": "Amahara Regional State Education Bureau",
              "en": "Amahara Regional State Education Bureau"
            },
            "shortName": {
              "am": "ARSEB",
              "en": "ARSEB"
            },
            "description": {
              "am": "Amahara Regional State Education Bureau",
              "en": "Amahara Regional State Education Bureau"
            },
            "organizationType": {
              "id": "3a18ec22-ac23-4394-b571-0867709a1956",
              "key": "Organization-Type",
              "code": "svckf",
              "name": {
                "am": "Administration",
                "en": "Administration"
              },
              "order": 0,
              "timestamp": "2021-08-23T11:33:33.445887",
              "description": {
                "am": "Administration",
                "en": "Administration"
              }
            },
            "code": "V0LC200319",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": {
              "id": "3c224171-4702-417f-a76e-b15dc0bf94b2",
              "name": {
                "am": "Education",
                "en": "Education"
              },
              "timestamp": "2022-06-24T12:31:37.866714",
              "description": {
                "am": "Education",
                "en": "Education"
              }
            },
            "externalOrganizationCode": null,
            "timestamp": "2023-09-25T09:11:06.839779"
          },
          {
            "id": "15566646-c577-4146-86a9-ff53ed121dbc",
            "name": {
              "am": "Amahara Regional State Water and Energy Bureau",
              "en": "Amahara Regional State Water and Energy Bureau"
            },
            "shortName": {
              "am": "ARSWE",
              "en": "ARSWE"
            },
            "description": {
              "am": "Amahara Regional State Water and Energy Bureau",
              "en": "Amahara Regional State Water and Energy Bureau"
            },
            "organizationType": {
              "id": "3a18ec22-ac23-4394-b571-0867709a1956",
              "key": "Organization-Type",
              "code": "svckf",
              "name": {
                "am": "Administration",
                "en": "Administration"
              },
              "order": 0,
              "timestamp": "2021-08-23T11:33:33.445887",
              "description": {
                "am": "Administration",
                "en": "Administration"
              }
            },
            "code": "ODheq00320",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": {
              "id": "fc9fa7cc-8371-4617-b3a5-06deabb525b6",
              "name": {
                "am": "ውሃ ሀብትና ኢነርጂ",
                "en": "Water Resources and Energy"
              },
              "timestamp": "2023-08-19T09:29:09.415465",
              "description": {
                "am": "ውሃ ሀብትና ኢነርጂ",
                "en": "Water Resources and Energy"
              }
            },
            "externalOrganizationCode": null,
            "timestamp": "2023-09-25T09:12:58.995949"
          },
          {
            "id": "a6f5c301-c8a3-48a7-88e6-2a35831ad0f4",
            "name": {
              "am": "WACHAMO UNIVERSITY",
              "en": "WACHAMO UNIVERSITY"
            },
            "shortName": {
              "am": "WCU",
              "en": "WCU"
            },
            "description": {
              "am": "WACHAMO UNIVERSITY",
              "en": "WACHAMO UNIVERSITY"
            },
            "organizationType": {
              "id": "04c1385a-761b-4570-be88-e8ba1954f45a",
              "key": "Organization-Type",
              "code": "0035",
              "name": {
                "am": "Higher Inistitution",
                "en": "Higher Inistitution",
                "or": null,
                "tg": null
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
      
              }
            },
            "code": "SB6CI",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": {
              "fax": {
                "code": "+251",
                "number": "0465551910"
              },
              "city": {
                "am": "ሆሳዕና",
                "en": "Hossana"
              },
              "zone": {
                "am": "ሀዲያ",
                "en": "Hadiya"
              },
              "email": "",
              "mobile": {
                "code": "+251",
                "number": ""
              },
              "postal": "667",
              "region": {
                "am": "መዕከላዊ ኢትዮጵያ ክልል",
                "en": "Central Ethiopia Region"
              },
              "district": {
                "am": "ሌሞ",
                "en": "Lemo"
              },
              "telephone": {
                "code": "+251",
                "number": ""
              },
              "houseNumber": ""
            },
            "organizationSector": {
              "id": "3c224171-4702-417f-a76e-b15dc0bf94b2",
              "name": {
                "am": "Education",
                "en": "Education"
              },
              "timestamp": "2022-06-24T12:31:37.866714",
              "description": {
                "am": "Education",
                "en": "Education"
              }
            },
            "externalOrganizationCode": null,
            "timestamp": "2021-09-16T13:58:18.451698"
          },
          {
            "id": "d174cf56-deff-4445-997e-d51b5392683e",
            "name": {
              "am": "የኢትዮጵያ ብዝሀ ሕይወት ኢንስቲትዩት",
              "en": "Ethiopian Biodiversity Institute"
            },
            "shortName": {
              "am": "EBI",
              "en": "EBI"
            },
            "description": {
              "am": "የኢትዮጵያ ብዝሀ ሕይወት ኢንስቲትዩት",
              "en": "Ethiopian Biodiversity Institute"
            },
            "organizationType": {
              "id": "4c2c2ef8-1c8c-40e2-82b1-2b07e10f82f0",
              "key": "Organization-Type",
              "code": "32323",
              "name": {
                "am": "Government Organization",
                "en": "Government Organization",
                "or": null,
                "tg": null
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
                "am": "-",
                "en": "-",
                "or": null,
                "tg": null
              }
            },
            "code": "ZenRU",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": {
              "fax": {
                "code": "+251",
                "number": ""
              },
              "city": {
                "am": "አዲስ አበባ",
                "en": "Addis Ababa"
              },
              "zone": {
                "am": null,
                "en": null
              },
              "email": "info@ebi.gov.et",
              "mobile": {
                "code": "+251",
                "number": ""
              },
              "postal": "30726",
              "region": {
                "am": null,
                "en": null
              },
              "district": {
                "am": "",
                "en": ""
              },
              "telephone": {
                "code": "+251",
                "number": ""
              },
              "houseNumber": ""
            },
            "organizationSector": {
              "id": "87e0c7d3-b7c4-4f9b-9933-7a94633b0a8f",
              "name": {
                "am": "ግብርና እና ገጠር ልማት",
                "en": "Agriculture and Rural Development"
              },
              "timestamp": "2023-08-19T09:28:40.865568",
              "description": {
                "am": "ግብርና እና ገጠር ልማት",
                "en": "Agriculture and Rural Development"
              }
            },
            "externalOrganizationCode": "11107",
            "timestamp": "2021-08-24T08:21:09.344851"
          },
          {
            "id": "7646f3b8-9866-4aed-9bf5-7bf634aa2f8a",
            "name": {
              "am": "Dire Dawa Administration Road and Transport  Bureau",
              "en": "Dire Dawa Administration Road and Transport  Bureau"
            },
            "shortName": {
              "am": "DDART",
              "en": "DDART"
            },
            "description": {
              "am": "Dire Dawa Administration Road and Transport  Bureau",
              "en": "Dire Dawa Administration Road and Transport  Bureau"
            },
            "organizationType": {
              "id": "3a18ec22-ac23-4394-b571-0867709a1956",
              "key": "Organization-Type",
              "code": "svckf",
              "name": {
                "am": "Administration",
                "en": "Administration"
              },
              "order": 0,
              "timestamp": "2021-08-23T11:33:33.445887",
              "description": {
                "am": "Administration",
                "en": "Administration"
              }
            },
            "code": "6Kibw00330",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": {
              "fax": {
                "code": "+251",
                "number": "11-24-41"
              },
              "city": {
                "am": "ድሬ ዳዋ",
                "en": "Dire Dawa"
              },
              "zone": {
                "am": "-",
                "en": "-"
              },
              "email": "",
              "mobile": {
                "code": "+251",
                "number": ""
              },
              "postal": "295",
              "region": {
                "am": "ድሬ ዳዋ",
                "en": "Dire Dawa"
              },
              "district": {
                "am": "ጎሮ 02 ቀበሌ",
                "en": "Goro, kebele 02"
              },
              "telephone": {
                "code": "+251",
                "number": ""
              },
              "houseNumber": "-"
            },
            "organizationSector": {
              "id": "92c5683e-77c7-4177-aedf-f201a8649a8a",
              "name": {
                "am": "ትራንስፖርት እና መገናኛ",
                "en": "Transport and Communication"
              },
              "timestamp": "2023-08-19T09:30:10.492956",
              "description": {
                "am": "ትራንስፖርት እና መገናኛ",
                "en": "Transport and Communication"
              }
            },
            "externalOrganizationCode": null,
            "timestamp": "2023-09-25T11:22:48.620596"
          },
          {
            "id": "0610da85-2e95-4bea-8581-78fec806c194",
            "name": {
              "am": "የመንግስት ግዥ አገልግሎት",
              "en": "Federal Public Procurement Service"
            },
            "shortName": {
              "am": "PPS",
              "en": "PPS"
            },
            "description": {
              "am": "የመንግስት ግዥ አገልግሎት",
              "en": "Federal Public Procurement Service"
            },
            "organizationType": {
              "id": "de36436b-a5bc-4f67-bcaf-44b171f0e5b0",
              "key": "Organization-Type",
              "code": "c8m3r",
              "name": {
                "am": "Service",
                "en": "Service"
              },
              "order": 0,
              "timestamp": "2021-07-13T12:10:26.94161",
              "description": {
                "am": "Service",
                "en": "Service"
              }
            },
            "code": "cb3RG",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": {
              "fax": {
                "code": "+251",
                "number": ""
              },
              "city": {
                "am": null,
                "en": null
              },
              "zone": {
                "am": null,
                "en": null
              },
              "email": "",
              "mobile": {
                "code": "+251",
                "number": ""
              },
              "postal": "",
              "region": {
                "am": null,
                "en": null
              },
              "district": {
                "am": null,
                "en": null
              },
              "telephone": {
                "code": "+251",
                "number": ""
              },
              "houseNumber": ""
            },
            "organizationSector": {
              "id": "2cec2cda-f0fa-4692-a486-4526642a1086",
              "name": {
                "am": "ጠቅላላ አገልግሎት",
                "en": "General Service"
              },
              "timestamp": "2023-08-19T09:28:29.39931",
              "description": {
                "am": "ጠቅላላ አገልግሎት",
                "en": "General Service"
              }
            },
            "externalOrganizationCode": "11042",
            "timestamp": "2021-07-13T12:12:12.874617"
          },
          {
            "id": "11b78290-ef1d-41e4-b43c-cff6d27daa36",
            "name": {
              "am": "Dire Dawa Administration Health Bureau",
              "en": "Dire Dawa Administration Health Bureau"
            },
            "shortName": {
              "am": "DDAH",
              "en": "DDAH"
            },
            "description": {
              "am": "Dire Dawa Administration Health Bureau",
              "en": "Dire Dawa Administration Health Bureau"
            },
            "organizationType": {
              "id": "3a18ec22-ac23-4394-b571-0867709a1956",
              "key": "Organization-Type",
              "code": "svckf",
              "name": {
                "am": "Administration",
                "en": "Administration"
              },
              "order": 0,
              "timestamp": "2021-08-23T11:33:33.445887",
              "description": {
                "am": "Administration",
                "en": "Administration"
              }
            },
            "code": "Rirpn00329",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": {
              "id": "65f35246-9b3d-4d80-b878-e22cc9eec8ca",
              "name": {
                "am": "Health",
                "en": "Health"
              },
              "timestamp": "2022-06-24T12:31:24.832988",
              "description": {
                "am": "Health",
                "en": "Health"
              }
            },
            "externalOrganizationCode": null,
            "timestamp": "2023-09-25T11:19:57.347928"
          },
          {
            "id": "2afc2ead-8f5c-495c-99a3-01a98919a4d6",
            "name": {
              "am": "Sidama Regional State Road and Transport Bureau",
              "en": "Sidama Regional State Road and Transport Bureau"
            },
            "shortName": {
              "am": "SRSRTB",
              "en": "SRSRTB"
            },
            "description": {
              "am": "Sidama Regional State Road and Transport Bureau",
              "en": "Sidama Regional State Road and Transport Bureau"
            },
            "organizationType": {
              "id": "3a18ec22-ac23-4394-b571-0867709a1956",
              "key": "Organization-Type",
              "code": "svckf",
              "name": {
                "am": "Administration",
                "en": "Administration"
              },
              "order": 0,
              "timestamp": "2021-08-23T11:33:33.445887",
              "description": {
                "am": "Administration",
                "en": "Administration"
              }
            },
            "code": "yl6r800302",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": {
              "fax": {
                "code": "+251",
                "number": ""
              },
              "city": {
                "am": null,
                "en": null
              },
              "zone": {
                "am": null,
                "en": null
              },
              "email": "",
              "mobile": {
                "code": "+251",
                "number": ""
              },
              "postal": "",
              "region": {
                "am": null,
                "en": null
              },
              "district": {
                "am": null,
                "en": null
              },
              "telephone": {
                "code": "+251",
                "number": ""
              },
              "houseNumber": ""
            },
            "organizationSector": {
              "id": "92c5683e-77c7-4177-aedf-f201a8649a8a",
              "name": {
                "am": "ትራንስፖርት እና መገናኛ",
                "en": "Transport and Communication"
              },
              "timestamp": "2023-08-19T09:30:10.492956",
              "description": {
                "am": "ትራንስፖርት እና መገናኛ",
                "en": "Transport and Communication"
              }
            },
            "externalOrganizationCode": null,
            "timestamp": "2023-09-25T07:51:16.115021"
          },
          {
            "id": "37a40af5-2485-48b6-ad77-bcf2426c28a5",
            "name": {
              "am": "ሚዛን-ቴፒ ዩኒቨርሲቲ",
              "en": "Mizan-Tepi University"
            },
            "shortName": {
              "am": "ሚ.ቴ .ዩ",
              "en": "MTU"
            },
            "description": {
              "am": "ሚዛን-ቴፒ ዩኒቨርሲቲ",
              "en": "Mizan-Tepi University"
            },
            "organizationType": {
              "id": "04c1385a-761b-4570-be88-e8ba1954f45a",
              "key": "Organization-Type",
              "code": "0035",
              "name": {
                "am": "Higher Inistitution",
                "en": "Higher Inistitution",
                "or": null,
                "tg": null
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
      
              }
            },
            "code": "BYJfD",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": {
              "fax": {
                "code": "+251",
                "number": ""
              },
              "city": {
                "am": "ሚዛን",
                "en": "Mizan"
              },
              "zone": {
                "am": "ሚዛን-አማን",
                "en": "MIzan-Aman"
              },
              "email": "",
              "mobile": {
                "code": "+251",
                "number": ""
              },
              "postal": "206",
              "region": {
                "am": "ደቡብ- ምዕራብ",
                "en": "South west"
              },
              "district": {
                "am": "ሚዛን-አማን",
                "en": "Mizan-Aman"
              },
              "telephone": {
                "code": "+251",
                "number": ""
              },
              "houseNumber": ""
            },
            "organizationSector": {
              "id": "3c224171-4702-417f-a76e-b15dc0bf94b2",
              "name": {
                "am": "Education",
                "en": "Education"
              },
              "timestamp": "2022-06-24T12:31:37.866714",
              "description": {
                "am": "Education",
                "en": "Education"
              }
            },
            "externalOrganizationCode": "11236",
            "timestamp": "2021-09-16T13:45:12.2225"
          },
          {
            "id": "2191f8c1-f0b5-4021-9e62-2e87dfa1b673",
            "name": {
              "am": "የኢትዮጵያ ኢንተርፕራይዞች ልማት",
              "en": "Ethiopian Enterprise Development"
            },
            "shortName": {
              "am": "EED",
              "en": "EED"
            },
            "description": {
              "am": "የኢትዮጵያ ኢንተርፕራይዞች ልማት",
              "en": "Ethiopian Enterprise Development"
            },
            "organizationType": {
              "id": "4c2c2ef8-1c8c-40e2-82b1-2b07e10f82f0",
              "key": "Organization-Type",
              "code": "32323",
              "name": {
                "am": "Government Organization",
                "en": "Government Organization",
                "or": null,
                "tg": null
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
                "am": "-",
                "en": "-",
                "or": null,
                "tg": null
              }
            },
            "code": "RTPVd",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": {
              "fax": {
                "code": "+251",
                "number": "115510084"
              },
              "city": {
                "am": "የአዲስ አበባ ",
                "en": "Addis Ababa "
              },
              "zone": {
                "am": "ቂርቆስ",
                "en": "Kirkos"
              },
              "email": "tesfayedula6@gmail.com",
              "mobile": {
                "code": "+251",
                "number": ""
              },
              "postal": "1463",
              "region": {
                "am": "የአዲስ አበባ አስተዳደር",
                "en": "Addis Ababa Administration"
              },
              "district": {
                "am": "ቂርቆስ",
                "en": "Kirkos"
              },
              "telephone": {
                "code": "+251",
                "number": ""
              },
              "houseNumber": ""
            },
            "organizationSector": {
              "id": "1ed15352-c17b-4f3a-97a5-ec23c32e38df",
              "name": {
                "am": "Economy ",
                "en": "Economy "
              },
              "timestamp": "2022-06-24T12:32:13.56549",
              "description": {
                "am": "Economy ",
                "en": "Economy "
              }
            },
            "externalOrganizationCode": "11131",
            "timestamp": "2021-08-26T08:36:15.548255"
          },
          {
            "id": "fb1cf656-3740-471d-abb7-741aab4a79c9",
            "name": {
              "am": "Hawassa University ",
              "en": "Hawassa University "
            },
            "shortName": {
              "am": "HUU",
              "en": "HUU"
            },
            "description": {
              "am": "Hawassa University ",
              "en": "Hawassa University "
            },
            "organizationType": {
              "id": "04c1385a-761b-4570-be88-e8ba1954f45a",
              "key": "Organization-Type",
              "code": "0035",
              "name": {
                "am": "Higher Inistitution",
                "en": "Higher Inistitution",
                "or": null,
                "tg": null
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
      
              }
            },
            "code": "LgaqE",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": {
              "fax": {
                "code": "+251",
                "number": "462215163"
              },
              "city": {
                "am": "ሀዋሳ",
                "en": "Hawassa"
              },
              "zone": {
                "am": "ሀዋሳ",
                "en": "Hawassa"
              },
              "email": "ppmd@hu.edu.et",
              "mobile": {
                "code": "+251",
                "number": ""
              },
              "postal": "05",
              "region": {
                "am": "ሲዳማ",
                "en": "Sidama"
              },
              "district": {
                "am": "ምስራቅ ክፍለ ከተማ",
                "en": "Misrak Subcity"
              },
              "telephone": {
                "code": "+251",
                "number": ""
              },
              "houseNumber": ""
            },
            "organizationSector": {
              "id": "3c224171-4702-417f-a76e-b15dc0bf94b2",
              "name": {
                "am": "Education",
                "en": "Education"
              },
              "timestamp": "2022-06-24T12:31:37.866714",
              "description": {
                "am": "Education",
                "en": "Education"
              }
            },
            "externalOrganizationCode": null,
            "timestamp": "2021-10-28T10:08:44.669405"
          },
          {
            "id": "eaaa8da4-58a7-45f4-bd87-8d26d7cf3850",
            "name": {
              "am": "የኢትዮጵያ አካባቢ ጥበቃ ባለስልጣን",
              "en": "Ethiopian Environmental Protection Authority"
            },
            "shortName": {
              "am": "EFCCC",
              "en": "EFCCC"
            },
            "description": {
              "am": "የኢትዮጵያ አካባቢ ጥበቃ ባለስልጣን",
              "en": "Environmental Protection Authority"
            },
            "organizationType": {
              "id": "cb506b84-ce1a-4d14-b04f-4562c1a2448e",
              "key": "Organization-Type",
              "code": "lontv",
              "name": {
                "am": " Commission",
                "en": " Commission"
              },
              "order": 0,
              "timestamp": "2021-09-16T12:26:40.817191",
              "description": {
                "am": " Commission",
                "en": " Commission"
              }
            },
            "code": "IuhRa",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": {
              "fax": {
                "code": "+251",
                "number": ""
              },
              "city": {
                "am": "Addis Ababa",
                "en": "Addis Ababa"
              },
              "zone": {
                "am": null,
                "en": "Arada"
              },
              "email": "",
              "mobile": {
                "code": "+251",
                "number": ""
              },
              "postal": "",
              "region": {
                "am": null,
                "en": "Addis Ababa"
              },
              "district": {
                "am": null,
                "en": null
              },
              "telephone": {
                "code": "+251",
                "number": ""
              },
              "houseNumber": ""
            },
            "organizationSector": {
              "id": "87e0c7d3-b7c4-4f9b-9933-7a94633b0a8f",
              "name": {
                "am": "ግብርና እና ገጠር ልማት",
                "en": "Agriculture and Rural Development"
              },
              "timestamp": "2023-08-19T09:28:40.865568",
              "description": {
                "am": "ግብርና እና ገጠር ልማት",
                "en": "Agriculture and Rural Development"
              }
            },
            "externalOrganizationCode": "11298",
            "timestamp": "2021-09-16T13:09:27.652362"
          },
          {
            "id": "db6c6280-6fea-4bf1-9fde-16e8e0e0c1fa",
            "name": {
              "am": "አርማወር ሃንሰን የምርምር ኢኒሰቲትዩት",
              "en": "Armauer Hansen Research Institute "
            },
            "shortName": {
              "am": "AHRI",
              "en": "AHRI"
            },
            "description": {
              "am": "አርማወር ሃንሰን የምርምር ኢኒሰቲትዩት",
              "en": "Armauer Hansen Research Institute "
            },
            "organizationType": {
              "id": "4c2c2ef8-1c8c-40e2-82b1-2b07e10f82f0",
              "key": "Organization-Type",
              "code": "32323",
              "name": {
                "am": "Government Organization",
                "en": "Government Organization",
                "or": null,
                "tg": null
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
                "am": "-",
                "en": "-",
                "or": null,
                "tg": null
              }
            },
            "code": "nzOoy",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": "could not access the org unit",
            "deactivateRemark": "d",
            "taxIdentificationNumber": null,
            "address": {
              "fax": {
                "code": "+251",
                "number": ""
              },
              "city": {
                "am": "አዲስ አበባ",
                "en": "Addis Ababa"
              },
              "zone": {
                "am": "ኮልፌ ቀራኒዮ",
                "en": "Kolfe Keranio "
              },
              "email": "info@ahri.gov.et",
              "mobile": {
                "code": "+251",
                "number": ""
              },
              "postal": "1005",
              "region": {
                "am": "አዲስ አበባ",
                "en": "Addis Ababa"
              },
              "district": {
                "am": null,
                "en": null
              },
              "telephone": {
                "code": "+251",
                "number": ""
              },
              "houseNumber": ""
            },
            "organizationSector": {
              "id": "22b8d3a5-4861-4bcb-9cac-d4f26cc9d80e",
              "name": {
                "am": "Social",
                "en": "Social"
              },
              "timestamp": "2022-06-24T12:32:27.728597",
              "description": {
                "am": "Social",
                "en": "Social"
              }
            },
            "externalOrganizationCode": "11325",
            "timestamp": "2021-08-24T13:16:06.360062"
          },
          {
            "id": "ab954486-3cd7-47ef-ba89-dc4013508acd",
            "name": {
              "am": "የትምህርት ምዘናና ፈተናዎች አገልግሎት",
              "en": "Educational Assessment and Examinations Service"
            },
            "shortName": {
              "am": "EAES",
              "en": "EAES"
            },
            "description": {
              "am": "የትምህርት ምዘናና ፈተናዎች አገልግሎት",
              "en": "Educational Assessment and Examinations Service"
            },
            "organizationType": {
              "id": "de36436b-a5bc-4f67-bcaf-44b171f0e5b0",
              "key": "Organization-Type",
              "code": "c8m3r",
              "name": {
                "am": "Service",
                "en": "Service"
              },
              "order": 0,
              "timestamp": "2021-07-13T12:10:26.94161",
              "description": {
                "am": "Service",
                "en": "Service"
              }
            },
            "code": "CtjLu",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": {
              "fax": {
                "code": "+251",
                "number": ""
              },
              "city": {
                "am": null,
                "en": "Addis Ababa"
              },
              "zone": {
                "am": null,
                "en": "Addis Ababa"
              },
              "email": "",
              "mobile": {
                "code": "+251",
                "number": ""
              },
              "postal": "",
              "region": {
                "am": "",
                "en": "Addis Ababa"
              },
              "district": {
                "am": null,
                "en": "Arada"
              },
              "telephone": {
                "code": "+251",
                "number": ""
              },
              "houseNumber": ""
            },
            "organizationSector": {
              "id": "3c224171-4702-417f-a76e-b15dc0bf94b2",
              "name": {
                "am": "Education",
                "en": "Education"
              },
              "timestamp": "2022-06-24T12:31:37.866714",
              "description": {
                "am": "Education",
                "en": "Education"
              }
            },
            "externalOrganizationCode": null,
            "timestamp": "2021-08-24T07:49:05.214228"
          },
          {
            "id": "f2d18cc9-fc3d-48c2-9f23-591155dbf0e2",
            "name": {
              "am": "Gambella Regional State Agricultural and Natural Resource Bureau",
              "en": "Gambella Regional State Agricultural and Natural Resource Bureau"
            },
            "shortName": {
              "am": "GRSANR",
              "en": "GRSANR"
            },
            "description": {
              "am": "Gambella Regional State Agricultural and Natural Resource Bureau",
              "en": "Gambella Regional State Agricultural and Natural Resource Bureau"
            },
            "organizationType": {
              "id": "3a18ec22-ac23-4394-b571-0867709a1956",
              "key": "Organization-Type",
              "code": "svckf",
              "name": {
                "am": "Administration",
                "en": "Administration"
              },
              "order": 0,
              "timestamp": "2021-08-23T11:33:33.445887",
              "description": {
                "am": "Administration",
                "en": "Administration"
              }
            },
            "code": "lVK7E00292",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": {
              "id": "87e0c7d3-b7c4-4f9b-9933-7a94633b0a8f",
              "name": {
                "am": "ግብርና እና ገጠር ልማት",
                "en": "Agriculture and Rural Development"
              },
              "timestamp": "2023-08-19T09:28:40.865568",
              "description": {
                "am": "ግብርና እና ገጠር ልማት",
                "en": "Agriculture and Rural Development"
              }
            },
            "externalOrganizationCode": null,
            "timestamp": "2023-09-25T06:24:25.439622"
          },
          {
            "id": "77733d48-dd26-4fa2-9a46-4212b73d79b8",
            "name": {
              "am": "Somali Regional State Public Procurement and Property Administration Agency",
              "en": "Somali Regional State Public Procurement and Property Administration Agency"
            },
            "shortName": {
              "am": "SRSPPAA",
              "en": "SRSPPAA"
            },
            "description": {
              "am": "Somali Regional State Public Procurement and Property Administration Agency",
              "en": "Somali Regional State Public Procurement and Property Administration Agency"
            },
            "organizationType": {
              "id": "3a18ec22-ac23-4394-b571-0867709a1956",
              "key": "Organization-Type",
              "code": "svckf",
              "name": {
                "am": "Administration",
                "en": "Administration"
              },
              "order": 0,
              "timestamp": "2021-08-23T11:33:33.445887",
              "description": {
                "am": "Administration",
                "en": "Administration"
              }
            },
            "code": "Dxy6E00339",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": {
              "fax": {
                "code": "+251",
                "number": ""
              },
              "city": {
                "am": "Jigjiga",
                "en": "Jigjiga"
              },
              "zone": {
                "am": null,
                "en": null
              },
              "email": "",
              "mobile": {
                "code": "+251",
                "number": ""
              },
              "postal": "",
              "region": {
                "am": "Somali Regional State",
                "en": "Somali Regional State"
              },
              "district": {
                "am": null,
                "en": null
              },
              "telephone": {
                "code": "+251",
                "number": ""
              },
              "houseNumber": ""
            },
            "organizationSector": {
              "id": "1ed15352-c17b-4f3a-97a5-ec23c32e38df",
              "name": {
                "am": "Economy ",
                "en": "Economy "
              },
              "timestamp": "2022-06-24T12:32:13.56549",
              "description": {
                "am": "Economy ",
                "en": "Economy "
              }
            },
            "externalOrganizationCode": null,
            "timestamp": "2023-09-26T06:54:22.160035"
          },
          {
            "id": "9f4141dc-b738-4132-8f62-df8ea47df6b3",
            "name": {
              "am": "Benshangul Gumuz Regional State Water and Energy Bureau",
              "en": "Benshangul Gumuz Regional State Water and Energy Bureau"
            },
            "shortName": {
              "am": "BGRSW",
              "en": "BGRSW"
            },
            "description": {
              "am": "Benshangul Gumuz Regional State Water and Energy Bureau",
              "en": "Benshangul Gumuz Regional State Water and Energy Bureau"
            },
            "organizationType": {
              "id": "3a18ec22-ac23-4394-b571-0867709a1956",
              "key": "Organization-Type",
              "code": "svckf",
              "name": {
                "am": "Administration",
                "en": "Administration"
              },
              "order": 0,
              "timestamp": "2021-08-23T11:33:33.445887",
              "description": {
                "am": "Administration",
                "en": "Administration"
              }
            },
            "code": "RG7Ji00315",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": {
              "fax": {
                "code": "+251",
                "number": ""
              },
              "city": {
                "am": "Assosa",
                "en": "Assosa"
              },
              "zone": {
                "am": "ASSOSA",
                "en": "Assosa"
              },
              "email": "",
              "mobile": {
                "code": "+251",
                "number": ""
              },
              "postal": "00",
              "region": {
                "am": "Assosa",
                "en": "Assosa"
              },
              "district": {
                "am": "04",
                "en": "04"
              },
              "telephone": {
                "code": "+251",
                "number": ""
              },
              "houseNumber": "00"
            },
            "organizationSector": {
              "id": "fc9fa7cc-8371-4617-b3a5-06deabb525b6",
              "name": {
                "am": "ውሃ ሀብትና ኢነርጂ",
                "en": "Water Resources and Energy"
              },
              "timestamp": "2023-08-19T09:29:09.415465",
              "description": {
                "am": "ውሃ ሀብትና ኢነርጂ",
                "en": "Water Resources and Energy"
              }
            },
            "externalOrganizationCode": null,
            "timestamp": "2023-09-25T08:56:27.312056"
          },
          {
            "id": "6224023d-a78a-4c2f-9b7c-b9dcf6a7d61c",
            "name": {
              "am": "አምራች ኢንዱስትሪ ልማት ኢንስቲትዩት",
              "en": "Manufacturing Industry Development  Institute"
            },
            "shortName": {
              "am": "MaIDI",
              "en": "MaIDI"
            },
            "description": {
              "am": "አምራች ኢንዱስትሪ ልማት ኢንስቲትዩት",
              "en": "Manufacturing Industry Development  Institute"
            },
            "organizationType": {
              "id": "93f290b5-9516-473c-ba36-ba5c85656d3c",
              "key": "Organization-Type",
              "code": "055",
              "name": {
                "am": "ኢንሰቲትዩት",
                "en": "Institute "
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
                "am": "ኢንሰቲትዩት",
                "en": "Institute "
              }
            },
            "code": "jBzcd",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": {
              "fax": {
                "code": "+251",
                "number": ""
              },
              "city": {
                "am": "AratKilo",
                "en": "AratKilo"
              },
              "zone": {
                "am": "Arada",
                "en": "Arada"
              },
              "email": "info@midi.gov.et",
              "mobile": {
                "code": "+251",
                "number": ""
              },
              "postal": "",
              "region": {
                "am": "Addis Ababa",
                "en": "Addis Ababa"
              },
              "district": {
                "am": "09",
                "en": "09"
              },
              "telephone": {
                "code": "+251",
                "number": ""
              },
              "houseNumber": ""
            },
            "organizationSector": {
              "id": "1ed15352-c17b-4f3a-97a5-ec23c32e38df",
              "name": {
                "am": "Economy ",
                "en": "Economy "
              },
              "timestamp": "2022-06-24T12:32:13.56549",
              "description": {
                "am": "Economy ",
                "en": "Economy "
              }
            },
            "externalOrganizationCode": "14603",
            "timestamp": "2022-08-15T07:30:28.697648"
          },
          {
            "id": "93d7810e-7a65-4a4c-a72d-23e6963f21f6",
            "name": {
              "am": "የኢትዮጵያ መድኃኒት አቅራቢ አገልግሎት",
              "en": "Ethiopia Pharmaceutical Supplies Service"
            },
            "shortName": {
              "am": "EPSA",
              "en": "EPSA"
            },
            "description": {
              "am": "የኢትዮጵያ መድኃኒት አቅራቢ አገልግሎት",
              "en": "Ethiopia Pharmaceutical Supplies Service"
            },
            "organizationType": {
              "id": "eaaaebc3-ea65-4ef7-8603-8861977eb2d1",
              "key": "Organization-Type",
              "code": "ryxlq",
              "name": {
                "am": "Authority",
                "en": "Authority"
              },
              "order": 0,
              "timestamp": "2021-07-13T11:59:56.336819",
              "description": {
                "am": "Authority",
                "en": "Authority"
              }
            },
            "code": "xr6p1",
            "status": "Draft",
            "logo": {
              "file_name": "EPSA logo.jpg",
              "file_path": "48e96174-167f-41d5-a850-33bf0840a15b.jpg",
              "file_type": ".jpg"
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": {
              "id": "65f35246-9b3d-4d80-b878-e22cc9eec8ca",
              "name": {
                "am": "Health",
                "en": "Health"
              },
              "timestamp": "2022-06-24T12:31:24.832988",
              "description": {
                "am": "Health",
                "en": "Health"
              }
            },
            "externalOrganizationCode": null,
            "timestamp": "2021-07-13T12:02:20.463167"
          },
          {
            "id": "343183cb-501a-45cb-a65c-41bfac47a599",
            "name": {
              "am": "Oromia Regional State Water and Enegery Bureau",
              "en": "Oromia Regional State Water and Enegery Bureau"
            },
            "shortName": {
              "am": "ORSWEB",
              "en": "ORSWEB"
            },
            "description": {
              "am": "Oromia Regional State Water and Enegery Bureau",
              "en": "Oromia Regional State Water and Enegery Bureau"
            },
            "organizationType": {
              "id": "3a18ec22-ac23-4394-b571-0867709a1956",
              "key": "Organization-Type",
              "code": "svckf",
              "name": {
                "am": "Administration",
                "en": "Administration"
              },
              "order": 0,
              "timestamp": "2021-08-23T11:33:33.445887",
              "description": {
                "am": "Administration",
                "en": "Administration"
              }
            },
            "code": "lTCcQ00296",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": {
              "id": "fc9fa7cc-8371-4617-b3a5-06deabb525b6",
              "name": {
                "am": "ውሃ ሀብትና ኢነርጂ",
                "en": "Water Resources and Energy"
              },
              "timestamp": "2023-08-19T09:29:09.415465",
              "description": {
                "am": "ውሃ ሀብትና ኢነርጂ",
                "en": "Water Resources and Energy"
              }
            },
            "externalOrganizationCode": null,
            "timestamp": "2023-09-25T07:09:59.664163"
          },
          {
            "id": "e278da71-50e7-42b4-99a9-32d069237a7f",
            "name": {
              "am": "Sidama Regional State Agriculture Bureau",
              "en": "Sidama Regional State Agriculture Bureau"
            },
            "shortName": {
              "am": "SRSAB",
              "en": "SRSAB"
            },
            "description": {
              "am": "Sidama Regional State Agriculture Bureau",
              "en": "Sidama Regional State Agriculture Bureau"
            },
            "organizationType": {
              "id": "3a18ec22-ac23-4394-b571-0867709a1956",
              "key": "Organization-Type",
              "code": "svckf",
              "name": {
                "am": "Administration",
                "en": "Administration"
              },
              "order": 0,
              "timestamp": "2021-08-23T11:33:33.445887",
              "description": {
                "am": "Administration",
                "en": "Administration"
              }
            },
            "code": "1kRPE00300",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": {
              "id": "87e0c7d3-b7c4-4f9b-9933-7a94633b0a8f",
              "name": {
                "am": "ግብርና እና ገጠር ልማት",
                "en": "Agriculture and Rural Development"
              },
              "timestamp": "2023-08-19T09:28:40.865568",
              "description": {
                "am": "ግብርና እና ገጠር ልማት",
                "en": "Agriculture and Rural Development"
              }
            },
            "externalOrganizationCode": null,
            "timestamp": "2023-09-25T07:43:05.945737"
          },
          {
            "id": "13152acc-7b65-4f6e-8151-687a211dc265",
            "name": {
              "am": "Sidama Regional State Water and Energy Bureau",
              "en": "Sidama Regional State Water and Energy Bureau"
            },
            "shortName": {
              "am": "SRSWEB",
              "en": "SRSWEB"
            },
            "description": {
              "am": "Sidama Regional State Water and Energy Bureau",
              "en": "Sidama Regional State Water and Energy Bureau"
            },
            "organizationType": {
              "id": "3a18ec22-ac23-4394-b571-0867709a1956",
              "key": "Organization-Type",
              "code": "svckf",
              "name": {
                "am": "Administration",
                "en": "Administration"
              },
              "order": 0,
              "timestamp": "2021-08-23T11:33:33.445887",
              "description": {
                "am": "Administration",
                "en": "Administration"
              }
            },
            "code": "zntAU00301",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": {
              "id": "fc9fa7cc-8371-4617-b3a5-06deabb525b6",
              "name": {
                "am": "ውሃ ሀብትና ኢነርጂ",
                "en": "Water Resources and Energy"
              },
              "timestamp": "2023-08-19T09:29:09.415465",
              "description": {
                "am": "ውሃ ሀብትና ኢነርጂ",
                "en": "Water Resources and Energy"
              }
            },
            "externalOrganizationCode": null,
            "timestamp": "2023-09-25T07:45:34.600336"
          },
          {
            "id": "2d8530dc-5555-453b-b1e8-e65b7c75f165",
            "name": {
              "am": "Gambella Regional State Road and Transport Bureau",
              "en": "Gambella Regional State Road and Transport Bureau"
            },
            "shortName": {
              "am": "GRSRTB",
              "en": "GRSRTB"
            },
            "description": {
              "am": "Gambella Regional State Road and Transport Bureau",
              "en": "Gambella Regional State Road and Transport Bureau"
            },
            "organizationType": {
              "id": "3a18ec22-ac23-4394-b571-0867709a1956",
              "key": "Organization-Type",
              "code": "svckf",
              "name": {
                "am": "Administration",
                "en": "Administration"
              },
              "order": 0,
              "timestamp": "2021-08-23T11:33:33.445887",
              "description": {
                "am": "Administration",
                "en": "Administration"
              }
            },
            "code": "tuaOJ00303",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": {
              "id": "92c5683e-77c7-4177-aedf-f201a8649a8a",
              "name": {
                "am": "ትራንስፖርት እና መገናኛ",
                "en": "Transport and Communication"
              },
              "timestamp": "2023-08-19T09:30:10.492956",
              "description": {
                "am": "ትራንስፖርት እና መገናኛ",
                "en": "Transport and Communication"
              }
            },
            "externalOrganizationCode": null,
            "timestamp": "2023-09-25T07:57:09.544738"
          },
          {
            "id": "ece18d69-8bf3-45a9-92f9-78a21b9ea174",
            "name": {
              "am": "South West Ethiopia People Regional State Road Authority",
              "en": "South West Ethiopia People Regional State Road Authority"
            },
            "shortName": {
              "am": "SWEPRSR",
              "en": "SWEPRSR"
            },
            "description": {
              "am": "South West Ethiopia People Regional State Road Authority",
              "en": "South West Ethiopia People Regional State Road Authority"
            },
            "organizationType": {
              "id": "3a18ec22-ac23-4394-b571-0867709a1956",
              "key": "Organization-Type",
              "code": "svckf",
              "name": {
                "am": "Administration",
                "en": "Administration"
              },
              "order": 0,
              "timestamp": "2021-08-23T11:33:33.445887",
              "description": {
                "am": "Administration",
                "en": "Administration"
              }
            },
            "code": "JYE5300309",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": {
              "id": "92c5683e-77c7-4177-aedf-f201a8649a8a",
              "name": {
                "am": "ትራንስፖርት እና መገናኛ",
                "en": "Transport and Communication"
              },
              "timestamp": "2023-08-19T09:30:10.492956",
              "description": {
                "am": "ትራንስፖርት እና መገናኛ",
                "en": "Transport and Communication"
              }
            },
            "externalOrganizationCode": null,
            "timestamp": "2023-09-25T08:14:38.872842"
          },
          {
            "id": "7d349876-6daa-4fa2-aee6-61ce04a4c238",
            "name": {
              "am": "South West Ethiopia People Regional State Water and Energy Bureau",
              "en": "South West Ethiopia People Regional State Water and Energy Bureau"
            },
            "shortName": {
              "am": "SWEPRSW",
              "en": "SWEPRSW"
            },
            "description": {
              "am": "South West Ethiopia People Regional State Water and Energy Bureau",
              "en": "South West Ethiopia People Regional State Water and Energy Bureau"
            },
            "organizationType": {
              "id": "3a18ec22-ac23-4394-b571-0867709a1956",
              "key": "Organization-Type",
              "code": "svckf",
              "name": {
                "am": "Administration",
                "en": "Administration"
              },
              "order": 0,
              "timestamp": "2021-08-23T11:33:33.445887",
              "description": {
                "am": "Administration",
                "en": "Administration"
              }
            },
            "code": "mZesT00310",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": {
              "id": "fc9fa7cc-8371-4617-b3a5-06deabb525b6",
              "name": {
                "am": "ውሃ ሀብትና ኢነርጂ",
                "en": "Water Resources and Energy"
              },
              "timestamp": "2023-08-19T09:29:09.415465",
              "description": {
                "am": "ውሃ ሀብትና ኢነርጂ",
                "en": "Water Resources and Energy"
              }
            },
            "externalOrganizationCode": null,
            "timestamp": "2023-09-25T08:17:18.207251"
          },
          {
            "id": "305489bd-ad29-4562-bd35-ac5ad591575c",
            "name": {
              "am": "Amahara Regional State Road and Transport Bureau",
              "en": "Amahara Regional State Road and Transport Bureau"
            },
            "shortName": {
              "am": "ARSRT",
              "en": "ARSRT"
            },
            "description": {
              "am": "Amahara Regional State Road and Transport Bureau",
              "en": "Amahara Regional State Road and Transport Bureau"
            },
            "organizationType": {
              "id": "3a18ec22-ac23-4394-b571-0867709a1956",
              "key": "Organization-Type",
              "code": "svckf",
              "name": {
                "am": "Administration",
                "en": "Administration"
              },
              "order": 0,
              "timestamp": "2021-08-23T11:33:33.445887",
              "description": {
                "am": "Administration",
                "en": "Administration"
              }
            },
            "code": "LRIiy00321",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": null,
            "organizationSector": {
              "id": "92c5683e-77c7-4177-aedf-f201a8649a8a",
              "name": {
                "am": "ትራንስፖርት እና መገናኛ",
                "en": "Transport and Communication"
              },
              "timestamp": "2023-08-19T09:30:10.492956",
              "description": {
                "am": "ትራንስፖርት እና መገናኛ",
                "en": "Transport and Communication"
              }
            },
            "externalOrganizationCode": null,
            "timestamp": "2023-09-25T09:15:18.639797"
          },
          {
            "id": "ccea7489-8361-40aa-a873-0c0e785579b1",
            "name": {
              "am": "Benshangul Gumuz Regional State Road and Transport Bureau",
              "en": "Benshangul Gumuz Regional State Road and Transport Bureau"
            },
            "shortName": {
              "am": "BGRSRT",
              "en": "BGRSRT"
            },
            "description": {
              "am": "Benshangul Gumuz Regional State Road and Transport Bureau",
              "en": "Benshangul Gumuz Regional State Road and Transport Bureau"
            },
            "organizationType": {
              "id": "3a18ec22-ac23-4394-b571-0867709a1956",
              "key": "Organization-Type",
              "code": "svckf",
              "name": {
                "am": "Administration",
                "en": "Administration"
              },
              "order": 0,
              "timestamp": "2021-08-23T11:33:33.445887",
              "description": {
                "am": "Administration",
                "en": "Administration"
              }
            },
            "code": "HdURX00317",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": {
              "fax": {
                "code": "+251",
                "number": "0577750404"
              },
              "city": {
                "am": null,
                "en": "Asossa"
              },
              "zone": {
                "am": "",
                "en": "Asossa"
              },
              "email": "bhe.user01@gmail.com",
              "mobile": {
                "code": "+251",
                "number": ""
              },
              "postal": "126",
              "region": {
                "am": null,
                "en": "Benshangul Gumuz Regional State "
              },
              "district": {
                "am": null,
                "en": "Asossa"
              },
              "telephone": {
                "code": "+251",
                "number": ""
              },
              "houseNumber": ""
            },
            "organizationSector": {
              "id": "92c5683e-77c7-4177-aedf-f201a8649a8a",
              "name": {
                "am": "ትራንስፖርት እና መገናኛ",
                "en": "Transport and Communication"
              },
              "timestamp": "2023-08-19T09:30:10.492956",
              "description": {
                "am": "ትራንስፖርት እና መገናኛ",
                "en": "Transport and Communication"
              }
            },
            "externalOrganizationCode": null,
            "timestamp": "2023-09-25T09:01:19.824287"
          },
          {
            "id": "47a0e8e5-4d2f-4681-ad70-8f8bd5af7fc9",
            "name": {
              "am": "Ministry of Defense",
              "en": "Ministry of Defense"
            },
            "shortName": {
              "am": "MOD",
              "en": "MOD"
            },
            "description": {
              "am": "Ministry of Defense",
              "en": "Ministry of Defense"
            },
            "organizationType": {
              "id": "a79bcd65-39d1-4ce2-b360-99ab20b2ba32",
              "key": "Organization-Type",
              "code": "09",
              "name": {
                "am": "Ministry",
                "en": "Ministry"
              },
              "order": 0,
              "timestamp": "2020-06-04T10:51:28",
              "description": {
                "am": "",
                "en": ""
              }
            },
            "code": "hfUQl",
            "status": "Draft",
            "logo": {
      
            },
            "version": "V1.0.0",
            "isActive": true,
            "isLocked": false,
            "isDeleted": false,
            "deleteRemark": null,
            "deactivateRemark": null,
            "taxIdentificationNumber": null,
            "address": {
              "fax": {
                "code": "+251",
                "number": "0113722834"
              },
              "city": {
                "am": "Addis Ababa",
                "en": "Addis Ababa"
              },
              "zone": {
                "am": "Lideta ",
                "en": "Lideta "
              },
              "email": "Financial.mgt@mod.gov.et",
              "mobile": {
                "code": "+251",
                "number": ""
              },
              "postal": "3811",
              "region": {
                "am": "Addis Ababa",
                "en": "Addis Ababa"
              },
              "district": {
                "am": "01",
                "en": "01"
              },
              "telephone": {
                "code": "+251",
                "number": ""
              },
              "houseNumber": ""
            },
            "organizationSector": {
              "id": "0db69048-b46b-403f-a567-8f031a5e4702",
              "name": {
                "am": "መከላከያ",
                "en": "Defense"
              },
              "timestamp": "2023-08-19T09:27:44.960702",
              "description": {
                "am": "መከላከያ",
                "en": "Defense"
              }
            },
            "externalOrganizationCode": "11032",
            "timestamp": "2021-09-16T13:39:32.281823"
          }
        ]
      }

      
const listSample = {
    "id": "e3fe53e0-386c-448b-ab62-3373d880cac8",
    "egpRegistrationNumber": "2405240033",
    "economicOperatorId": "c01b6d03-c10e-47d4-827d-1818afbe87d5",
    "organizationId": "20078840-a8bd-4daa-a124-6d022799fb87",
    "entityName": {
        "am": "ወይንሸት ውበቱ ተሰማ",
        "en": "WOYNISHET WUBETU TESEMA"
    },
    "legalFormOfEntity": {
        "id": "1",
        "name": {
            "en": "Sole Proprietorship"
        },
        "shortName": "SP"
    },
    "taxIdentificationNumber": "0052682796",
    "areaOfBusiness": [
        "Goods"
    ],
    "fieldBusiness": [
        {
            "am": "(62712) - Retail trade of vehicles accessories and décor",
            "en": "(62712) - Retail trade of vehicles accessories and décor"
        }
    ],
    "dateOfRegistration": "2024-05-24T00:00:00",
    "countryOfRegistration": "Ethiopia",
    "status": "active",
    "email": "weyinahetwebutu@gmail.com",
    "businessAddress": {},
    "administrator": {
        "Id": "951804bc-13e3-417b-8b57-8744aad6062d",
        "Title": "Mr",
        "UserId": "ae392b67-4c79-469e-b29f-62c4b77685db",
        "FullName": {
            "am": "Woynishet Wubetu",
            "en": "Woynishet Wubetu"
        },
        "Designation": {
            "am": "manager",
            "en": "manager"
        },
        "IsDelegated": false,
        "Nationality": "Ethiopia",
        "PowerOfAttorney": {
            "file_name": "DD.jpg",
            "file_path": "105d8eba-2649-4b53-a2a2-a569097e1cb2.jpg",
            "file_type": ".jpg"
        },
        "AdministratorFax": {
            "code": "+251",
            "number": ""
        },
        "AdministratorCity": {
            "am": "Arada",
            "en": "Arada"
        },
        "AdministratorTown": {
            "am": "AA",
            "en": "AA"
        },
        "AdministratorEmail": "weyinahetwebutu@gmail.com",
        "AdministratorState": {
            "am": "AA",
            "en": "AA"
        },
        "EconomicOperatorId": "c01b6d03-c10e-47d4-827d-1818afbe87d5",
        "AdministratorMobile": {
            "code": "+251",
            "number": "911368212"
        },
        "AdministratorPostal": "",
        "AdministratorStreet": null,
        "IdentificationNumber": null,
        "AdministratorDistrict": {
            "am": "04",
            "en": "04"
        },
        "AdministratorTelephone": {
            "code": "+251",
            "number": ""
        },
        "IdentificationDocument": {},
        "AdministratorHouseNumber": "209",
        "IdentificationDocumentType": null
    },
    "debarmentReason": null,
    "debarmentDate": null,
    "debarredUntil": null,
    "timestamp": "2024-05-24T13:49:38.386033"
}

const listDetail = {
    economicOperatorOrganization: {
      id: '0884f38e-7eb6-49c7-958d-c787787ed16c',
      economicOperatorId: '2c361a97-e575-4940-9396-c1e04f857d27',
      organizationId: 'bf35fc8d-7a1c-4121-a651-8b2cbd998b2d',
      organizationName: { am: 'ታምሩ ሙላቱ እሪፎ', en: 'TAMIRU MULATU ERIFO' },
      organizationCode: 'U3RiY18213',
      taxIdentificationNumber: '0011379457',
      userId: 'f13a380f-cb39-4b7c-8c8e-acc43008b4bc',
      userName: { lastName: [Object], firstName: [Object] }
    },
    debarredEconomicOperator: null,
    id: '2c361a97-e575-4940-9396-c1e04f857d27',
    userId: '069c018e-5abc-4722-9052-b97503132047',
    isBlocked: false,
    isActive: false,
    dateOfRegistration: '2024-05-23T06:26:36',
    status: 'accepted',
    isSubmit: true,
    renewalCount: 0,
    revisionCount: 0,
    supplierProfile: '{}',
    taxIdentificationNumber: '0011379457',
    egpRegistrationNumber: '2305240015',
    parentEconomicOperatorId: '00000000-0000-0000-0000-000000000000',
    basicRegistration: {
      id: '92d02c15-5648-4ed8-942a-1270bbaee60d',
      economicOperatorId: '2c361a97-e575-4940-9396-c1e04f857d27',
      userId: '069c018e-5abc-4722-9052-b97503132047',
      legalFormOfEntity: { id: '1', name: [Object], shortName: 'SP' },
      tradeRegistrationNumber: 'SNNPR/BTIUD/1/0010121/2014',
      entityName: { am: 'ታምሩ ሙላቱ እሪፎ', en: 'TAMIRU MULATU ERIFO' },
      taxIdentificationNumber: '0011379457',
      egpRegistrationNumber: null,
      hasTin: true,
      dateOfRegistration: '2024-05-23T00:00:00',
      dateOfExpiration: '2025-05-23T00:00:00',
      tradeRegistrationDate: '2022-03-18T00:00:00',
      vatRegistrationDate: '2019-09-02T00:00:00',
      registeringAgency: { am: 'የንግድና ኢንዱስትሪ ሚኒስቴር', en: 'Ministry of Trade and Industry' },
      countryOfRegistration: 'Ethiopia',
      vatRegistrationNumber: '15080960914',
      capital: { amount: 300000, currency: 'ETB' },
      managers: [ [Object] ],
      registrationCertificate: {},
      vatCertificate: {},
      tinCertificate: {}
    },
    businessAddress: null,
    ownershipAndManagement: null,
    administrator: {
      id: '40223a6e-f24f-400c-bf3f-1921ebf7e0de',
      userId: '069c018e-5abc-4722-9052-b97503132047',
      economicOperatorId: '2c361a97-e575-4940-9396-c1e04f857d27',
      title: 'Mr',
      fullName: { am: 'Tamiru mulatu', en: 'Tamiru mulatu ' },
      identificationDocumentType: null,
      identificationNumber: null,
      nationality: 'Ethiopia',
      designation: { am: 'manager', en: 'manager' },
      administratorState: { am: 'SNNPR', en: 'SNNPR' },
      administratorCity: { am: 'kambata', en: 'kambata' },
      administratorTown: { am: 'kambata tambaro', en: 'kambata tambaro' },
      administratorDistrict: { am: 'kambata tambaro', en: 'kambata tambaro' },
      administratorStreet: null,
      administratorHouseNumber: 'new',
      administratorPostal: '',
      administratorMobile: { code: '+251', number: '964073878' },
      administratorTelephone: { code: '+251', number: '' },
      administratorFax: { code: '+251', number: '' },
      administratorEmail: 'mulugetabanda2013@gmail.com',
      isDelegated: false,
      powerOfAttorney: {
        file_name: 'license.png',
        file_path: '3873bea1-3264-44f5-b009-7b9760d29f77.png',
        file_type: '.png'
      },
      identificationDocument: {}
    },
    lineOfBusiness: {
      id: 'fcbe34b5-edc3-4fe1-9f08-5c74d4140f14',
      economicOperatorId: '2c361a97-e575-4940-9396-c1e04f857d27',
      businessCategory: null,
      areaOfBusiness: [ 'Works', 'Goods' ],
      businessClassifications: [ [Object], [Object], [Object] ]
    },
    bankInformation: [
      {
        id: 'd385f2c1-3150-4391-9ca6-461920d51e34',
        economicOperatorId: '2c361a97-e575-4940-9396-c1e04f857d27',
        bankName: [Object],
        branch: [Object],
        swiftCode: '',
        accountNumber: '1000346034746'
      }
    ],
    businessLicenses: [
      {
        id: '8cad05c1-bffc-4f06-b772-317b6735e438',
        userId: '069c018e-5abc-4722-9052-b97503132047',
        economicOperatorId: '2c361a97-e575-4940-9396-c1e04f857d27',
        tradeName: [Object],
        tradeLicenseNumber: 'SNNPR/BTIUD/06/538/1920696/2014',
        fieldOfBusiness: [Object],
        dateOfIssue: '2022-03-18T00:00:00',
        renewalDate: '2024-04-25T00:00:00',
        dateOfExpiry: '2024-07-07T00:00:00',
        licenseIssuingAgency: [Object],
        licenseCertificate: {},
        address: [Array],
        geographicLocation: null,
        managers: [Array],
        status: 'Active',
        eTradeStatus: 'Active and Its not renewal time',
        isPinned: false
      },
      {
        id: 'f0a3bb5b-7501-46d1-9a42-043478597054',
        userId: '069c018e-5abc-4722-9052-b97503132047',
        economicOperatorId: '2c361a97-e575-4940-9396-c1e04f857d27',
        tradeName: [Object],
        tradeLicenseNumber: 'SNNPR/BTIUD/06/538/4165708/2015',
        fieldOfBusiness: [Object],
        dateOfIssue: '2022-11-08T00:00:00',
        renewalDate: '2022-11-08T00:00:00',
        dateOfExpiry: '2023-07-07T00:00:00',
        licenseIssuingAgency: [Object],
        licenseCertificate: {},
        address: [Array],
        geographicLocation: null,
        managers: [Array],
        status: 'Active',
        eTradeStatus: 'Active and It can be renewed with fine',
        isPinned: false
      }
    ],
    competencies: [
      {
        id: '356b8b55-3396-416f-abb3-6950351fc67e',
        economicOperatorId: '2c361a97-e575-4940-9396-c1e04f857d27',
        competencyCertificateNumber: 'CON/25229',
        competencyLevel: [Object],
        licenseIssuingAgency: [Object],
        dateOfIssue: '2024-05-22T21:00:00',
        validUntil: '2025-05-21T21:00:00',
        competencyCertificate: [Object]
      }
    ],
    canRevise: false,
    canRenew: false
  }
const getDate = "https://production.egp.gov.et/po-gw/cms/api/economic-operators/get-current-server-time"
let total = 0
let suppliers = []

const getSecret = async ()=>{
  const res = await fetchData(getDate)
  const date = new Date(res)
  return date.getTime()
}

const fetchData = async (url)=>{
    try {
    const response = await fetch(url, {
        method: "GET", // or 'PUT'
        // headers: {
        //   "Content-Type": "application/json",
        // },
    });

    return response.json();
    // return result;
    } catch (error) {
    console.error("Error:", error);
    // notifySeledaAdmin("Error scraping egp: " + url + "\n" + error);
    return null;
    }

}

const getSuplier =async (skip, top)=>{

  const secret = await getSecret()
  const token = getSecreteToken(secret)
  // 8cceb4e55db5311275b7a56f99a00f2a6298eef9fb9333cfaf8477a78257b371
  const url = `https://production.egp.gov.et/po-gw/cms/api/economic-operators/get-economic-operators-portal?skip=${skip}&top=${top}&orderBy%5B0%5D.field=dateOfRegistration&orderBy%5B0%5D.direction=desc&filter%5B0%5D%5B0%5D.field=status&filter%5B0%5D%5B0%5D.operator==&filter%5B0%5D%5B0%5D.value=active&secretToken=${token}&secretCode=${secret}`
  const list = await fetchData(url)
  const eo = await fetchData(`https://production.egp.gov.et/po-gw/registration/api/economic-operators/get-supplier-by-id/${list.items[0].economicOperatorId}`)
  total = list.total 
  list.items.forEach(async l=> {
    const eo = await fetchData(`https://production.egp.gov.et/po-gw/registration/api/economic-operators/get-supplier-by-id/${l.economicOperatorId}`)
    // console.log(eo.economicOperatorOrganization.organizationName.am)
    // eo.businessLicenses.forEach(b=> console.log("      Regular ", b.address.find(x => x.RegularPhone !== undefined).RegularPhone.am, "Mobile: ", b.address.find(x => x.MobilePhone !== undefined ).MobilePhone.am))
    // suppliers.push(eo)
    eo.basicRegistration.managers.photo = "deleted"
    eo.basicRegistration.businessLicenses?.forEach((bl) = bl.managers.photo = "deleted")
    
    save(eo)
})
}

function getSecreteToken(time) {
  const encryptionKey = "aSg8HsauuHdjK6O04hCXO0u8JHpLMWpZ"
  secretToken = hash(`${time}${encryptionKey}`)//Object(A.SHA256)(`1716640277290${encryptionKey}`)
  return secretToken
}

const startScrapping = async ()=>{
    const top = 10
    ls = await getSuplier(0, top)
    suppliers.concat([ls])
    const loop = Math.ceil(total / top)
    for (let index = 1; index < loop; index++) {
        console.log("🚀 ~ startScrapping ~ page: ", index)
        await getSuplier(top * index, top)
        console.log("🚀 ~ startScrapping ~ suppliers:", suppliers.length)
    }
}

const setValue = (fn, value) => 
    fs.readFile(fn)
      .then(body => JSON.parse(body))
      .then(json => {
        // manipulate your data here
        json.value = value
        return json
      })
      .then(json => JSON.stringify(json))
      .then(body => fs.writeFile(fn, body))
      .catch(error => console.warn(error))

function save(item){
    const path = "suppliers.json"
if (!fs.existsSync(path)) {
    fs.writeFileSync(path, JSON.stringify([item]));
} else {
    var data = fs.readFileSync(path, 'utf8');  
    var list = (data.length) ? JSON.parse(data): [];
    if (list instanceof Array) list.push(item)
    else list = [item]  
    fs.writeFileSync(path, JSON.stringify(list));
}
}

startScrapping()


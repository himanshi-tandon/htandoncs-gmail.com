import { CFTCategoryModel } from './cft-category.model';
import { CFTPartcodeModel } from './cft-partcode.model';
import { CFTMilestoneModel } from './cftmilestones.model';

export class CFTDetailsModel {
    id: number;
    country: string;
    scrNo: string;
    scrDate: string;
    complaint: string;
    modelName: string;
    scr_ChassisNo: string;
    engineNo: string;
    dateOfSale: string;
    uploadedDate: string;
    hoursWorked: number;
    observation: string;
    dealerAction: string;
    continent: string;
    distributor: string;
    distributorCode: string;
    dealer: string;
    dealerCode: string;
    scrRelated: string;
    seviority: string;
    tractorStatus: string;
    tractorOffRoad: string;
    statusAstDistributorEnd: string;
    reapeatComplaint: string;
    areaofOperation: string;
    attachment: string;
    aggregate: string;
    subAggregate: string;
    failureDate: string;
    rcabyServieTeam: string;
    complaintStatusByServiceTeam: string;
    scr_SCRCode: string;
    targetDate: Date;
    cftCreationDate: Date;
    cftCategoryType: CFTCategoryModel;
    revisedDate: Date;
    revisionNo: number;
    revisedBy: string
    approvedBy: string;
    createdBy: string;
    cftNo: string;
    status: string;
    parts: CFTPartcodeModel[];
    cftMileStoneData: CFTMilestoneModel[];
}

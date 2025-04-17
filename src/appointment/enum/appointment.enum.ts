export enum AppointmentType {
  TEXT = 0,
  CALL = 1,
}

export const AppointmentText = {
  [AppointmentType.TEXT]: 'TEXT',
  [AppointmentType.CALL]: 'CALL',
};

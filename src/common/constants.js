export const connectorStatus = {
  Available: 'Available',
  Preparing: 'Preparing',
  Charging: 'Charging',
  SuspendedEV: 'SuspendedEV',
  SuspendedEVSE: 'SuspendedEVSE',
  Finishing: 'Finishing',
  Reserved: 'Reserved',
  Unavailable: 'Unavailable',
  Faulted: 'Faulted',
}

export const logTypes = {
  socket: { text: 'SOCKET', color: 'black' },
  message: { text: 'RECEIVE', color: '#4caf50' },
  send: { text: 'SEND', color: '#1976d2' },
  info: { text: 'INFO', color: '#9c27b0' },
  error: { text: 'ERROR', color: 'red' },
  request: { text: 'REQUEST', color: '#9c27b0' },
}


export const connectorData = {
  Available: { text: 'Available', backgroundColor: '#4caf50', color: 'white', status: connectorStatus.Available },
  Preparing: { text: 'Preparing', backgroundColor: '#009688', color: 'white', status: connectorStatus.Preparing },
  Charging: { text: 'Charging', backgroundColor: '#3f51b5', color: 'white',  status: connectorStatus.Charging },
  SuspendedEV: { text: 'Suspended EV', backgroundColor: '#9c27b0', color: 'white',  status: connectorStatus.SuspendedEV },
  SuspendedEVSE: { text: 'Suspended EVSE', backgroundColor: '#9c27b0', color: 'white',  status: connectorStatus.SuspendedEVSE },
  Finishing: { text: 'Finishing', backgroundColor: '#9c27b0', color: 'white',  status: connectorStatus.Finishing },
  Reserved: { text: 'Reserved', backgroundColor: '#ffc107', color: 'black',  status: connectorStatus.Reserved },
  Unavailable: { text: 'Unavailable', backgroundColor: '#f57c00', color: 'white',  status: connectorStatus.Unavailable },
  Faulted: { text: 'Faulted', backgroundColor: 'red', color: 'white',  status: connectorStatus.Faulted },
}


export const stopReason = {
  EmergencyStop: 'EmergencyStop',
  EVDisconnected: 'EVDisconnected',
  HardReset: 'HardReset',
  Local: 'Local',
  Other: 'Other',
  PowerLoss: 'PowerLoss',
  Reboot: 'Reboot',
  Remote: 'Remote',
  SoftReset: 'SoftReset',
  UnlockCommand: 'UnlockCommand',
  DeAuthorized: 'DeAuthorized'
}

export const commands = []

export const activeLog = []
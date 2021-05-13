import * as AWS from 'aws-sdk/global';
import * as Chime from 'aws-sdk/clients/chime';
import {
    ConsoleLogger,
    DefaultDeviceController,
    DefaultMeetingSession,
    LogLevel,
    MeetingSessionConfiguration
  } from 'amazon-chime-sdk-js';
  
  const logger = new ConsoleLogger('MyLogger', LogLevel.INFO);
  const deviceController = new DefaultDeviceController(logger);
  const chime = new Chime({ region: 'us-east-1' });
  const endpoint = await chime.getMessagingSessionEndpoint().promise();

  
  const meetingResponse = "";
  const attendeeResponse = "";
  const configuration = new MeetingSessionConfiguration(meetingResponse, attendeeResponse);
  
  const meetingSession = new DefaultMeetingSession(
    configuration,
    logger,
    deviceController
  );

  const userArn ="" ;
const sessionId = "";
const configuration = new MessagingSessionConfiguration(userArn, sessionId, endpoint.Endpoint.Url, chime, AWS);
const messagingSession = new DefaultMessagingSession(configuration, logger);

const audioInputDevices = await meetingSession.audioVideo.listAudioInputDevices();
const audioOutputDevices = await meetingSession.audioVideo.listAudioOutputDevices();
const videoInputDevices = await meetingSession.audioVideo.listVideoInputDevices();


audioInputDevices.forEach(mediaDeviceInfo => {
  console.log(`Device ID: ${mediaDeviceInfo.deviceId} Microphone: ${mediaDeviceInfo.label}`);
});
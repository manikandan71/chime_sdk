const AWS = require('aws-sdk');
const { v4: uuid } = require('uuid');

const chime = new AWS.Chime({ region: 'us-east-1' });
chime.endpoint = new AWS.Endpoint('https://service.chime.aws.amazon.com');

const meetingResponse = await chime.createMeeting({
  ClientRequestToken: uuid(),
  MediaRegion: 'us-west-2' 
}).promise();

const attendeeResponse = await chime.createAttendee({
  MeetingId: meetingResponse.Meeting.MeetingId,
  ExternalUserId: uuid() 
}).promise();
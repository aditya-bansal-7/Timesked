# Time sked
TimeSked, AI-Powered Scheduling Assistant on Telegram
Manually inputting event details into calendars can be a very time-consuming task. This was an issue I was facing throughout my first year at college. To address this, I've been developing TimeSked, a Telegram bot that simplifies event scheduling through intelligent automation and seamless Google Calendar integration.

Key Features of TimeSked :
Extract event information: Simply send TimeSked a message containing event information, and it will automatically extract the essential details.
Flexible Calendar Integration: Receive a shareable Google Calendar event link or link your calendar to let TimeSked directly add events to your calendar.
Get weather insights: TimeSked also suggests dressing attire based on the weather at the event location on the day of the event.
Engage in chat conversations: You can engage in a chat with TimeSked about your upcoming events.
Easy Event Management: View upcoming events, regenerate event details and delete events, all within Telegram.
Powered by :
  FastAPI (Python) for the webhook server
  Firebase for database management
  Hosted on Koyeb
  Gemini 1.5 Flash API for extracting event details
  Weather data from Visual Crossing API
  Telegram Core API for bot integration
  Google Calendar V3 API for seamless managing Google Calendar

# Capturing the packet of File Upload in Wireshark

Here is the detailed report on uploading the file and capturing the packet in Wireshark

## Requirements
 
-Wireshark is installed

-UploadFile App is running

## Steps followed 

### 1. Wireshark setup

  -Opened Wireshark

  -Selected Adapter for loopback traffic capture interface

  ![loopback Traffic](images/wireshark1.png)


### 2. Applied http in display filter bar

   -In the filter bar I typed 'http' and entered

   -![http entered in filterbar](images/wireshark2.png)

   -![http requesting](images/wireshark3.png)


### 3. Upload a file in the App

   -![myApp UI](images/wireshark4.png)

   -![upload successful file](images/wireshark5.png)

### 4. Locate the post request in the wireshark

   -Here are 2 post request and I selected 1 POST resuest (PDF) 
   
   -![post request](images/wireshark6.png)
 
### 5. -![post request](images/wireshark6.png)

   --![post request](images/wireshark7.png)
   here in this image,on the very bottom center we can see the frame,resemmbled tcp bytes size
   
   --![post request](images/wireshark8.png)

   ** -Here we can see the total file size is 11596385 bytes ** 
 
### 6.Followed tcp stream by right clicking and selecting tcp stream

  --![post request](images/wireshark9.png)
  After analyzing it,we came to know the total size of entire conversation between uploading is 11mb ,709 clients packets and 2 server packet and the whole conversation is shown in ASCII

This is the overview of capturing the file upload in wireshark



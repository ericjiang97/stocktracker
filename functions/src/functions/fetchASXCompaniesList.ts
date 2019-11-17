import * as functions from "firebase-functions";
import admin from "firebase-admin";
import { StringStream } from "scramjet";
import request from "request";

admin.initializeApp(functions.config().firebase);

export const fetchASXCompaniesList = functions.pubsub
  .schedule("0 1 * * *")
  .timeZone("Australia/Melbourne")
  .onRun(async () => {
    await request
      .get("https://www.asx.com.au/asx/research/ASXListedCompanies.csv")
      .pipe(new StringStream())
      .CSVParse()
      .consume((object: any) => console.log(`Object: ${object}`))
      .then(() => console.log("all done!"));
    return null;
  });

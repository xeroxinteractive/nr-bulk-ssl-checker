const getTargets=async ()=>{

    let longList=[
        "docs.google.com",
        "s3.eu-west-1.amazonaws.com",
        "api.mailgun.net",
        "storage.googleapis.com",
        "sqs.us-east-1.amazonaws.com",
        "openexchangerates.org",
        "api.sandbox.braintreegateway.com",
        "dynamodb.us-east-1.amazonaws.com",
        "api.twitter.com",
        "rest.nexmo.com",
        "dynamodb.us-west-2.amazonaws.com",
        "api.braintreegateway.com",
        "api.mapbox.com",
        "vision.googleapis.com",
        "onlinetools.ups.com",
        "stream.launchdarkly.com",
        "s3.amazonaws.com",
        "sqs.eu-central-1.amazonaws.com",
        "facebook.com",
        "maps.google.com",
        "sns.eu-west-1.amazonaws.com",
        "email.us-east-1.amazonaws.com",
        "sqs.ap-southeast-1.amazonaws.com",
        "api.pwnedpasswords.com",
        "cloudfront.amazonaws.com",
        "api.linkedin.com",
        "res.cloudinary.com",
        "google.com",
        "services.postcodeanywhere.co.uk",
        "email.us-west-2.amazonaws.com",
        "kinesis.eu-west-1.amazonaws.com",
        "ec2.us-west-2.amazonaws.com",
        "production.plaid.com",
        "states.us-east-1.amazonaws.com",
        "rest.avatax.com",
        "api.wordpress.org",
        "firehose.us-east-1.amazonaws.com",
        "ec2.us-east-1.amazonaws.com",
        "api.twilio.com",
        "ssm.us-east-2.amazonaws.com",
        "api.amplitude.com",
        "s3.us-west-2.amazonaws.com",
        "sts.amazonaws.com",
        "sqs.eu-west-1.amazonaws.com",
        "api.mixpanel.com",
        "s3.eu-central-1.amazonaws.com",
        "s3-us-west-1.amazonaws.com",
        "sqs.us-west-2.amazonaws.com",
        "go.urbanairship.com",
        "email.eu-west-1.amazonaws.com",
        "buy.itunes.apple.com",
        "rest.iad-03.braze.com",
        "monitoring.us-west-2.amazonaws.com",
        "mandrillapp.com",
        "test.salesforce.com",
        "ssm.us-west-2.amazonaws.com",
        "outlook.office.com",
        "mws.amazonservices.com",
        "api.sendgrid.com",
        "hooks.slack.com",
        "graph.microsoft.com",
        "fcm.googleapis.com",
        "exacttargetapis.com",
        "api.paypal.com",
        "googleapis.com",
        "pubsub.googleapis.com",
        "sqs.ap-south-1.amazonaws.com",
        "api.rollbar.com",
        "lambda.eu-central-1.amazonaws.com",
        "api.fastly.com",
        "kinesis.us-east-1.amazonaws.com",
        "api.airbrake.io",
        "pal-test.adyen.com",
        "rest.zuora.com",
        "lookups.twilio.com",
        "monitoring.us-east-1.amazonaws.com",
        "sqs.us-west-1.amazonaws.com",
        "s3-ap-southeast-1.amazonaws.com",
        "s3-us-west-2.amazonaws.com",
        "s3-eu-west-1.amazonaws.com",
        "sqs.sa-east-1.amazonaws.com",
        "accounts.google.com",
        "sns.ap-southeast-1.amazonaws.com",
        "ics2ws.ic3.com",
        "quickbooks.api.intuit.com",
        "sentry.io",
        "dynamodb.eu-west-1.amazonaws.com",
        "sqs.ap-northeast-1.amazonaws.com",
        "s3.ap-southeast-2.amazonaws.com",
        "ws.fedex.com",
        "linkedin.com",
        "youtube.com",
        "ics2wsa.ic3.com",
        "dynamodb.ap-southeast-2.amazonaws.com",
        "ssm.eu-west-1.amazonaws.com",
        "api-ssl.bitly.com",
        "api.branch.io",
        "api.intercom.io",
        "logs-01.loggly.com",
        "auth.exacttargetapis.com",
        "sns.ap-southeast-2.amazonaws.com",
        "graph.facebook.com",
        "login.microsoftonline.com",
        "api.postmarkapp.com",
        "us-street.api.smartystreets.com",
        "queue.amazonaws.com",
        "api.stripe.com",
        "login.salesforce.com",
        "instagram.com",
        "sns.eu-central-1.amazonaws.com",
        "notify.bugsnag.com",
        "recaptcha.net",
        "api.cloudinary.com",
        "insights-collector.newrelic.com",
        "avatax.avalara.net",
        "api.segment.io",
        "sns.us-east-2.amazonaws.com",
        "api.newrelic.com",
        "h-api.online-metrix.net",
        "dynamodb.ap-southeast-1.amazonaws.com",
        "api-3t.paypal.com",
        "secure.shippingapis.com",
        "fonts.googleapis.com",
        "onesignal.com",
        "api.sparkpost.com",
        "cms.api.brightcove.com",
        "route53.amazonaws.com",
        "github.com",
        "lh6.googleusercontent.com",
        "preview.contentful.com",
        "ssm.us-east-1.amazonaws.com",
        "firebasedynamiclinks.googleapis.com",
        "oauth.brightcove.com",
        "vimeo.com",
        "api.authy.com",
        "cdn.optimizely.com",
        "api.marketplace.ibm.com",
        "api.hubapi.com",
        "api.instagram.com",
        "slack.com",
        "sheets.googleapis.com",
        "sns.us-west-2.amazonaws.com",
        "appleid.apple.com",
        "production.shippingapis.com",
        "api.pusherapp.com",
        "checkout-test.adyen.com",
        "events.launchdarkly.com",
        "dynamodb.eu-central-1.amazonaws.com",
        "insights-api.newrelic.com",
        "lh3.googleusercontent.com",
        "service.prerender.io",
        "kinesis.us-west-2.amazonaws.com",
        "dynamodb.ap-northeast-1.amazonaws.com",
        "packagist.org",
        "maps.googleapis.com",
        "hooks.zapier.com",
        "login.windows.net",
        "lh5.googleusercontent.com",
        "us-west-2.queue.amazonaws.com",
        "platform-lookaside.fbsbx.com",
        "lambda.us-east-1.amazonaws.com",
        "webhook.site",
        "api.bazaarvoice.com",
        "notifications.magentocommerce.com",
        "ssm.eu-central-1.amazonaws.com",
        "states.us-west-2.amazonaws.com",
        "cdn.contentful.com",
        "api.github.com",
        "outlook.office365.com",
        "google-analytics.com",
        "api.siftscience.com",
        "iam.cloud.ibm.com",
        "log-api.newrelic.com",
        "track.customer.io",
        "oauth2.googleapis.com",
        "secure.worldpay.com",
        "api.razorpay.com",
        "sqs.us-east-2.amazonaws.com",
        "sns.us-east-1.amazonaws.com",
        "lambda.eu-west-1.amazonaws.com",
        "rest.apisandbox.zuora.com",
        "lambda.us-west-2.amazonaws.com",
        "iam.amazonaws.com",
        "pal-live.adyen.com",
        "sqs.ap-southeast-2.amazonaws.com"
      ]

      let longListData=longList.map((i)=>{
          return {
              name: i,
              url: i
          }
      })
    return longListData
}



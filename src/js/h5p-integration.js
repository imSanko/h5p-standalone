const integration = {
  saveFreq: false,
  postUserStatistics: false,
  ajax: {
    setFinished: undefined,
  },
  l10n: {
    H5P: {
      "fullscreen": "Fullscreen",
      "disableFullscreen": "Disable fullscreen",
      "download": "Download",
      "copyrights": "Rights of use",
      "embed": "Embed",
      "size": "Size",
      "showAdvanced": "Show advanced",
      "hideAdvanced": "Hide advanced",
      "advancedHelp": "Include this script on your website if you want dynamic sizing of the embedded content:",
      "copyrightInformation": "Rights of use",
      "close": "Close",
      "title": "Title",
      "author": "Author",
      "year": "Year",
      "source": "Source",
      "license": "License",
      "thumbnail": "Thumbnail",
      "noCopyrights": "No copyright information available for this content.",
      "reuse": "Reuse",
      "reuseContent": "Reuse Content",
      "reuseDescription": "Reuse this content.",
      "downloadDescription": "Download this content as a H5P file.",
      "copyrightsDescription": "View copyright information for this content.",
      "embedDescription": "View the embed code for this content.",
      "h5pDescription": "Visit H5P.org to check out more cool content.",
      "contentChanged": "This content has changed since you last used it.",
      "startingOver": "You'll be starting over.",
      "by": "by",
      "showMore": "Show more",
      "showLess": "Show less",
      "subLevel": "Sublevel",
      "confirmDialogHeader": "Confirm action",
      "confirmDialogBody": "Please confirm that you wish to proceed. This action is not reversible.",
      "cancelLabel": "Cancel",
      "confirmLabel": "Confirm",
      "licenseU": "Undisclosed",
      "licenseCCBY": "Attribution",
      "licenseCCBYSA": "Attribution-ShareAlike",
      "licenseCCBYND": "Attribution-NoDerivs",
      "licenseCCBYNC": "Attribution-NonCommercial",
      "licenseCCBYNCSA": "Attribution-NonCommercial-ShareAlike",
      "licenseCCBYNCND": "Attribution-NonCommercial-NoDerivs",
      "licenseCC40": "4.0 International",
      "licenseCC30": "3.0 Unported",
      "licenseCC25": "2.5 Generic",
      "licenseCC20": "2.0 Generic",
      "licenseCC10": "1.0 Generic",
      "licenseGPL": "General Public License",
      "licenseV3": "Version 3",
      "licenseV2": "Version 2",
      "licenseV1": "Version 1",
      "licensePD": "Public Domain",
      "licenseCC010": "CC0 1.0 Universal (CC0 1.0) Public Domain Dedication",
      "licensePDM": "Public Domain Mark",
      "licenseC": "Copyright",
      "contentType": "Content Type",
      "licenseExtras": "License Extras",
      "changes": "Changelog",
      "contentCopied": "Content is copied to the clipboard",
      "connectionLost": "Connection lost. Results will be stored and sent when you regain connection.",
      "connectionReestablished": "Connection reestablished.",
      "resubmitScores": "Attempting to submit stored results.",
      "offlineDialogHeader": "Your connection to the server was lost",
      "offlineDialogBody": "We were unable to send information about your completion of this task. Please check your internet connection.",
      "offlineDialogRetryMessage": "Retrying in :num....",
      "offlineDialogRetryButtonLabel": "Retry now",
      "offlineSuccessfulSubmit": "Successfully submitted results."
    }
  }
};

window.H5PIntegration = window.H5PIntegration ? { ...window.H5PIntegration, ...integration } : integration;
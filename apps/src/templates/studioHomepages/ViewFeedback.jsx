import React from 'react';
import i18n from '@cdo/locale';
import BorderedCallToAction from './BorderedCallToAction';

const ViewFeedback = () => (
  <BorderedCallToAction
    type="feedback"
    headingText={i18n.viewFeedback()}
    descriptionText={i18n.viewFeedbackDescription()}
    buttonText={i18n.viewFeedbackButton()}
    buttonUrl="/feedback"
    solidBorder={true}
  />
);
export default ViewFeedback;

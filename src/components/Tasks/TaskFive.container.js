import React from "react";

class TaskFive extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>Tell us where you'd look for advice</h1>
        <p>
          You're in the Benefits section of the public website and you see this
          page title:
        </p>

        <h3>If you're a UK citizen returning from abroad</h3>

        <fieldset className="c-fieldset">
          <legend className="c-label">
            Tell us what you'd expect to find on the page
            <span className="c-label__tag c-label__tag--optional">
              optional
            </span>
            <span className="c-label__metainfo">
              You can choose more than one answer.
            </span>
          </legend>

          <div className="c-fieldset__item">
            <div className="c-checkbox">
              <input
                id="howTimeAbroadAffectsBenefitClaims"
                value="howTimeAbroadAffectsBenefitClaims"
                name="returningFromAbroadPageLocation"
                type="checkbox"
              />
              <label htmlFor="howTimeAbroadAffectsBenefitClaims">
                How time spent abroad affects benefit claims
              </label>
            </div>
          </div>

          <div className="c-fieldset__item">
            <div className="c-checkbox">
              <input
                id="stepsWhenReturningToUk"
                value="stepsWhenReturningToUk"
                name="returningFromAbroadPageLocation"
                type="checkbox"
              />
              <label htmlFor="stepsWhenReturningToUk">
                Steps to take when returning to the UK
              </label>
            </div>
          </div>

          <div className="c-fieldset__item">
            <div className="c-checkbox">
              <input
                id="infoForIrishCitizens"
                value="infoForIrishCitizens"
                name="returningFromAbroadPageLocation"
                type="checkbox"
              />
              <label htmlFor="infoForIrishCitizens">
                Information for Irish citizens
              </label>
            </div>
          </div>

          <div className="c-fieldset__item">
            <div className="c-checkbox">
              <input
                id="eligibilityCriteriaForBenefits"
                value="eligibilityCriteriaForBenefits"
                name="returningFromAbroadPageLocation"
                type="checkbox"
              />
              <label htmlFor="eligibilityCriteriaForBenefits">
                Eligibility criteria for benefits
              </label>
            </div>
          </div>

          <div className="c-fieldset__item">
            <div className="c-checkbox">
              <input
                id="other"
                value="other"
                name="returningFromAbroadPageLocation"
                type="checkbox"
              />
              <label htmlFor="other">Other</label>
            </div>
          </div>
        </fieldset>
      </React.Fragment>
    );
  }
}

export default TaskFive;
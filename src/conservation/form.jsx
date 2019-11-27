export default (configContext) => {
  const {
    React,
  } = configContext.lib;

  const {
    Cols,
    Col,
    Panel,
    Row,
  } = configContext.layoutComponents;

  const {
    Field,
  } = configContext.recordComponents;

  return (
    <Panel name="livingplant" collapsible collapsed>
      <Panel name="fertilization" collapsible collapsed>
        <Field name="fertilizationGroupList" subpath="ns2:conservation_livingplant">
          <Field name="fertilizationGroup">
            <Panel>
              <Row>
                <Field name="fertilizerUsed" />
                <Field name="appliedBy" />
              </Row>

              <Row>
                <Field name="nitrogenPercent" />
                <Field name="phosphorusPercent" />
                <Field name="potassiumPercent" />
              </Row>

              <Cols>
                <Col>
                  <Field name="applicationDate" />
                  <Field name="amountApplied" />
                  <Field name="fertilizationNotes" />
                </Col>

                <Col>
                  <Field name="nextApplicationDate" />

                  <Field name="fertilizersToBeUsed">
                    <Field name="fertilizerToBeUsed" />
                  </Field>
                </Col>
              </Cols>
            </Panel>
          </Field>
        </Field>
      </Panel>

      <Panel name="pest" collapsible collapsed>
        <Field name="pestsAndDiseaseGroupList" subpath="ns2:conservation_livingplant">
          <Field name="pestsAndDiseaseGroup">
            <Panel>
              <Row>
                <Field name="pestOrDiseaseObserved" />
                <Field name="identifiedBy" />
              </Row>

              <Row>
                <Field name="dateObserved" />
                <Field name="treatmentDate" />
                <Field name="futureTreatmentDate" />
              </Row>

              <Cols>
                <Col>
                  <Field name="treatedBy" />
                  <Field name="treatedWith" />
                </Col>

                <Col>
                  <Field name="futureTreatment" />
                  <Field name="futureTreatmentNotes" />
                </Col>
              </Cols>
            </Panel>
          </Field>
        </Field>
      </Panel>

      <Panel name="repotting" collapsible collapsed>
        <Cols>
          <Col>
            <Row>
              <Field name="dateRepotted" subpath="ns2:conservation_livingplant" />
              <Field name="nextRepotting" subpath="ns2:conservation_livingplant" />
            </Row>

            <Field name="soilMix" subpath="ns2:conservation_livingplant" />
            <Field name="description" subpath="ns2:conservation_livingplant" />
          </Col>

          <Col>
            <Field name="container" subpath="ns2:conservation_livingplant" />
            <Field name="performedBy" subpath="ns2:conservation_livingplant" />
            <Field name="plannedTreatment" subpath="ns2:conservation_livingplant" />
          </Col>
        </Cols>
      </Panel>
    </Panel>
  );
};

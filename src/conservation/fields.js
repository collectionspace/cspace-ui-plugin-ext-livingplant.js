import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    AutocompleteInput,
    CompoundInput,
    DateInput,
    TextInput,
    TermPickerInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  const {
    DATA_TYPE_DATE,
    DATA_TYPE_FLOAT,
  } = configContext.dataTypes;

  return {
    'ns2:conservation_livingplant': {
      [config]: {
        service: {
          ns: 'http://collectionspace.org/services/conservation/domain/livingplant',
        },
      },
      fertilizationGroupList: {
        [config]: {
          view: {
            type: CompoundInput,
          },
        },
        fertilizationGroup: {
          [config]: {
            repeating: true,
            view: {
              type: CompoundInput,
            },
          },
          fertilizerUsed: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.conservation_livingplant.fertilizerUsed.name',
                  defaultMessage: 'Fertilizer used',
                },
              }),
              view: {
                type: TermPickerInput,
                props: {
                  source: 'fertilizerused',
                },
              },
            },
          },
          nitrogenPercent: {
            [config]: {
              dataType: DATA_TYPE_FLOAT,
              messages: defineMessages({
                name: {
                  id: 'field.conservation_livingplant.nitrogenPercent.name',
                  defaultMessage: 'Nitrogen %',
                },
              }),
              view: {
                type: TextInput,
              },
            },
          },
          phosphorusPercent: {
            [config]: {
              dataType: DATA_TYPE_FLOAT,
              messages: defineMessages({
                name: {
                  id: 'field.conservation_livingplant.phosphorusPercent.name',
                  defaultMessage: 'Phosphorus %',
                },
              }),
              view: {
                type: TextInput,
              },
            },
          },
          potassiumPercent: {
            [config]: {
              dataType: DATA_TYPE_FLOAT,
              messages: defineMessages({
                name: {
                  id: 'field.conservation_livingplant.potassiumPercent.name',
                  defaultMessage: 'Potassium %',
                },
              }),
              view: {
                type: TextInput,
              },
            },
          },
          applicationDate: {
            [config]: {
              dataType: DATA_TYPE_DATE,
              messages: defineMessages({
                name: {
                  id: 'field.conservation_livingplant.applicationDate.name',
                  defaultMessage: 'Application date',
                },
              }),
              view: {
                type: DateInput,
              },
            },
          },
          appliedBy: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.conservation_livingplant.appliedBy.name',
                  defaultMessage: 'Applied by',
                },
              }),
              view: {
                type: AutocompleteInput,
                props: {
                  source: 'person/local,person/shared',
                },
              },
            },
          },
          amountApplied: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.conservation_livingplant.amountApplied.name',
                  defaultMessage: 'Amount applied',
                },
              }),
              view: {
                type: TextInput,
              },
            },
          },
          nextApplicationDate: {
            [config]: {
              dataType: DATA_TYPE_DATE,
              messages: defineMessages({
                name: {
                  id: 'field.conservation_livingplant.nextApplicationDate.name',
                  defaultMessage: 'Next application date',
                },
              }),
              view: {
                type: DateInput,
              },
            },
          },
          fertilizersToBeUsed: {
            [config]: {
              view: {
                type: CompoundInput,
              },
            },
            fertilizerToBeUsed: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.conservation_livingplant.fertilizerToBeUsed.name',
                    defaultMessage: 'Fertilizer to be used',
                  },
                }),
                repeating: true,
                view: {
                  type: TextInput,
                },
              },
            },
          },
          fertilizationNotes: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.conservation_livingplant.fertilizationNotes.name',
                  defaultMessage: 'Fertilization note',
                },
              }),
              view: {
                type: TextInput,
                props: {
                  multiline: true,
                },
              },
            },
          },
        },
      },
      pestsAndDiseaseGroupList: {
        [config]: {
          view: {
            type: CompoundInput,
          },
        },
        pestsAndDiseaseGroup: {
          [config]: {
            repeating: true,
            view: {
              type: CompoundInput,
            },
          },
          pestOrDiseaseObserved: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.conservation_livingplant.pestOrDiseaseObserved.name',
                  defaultMessage: 'Pest/disease observed',
                },
              }),
              view: {
                type: TermPickerInput,
                props: {
                  source: 'pestordiseaseobserved',
                },
              },
            },
          },
          identifiedBy: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.conservation_livingplant.identifiedBy.name',
                  defaultMessage: 'Identified by',
                },
                fullName: {
                  id: 'field.conservation_livingplant.identifiedBy.fullName',
                  defaultMessage: 'Pest/disease identified by',
                },
              }),
              view: {
                type: AutocompleteInput,
                props: {
                  source: 'person/local,person/shared',
                },
              },
            },
          },
          dateObserved: {
            [config]: {
              dataType: DATA_TYPE_DATE,
              messages: defineMessages({
                name: {
                  id: 'field.conservation_livingplant.dateObserved.name',
                  defaultMessage: 'Date observed',
                },
              }),
              view: {
                type: DateInput,
              },
            },
          },
          treatedWith: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.conservation_livingplant.treatedWith.name',
                  defaultMessage: 'Treated with',
                },
              }),
              view: {
                type: TextInput,
                props: {
                  multiline: true,
                },
              },
            },
          },
          treatedBy: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.conservation_livingplant.treatedBy.name',
                  defaultMessage: 'Treated by',
                },
              }),
              view: {
                type: AutocompleteInput,
                props: {
                  source: 'person/local,person/shared',
                },
              },
            },
          },
          treatmentDate: {
            [config]: {
              dataType: DATA_TYPE_DATE,
              messages: defineMessages({
                name: {
                  id: 'field.conservation_livingplant.treatmentDate.name',
                  defaultMessage: 'Treatment date',
                },
              }),
              view: {
                type: DateInput,
              },
            },
          },
          futureTreatment: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.conservation_livingplant.futureTreatment.name',
                  defaultMessage: 'Future treatment',
                },
              }),
              view: {
                type: TextInput,
              },
            },
          },
          futureTreatmentDate: {
            [config]: {
              dataType: DATA_TYPE_DATE,
              messages: defineMessages({
                name: {
                  id: 'field.conservation_livingplant.futureTreatmentDate.name',
                  defaultMessage: 'Future treatment date',
                },
              }),
              view: {
                type: DateInput,
              },
            },
          },
          futureTreatmentNotes: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.conservation_livingplant.futureTreatmentNotes.name',
                  defaultMessage: 'Future treatment note',
                },
              }),
              view: {
                type: TextInput,
                props: {
                  multiline: true,
                },
              },
            },
          },
        },
      },
      dateRepotted: {
        [config]: {
          dataType: DATA_TYPE_DATE,
          messages: defineMessages({
            name: {
              id: 'field.conservation_livingplant.dateRepotted.name',
              defaultMessage: 'Date repotted',
            },
          }),
          view: {
            type: DateInput,
          },
        },
      },
      performedBy: {
        [config]: {
          messages: defineMessages({
            name: {
              id: 'field.conservation_livingplant.performedBy.name',
              defaultMessage: 'Performed by',
            },
            fullName: {
              id: 'field.conservation_livingplant.performedBy.fullName',
              defaultMessage: 'Repotting performed by',
            },
          }),
          view: {
            type: AutocompleteInput,
            props: {
              source: 'person/local,person/shared',
            },
          },
        },
      },
      soilMix: {
        [config]: {
          messages: defineMessages({
            name: {
              id: 'field.conservation_livingplant.soilMix.name',
              defaultMessage: 'Soil mix',
            },
          }),
          view: {
            type: TermPickerInput,
            props: {
              source: 'soilmix',
            },
          },
        },
      },
      container: {
        [config]: {
          // This is defined/validated as a float in 4.5. Is this an error?
          dataType: DATA_TYPE_FLOAT,
          messages: defineMessages({
            name: {
              id: 'field.conservation_livingplant.container.name',
              defaultMessage: 'Container',
            },
          }),
          view: {
            type: TextInput,
          },
        },
      },
      description: {
        [config]: {
          messages: defineMessages({
            name: {
              id: 'field.conservation_livingplant.description.name',
              defaultMessage: 'Description',
            },
          }),
          view: {
            type: TextInput,
            props: {
              multiline: true,
            },
          },
        },
      },
      nextRepotting: {
        [config]: {
          dataType: DATA_TYPE_DATE,
          messages: defineMessages({
            name: {
              id: 'field.conservation_livingplant.nextRepotting.name',
              defaultMessage: 'Next repotting',
            },
          }),
          view: {
            type: DateInput,
          },
        },
      },
      plannedTreatment: {
        [config]: {
          messages: defineMessages({
            name: {
              id: 'field.conservation_livingplant.plannedTreatment.name',
              defaultMessage: 'Planned treatment',
            },
          }),
          view: {
            type: TextInput,
            props: {
              multiline: true,
            },
          },
        },
      },
    },
  };
};

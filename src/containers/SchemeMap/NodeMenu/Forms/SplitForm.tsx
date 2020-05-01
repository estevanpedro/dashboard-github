import React from 'react'
import { Formik, FieldArray, ArrayHelpers } from 'formik'

import {
  Button,
  Input,
  Slider,
  FlexContainer,
  FieldTitle,
  TextLink,
} from '../../../../components'

import { TitleType } from '../../options'

import { MenuButtonContainer, BorderContainer } from '../elements'
import { FormData, SplitData } from './types'

interface Props {
  onConfirm: (type: TitleType, FormData: FormData) => void
  initialState?: FormData | null
}

const SplitForm = ({ onConfirm, initialState = null }: Props) => {
  const splitInitialValues: SplitData = {
    type: 'split',
    name: 'Split',
    splits: [
      {
        name: 'Share 1',
        address: '',
        share: 100,
      },
    ],
  }

  const handleSubmit = (values: SplitData) => {
    onConfirm('Split', values)
  }

  return (
    <Formik
      initialValues={
        (initialState && initialState.type === 'split' && initialState) ||
        splitInitialValues
      }
      onSubmit={handleSubmit}
    >
      {({ values, handleChange, handleSubmit, setFieldValue }) => (
        <form onSubmit={handleSubmit}>
          <Input
            label='Split Name'
            name='name'
            value={values.name}
            onChange={handleChange}
            type='text'
            width='100%'
          />
          <FieldTitle>Shares</FieldTitle>
          <FieldArray
            name='splits'
            render={(arrayHelpers: ArrayHelpers) => (
              <FlexContainer direction='column'>
                {values.type === 'split' &&
                values.splits &&
                values.splits.length > 0
                  ? values.splits.map((split, index) => {
                      return (
                        <BorderContainer key={index}>
                          <FlexContainer
                            width='100%'
                            justify='space-between'
                            align='center'
                            margin='0 0 15px 0'
                          >
                            <FieldTitle margin='0'>{`Share ${index +
                              1}`}</FieldTitle>
                            {index ? (
                              <TextLink
                                onClick={() => arrayHelpers.remove(index)}
                              >
                                Remove
                              </TextLink>
                            ) : null}
                          </FlexContainer>
                          <Input
                            label='Share name'
                            name={`splits.${index}.name`}
                            value={split.name}
                            onChange={handleChange}
                            type='text'
                            width='100%'
                          />
                          <Input
                            label='Share address (optional)'
                            name={`splits.${index}.address`}
                            value={split.address}
                            onChange={handleChange}
                            type='text'
                            width='100%'
                          />
                          <Slider
                            name={`splits.${index}.share`}
                            value={split.share}
                            onChange={value =>
                              setFieldValue(`splits.${index}.share`, value)
                            }
                            formatLabel={value => `${value}%`}
                            minValue={0}
                            maxValue={100}
                          />
                        </BorderContainer>
                      )
                    })
                  : null}
                <TextLink
                  alignSelf='flex-end'
                  onClick={() =>
                    arrayHelpers.insert(
                      values.type === 'split' ? values.splits.length : 0,
                      {
                        name: `Share ${values.type === 'split' &&
                          values.splits.length + 1}`,
                        address: '',
                        share: 0,
                      }
                    )
                  }
                >
                  Add share
                </TextLink>
              </FlexContainer>
            )}
          />
          <MenuButtonContainer>
            <Button type='submit' align='flex-end' margin='20px 0'>
              Confirm
            </Button>
          </MenuButtonContainer>
        </form>
      )}
    </Formik>
  )
}

export default SplitForm

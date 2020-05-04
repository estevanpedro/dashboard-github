import React from 'react'
import { Formik, FormikErrors, FieldArray, ArrayHelpers } from 'formik'
import { useTranslation } from 'react-i18next'

import { Button, Input, FlexContainer, TextLink } from '../../../../components'

import { TitleType } from '../../options'

import { MenuButtonContainer, BorderContainer } from '../elements'
import { FormData, NotifyData } from './types'

interface Props {
  onConfirm: (title: TitleType, FormData: FormData) => void
  initialState?: FormData | null
}

const NotifyForm = ({ onConfirm, initialState = null }: Props) => {
  const { t } = useTranslation()
  const notifyInitialValues: FormData = {
    type: 'notify',
    name: 'Notify',
    info: {
      emails: [''],
    },
  }

  const handleSubmit = (values: NotifyData) => {
    onConfirm('Notify', values)
  }

  const validateNotify = (values: NotifyData) => {
    const { name, info } = values

    const errors: FormikErrors<NotifyData> = {}
    if (!name.length) {
      errors.name = t('errors.namecantbeempty')
    }

    const emailsErrors = info.emails.map((email: string) => {
      if (!email.length) {
        return t('errors.emailcantbeempty')
      }

      return ''
    })

    if (emailsErrors.find(error => error !== '')) {
      errors.info = { emails: emailsErrors }
    }

    return errors
  }

  return (
    <Formik
      initialValues={
        (initialState && initialState.type === 'notify' && initialState) ||
        notifyInitialValues
      }
      onSubmit={handleSubmit}
      validate={validateNotify}
    >
      {({ values, errors, touched, handleChange, handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Input
            label={t('notify.notifyName')}
            name='name'
            value={values.name}
            onChange={handleChange}
            type='text'
            width='100%'
            error={touched.name && errors.name ? errors.name : ''}
          />
          <FieldArray
            name='info.emails'
            render={(arrayHelpers: ArrayHelpers) => (
              <>
                <FlexContainer direction='column'>
                  {values.type === 'notify' &&
                    values.info.emails &&
                    values.info.emails.length > 0
                    ? values.info.emails.map((email, index) => {
                      return (
                        <BorderContainer key={index}>
                          <Input
                            label={`Email ${index + 1}`}
                            name={`info.emails.${index}`}
                            value={email}
                            onChange={handleChange}
                            type='email'
                            width='100%'
                            error={
                              touched.info &&
                                touched.info.emails &&
                                errors.info &&
                                errors.info.emails &&
                                errors.info.emails[index]
                                ? errors.info.emails[index]
                                : ''
                            }
                          />
                          {index ? (
                            <TextLink
                              onClick={() => arrayHelpers.remove(index)}
                            >
                              Remove
                              </TextLink>
                          ) : null}
                        </BorderContainer>
                      )
                    })
                    : null}
                </FlexContainer>
                <TextLink
                  alignSelf='flex-end'
                  onClick={() =>
                    arrayHelpers.insert(
                      values.type === 'notify' ? values.info.emails.length : 0,
                      ''
                    )
                  }
                >
                  {t('notify.addEmail')}
                </TextLink>
              </>
            )}
          />

          <MenuButtonContainer>
            <Button type='submit' align='flex-end' margin='20px 0'>
              {t('form.confirm')}
            </Button>
          </MenuButtonContainer>
        </form>
      )}
    </Formik>
  )
}

export default NotifyForm

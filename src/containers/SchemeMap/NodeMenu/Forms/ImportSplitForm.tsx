import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Formik, FormikErrors } from 'formik'
import { useTranslation } from 'react-i18next'

import { Button, Input } from '../../../../components'

import Api from '../../../../Api'

import { setLoading } from '../../../../redux/ducks/loading'

import { TitleType } from '../../options'

import { MenuButtonContainer } from '../elements'
import { FormData, ImportSplit } from './types'
import { RootState } from '../../../../redux/rootReducer'

interface Props {
  onConfirm: (type: TitleType, FormData: FormData) => void
  initialState?: FormData | null
}

const ImportSplitForm = ({ onConfirm }: Props) => {
  const { t } = useTranslation()
  const [schemeNotFound, setSchemeNotFound] = useState(false)
  const { secretToken } = useSelector((state: RootState) => state.auth)
  const dispatch = useDispatch()

  const importSplitInitialValues = {
    schemeId: '',
  }

  type ImportValues = typeof importSplitInitialValues

  const handleSubmit = async (values: ImportValues) => {
    try {
      dispatch(setLoading(true))
      const response = await Api.getSchemeDetails({
        secretToken,
        schemeId: values.schemeId,
      })

      const { name, id } = response.data

      const splitValues: ImportSplit = {
        type: 'scheme',
        name: `Scheme: ${name}`,
        id,
      }

      onConfirm('ImportSplit', splitValues)
      dispatch(setLoading(false))
    } catch (err) {
      dispatch(setLoading(false))
      setSchemeNotFound(true)
      console.error(err)
    }
  }

  return (
    <Formik initialValues={importSplitInitialValues} onSubmit={handleSubmit}>
      {({ values, touched, handleChange, handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Input
            label='Scheme address'
            name='schemeId'
            value={values.schemeId}
            onChange={handleChange}
            type='text'
            width='100%'
            error={touched.schemeId && schemeNotFound ? 'Scheme not found' : ''}
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

export default ImportSplitForm

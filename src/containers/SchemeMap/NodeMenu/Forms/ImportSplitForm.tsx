import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Formik } from 'formik'

import { Button, Input } from '../../../../components'

import Api from '../../../../Api'

import { setLoading } from '../../../../redux/ducks/loading'

import { TitleType } from '../../SchemeNode/options'

import { MenuButtonContainer } from '../elements'
import { FormData, ImportSplit } from './types'
import { RootState } from '../../../../redux/rootReducer'

interface Props {
  onConfirm: (type: TitleType, FormData: FormData) => void
  initialState?: FormData | null
}

const ImportSplitForm = ({ onConfirm }: Props) => {
  const { secretToken } = useSelector((state: RootState) => state.auth)
  const dispatch = useDispatch()
  const importSplitInitialValues = {
    splitId: '',
  }

  type importValues = typeof importSplitInitialValues

  const handleSubmit = async (values: importValues) => {
    try {
      dispatch(setLoading(true))
      const response = await Api.getSchemeDetails({
        secretToken,
        schemeId: values.splitId,
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
      console.error(err)
    }
  }

  return (
    <Formik initialValues={importSplitInitialValues} onSubmit={handleSubmit}>
      {({ values, handleChange, handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Input
            label='Split address'
            name='splitId'
            value={values.splitId}
            onChange={handleChange}
            type='text'
            width='100%'
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

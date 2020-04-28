import React, { useState } from 'react'

import SplitForm from './SplitForm'
import ImportSplitForm from './ImportSplitForm'

import { Button, FieldTitle } from '../../../../components'
import { TitleType } from '../../SchemeNode/options'
import { FormData } from './types'

interface Props {
  onConfirm: (type: TitleType, FormData: FormData) => void
  initialState?: FormData | null
}

const SplitOptions = ({ onConfirm, initialState = null }: Props) => {
  const [optionStatus, setOptionStatus] = useState<
    'default' | 'import' | 'new'
  >(initialState ? 'new' : 'default')

  const renderSplitOptions = () => {
    switch (optionStatus) {
      case 'default':
        return (
          <>
            <FieldTitle>
              Do you want to import an existent split scheme?
            </FieldTitle>
            <Button
              margin='0 0 20px 0'
              onClick={() => setOptionStatus('import')}
            >
              Import scheme
            </Button>
            <Button onClick={() => setOptionStatus('new')}>
              Create new split
            </Button>
          </>
        )

      case 'import':
        return <ImportSplitForm onConfirm={onConfirm} />

      case 'new':
        return <SplitForm onConfirm={onConfirm} initialState={initialState} />
    }
  }
  return <>{renderSplitOptions()}</>
}

export default SplitOptions

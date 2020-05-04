import React from 'react'
import { useTranslation } from 'react-i18next'

import { ContainerTitles, Colunm, Title } from './elements'

const TableTitles = () => {
  const { t } = useTranslation()
  return (
    <ContainerTitles>
      <Colunm width={'300px'}>
        <Title>{t('library.name')}</Title>
      </Colunm>

      <Colunm>
        <Title>{t('library.balance')}</Title>
      </Colunm>

      <Colunm>
        <Title>{t('library.payout')}</Title>
      </Colunm>

      <Colunm>
        <Title>{t('library.lastTransaction')}</Title>
      </Colunm>

      <Colunm width={'80px'}></Colunm>
    </ContainerTitles>
  )
}

export default TableTitles

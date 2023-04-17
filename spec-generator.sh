#!/usr/bin/bash

# name of swagger services 
ARRAY=('V1Account' 'V1AfterPay' 'V1Category' 'V1CentralBankCurrency' 'V1Companies' 'V1CompanyCertificate' 'V1Crawl' 'V1Crm' 'V1Discount'
 'V1FavoriteList' 'V1Feed' 'V1Graph' 'V1Home' 'V1Image' 'V1Industry' 'V1KnowledgeBaseArticle' 'V1KnowledgeBaseCategory' 'V1Network' 'V1News'
  'V1Notfication'  'V1Pay' 'V1P' 'V1Permissions' 'V1Person' 'V1PersonVerification' 'V1Pricing' 'V1Product' 'V1Production' 'V1Profile' 'V1Reports'
   'V1Search' 'V1Trade' 'V1TrademarkCategory' 'V1Trademark' 'V1Unsubscribe' 'V1UserRoles' 'V1Users' 'V2Account' 'V2AfterPay' 'V2Companies'
    'V2CompanyPersonSuggestion' 'V2FavoriteList' 'V2Feed' 'V2Industries' 'V2IntellectualProperty' 'V2News' 'V2NewsEntitySuggestion' 'V2NewsSuggestion'
     'V2Notification' 'V2Person' 'V2Pricing' 'V2Products' 'V2Profile' 'V2Search' 'V2Trades' 'V2Verification' 'Companies' 'Pricing')

# loop through services to generate types and interfaces
for element in "${ARRAY[@]}"; do
   npx openapi-typescript "https://backtest.rasm.io/swagger/${element}/swagger".json --output packages/current/types/"${element}".ts
done
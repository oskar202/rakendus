# Flavor Database Structure

## Entities by Definition

- [**Institution**](https://nospel.entu.ee/entity/institution/1)  
  Root element. Also describes partner organisations;
- [**Department**](https://nospel.entu.ee/entity/department)  
  Organisational unit in **Institution**;
- [**Person**](https://nospel.entu.ee/entity/person/2)  
  Users will authenticate as **Persons** in database. **Persons** can be grouped under **Departments**.
- [**Folder**](https://nospel.entu.ee/entity/folder/47837)  
  Any data that needs a meaningful container can be placed under **Folders**;
- [**Flavor**](https://nospel.entu.ee/entity/flavor)
- [**Flavor-incident**](https://nospel.entu.ee/entity/flavor-incident)
- [**Source**](https://nospel.entu.ee/entity/source)
- [**Retention-index**](https://nospel.entu.ee/entity/retention-index)
- [**Retention-index-type**](https://nospel.entu.ee/entity/retention-index-type)
- [**Product**](https://nospel.entu.ee/entity/product)

### Unused definitions
- [**Document**](https://nospel.entu.ee/entity/document)  
  Store agreements, corporate graphics, publicly shareable files or any other documents here. Structure with **Folders**.

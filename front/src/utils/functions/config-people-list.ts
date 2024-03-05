import { Person, TableInfo } from '@/components/PeopleTable';

export const configPeopleList = (
  updateFunction: (newPeopleList: TableInfo) => void,
  newPerson: Person,
  currentPeopleList: TableInfo
) => {
  if (currentPeopleList.people.length === 7) {
    currentPeopleList.people.pop();
    const newPeopleList = [newPerson, ...currentPeopleList.people];
    updateFunction({
      ...currentPeopleList,
      people: newPeopleList
    });
  }
};

import Box from "@mui/material/Box";
import Filters from "../../components/Filters";
import UserList from "../../components/UserList";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getPeople } from "../../store/people/actions";
import { selectPeople } from "../../store/people/selector";

const HomePage = () => {
  const dispatch = useDispatch();
  const people = useSelector(selectPeople);
  const [filteredPeople, setFilteredPeople] = useState(people);

  useEffect(() => {
    dispatch(getPeople());
  }, [dispatch]);

  useEffect(() => {
    setFilteredPeople(people);
  }, [people]);

  const applyFilters = (filtersVal) => {
    const { city, age, gender, language } = filtersVal;
    setFilteredPeople(
      people
        .filter((person) => {
          return city ? person.location === city : true;
        })
        .filter((person) => {
          return gender ? person.gender === gender : true;
        })
        .filter((person) => {
          return language ? person.language === language : true;
        })
        .filter((person) => {
          const startAge = age.split("-")[0];
          const endAge = age.split("-")[1];
          return age ? person.age >= startAge && person.age <= endAge : true;
        })
    );
  };

  const clearFilters = (setFiltersVal) => {
    setFiltersVal({
      city: "",
      age: "",
      gender: "",
      language: "",
    });
    setFilteredPeople(people);
  };

  return (
    <div className="homePage">
      <Box p={5}>
        {people && (
          <Filters
            people={people}
            applyFilters={applyFilters}
            clearFilters={clearFilters}
          />
        )}
        <UserList people={filteredPeople} />
      </Box>
    </div>
  );
};
export default HomePage;

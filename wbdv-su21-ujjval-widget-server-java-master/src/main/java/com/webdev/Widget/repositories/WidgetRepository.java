package com.webdev.Widget.repositories;

import org.springframework.data.repository.CrudRepository;
//import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.webdev.Widget.models.Widget;

@Repository
public interface WidgetRepository extends CrudRepository<Widget, Integer>{

}

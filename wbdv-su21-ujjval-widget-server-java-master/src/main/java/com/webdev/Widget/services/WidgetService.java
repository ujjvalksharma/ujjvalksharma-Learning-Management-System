package com.webdev.Widget.services;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.webdev.Widget.models.Widget;
import com.webdev.Widget.repositories.WidgetRepository;

@Service
public class WidgetService {
	
	@Autowired
	WidgetRepository widgetRepository;

	

public Widget createWidgetForTopic(Widget widget) {
	
	return widgetRepository.save(widget);
	
}
public List<Widget> findWidgetsForTopic(String tid){
	//return null;
	List<Widget>  widgetsForTopic= findAllWidgets().stream()
		    .filter(widget->widget.getTopicId().equals(tid)).collect(Collectors.toList());
	return widgetsForTopic;
	
	
}
public Integer updateWidget(int wid, Widget widget) {
	
	widget.setId(wid);
	widgetRepository.save(widget);
	return 1;
	
}
public Integer deleteWidget(int wid) {
	
	 widgetRepository.deleteById(wid);
	return 1;
	
}
public List<Widget> findAllWidgets(){
	return (List<Widget>) widgetRepository.findAll();
	
}
public Optional<Widget> findWidgetById(int wid) {
	return  widgetRepository.findById(wid);
	
}



}

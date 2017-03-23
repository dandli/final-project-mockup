/**
 *
 * Created by danli on 3/22/2017.
 */
import { FlowRouter } from 'meteor/kadira:flow-router';

Template.Login_Page.events({
  'click .login'() {
    FlowRouter.go('Home_Page');
  },
});
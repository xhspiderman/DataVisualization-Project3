# This is the script for grabbing the content out of a specific website
import urllib2
from bs4 import BeautifulSoup
import pdb
import re


page = urllib2.urlopen('http://simpsons.wikia.com/wiki/Audrey_McConnell%27s_Student_3').read()
soup = BeautifulSoup(page)
#  get the character
character=soup.find(id='WikiaPageHeader').find('h1').string
#  get the episodes the character is in
# try:
episodes=soup.find(id=re.compile("^Appearance")).find_parent("h2").find_next_sibling().find_all(text="Episode")
# except AttributeError:
# 	episodes= ["none"]
# out put the result as one to one data format into result file

for episode in episodes:
	if episode!="none":
	    episode_name = episode.find_parent('i').find_next_sibling('a').string
	    print episode_name
	else:
		episode_name = episode
		print episode_name
pdb.set_trace()

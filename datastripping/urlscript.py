# This is the script for grabbing the content out of a specific website
import urllib2
from bs4 import BeautifulSoup
import pdb

urls=['http://simpsons.wikia.com/wiki/Category:Characters']
# opens the result file
resultFile = open("urloutput.txt", "r+")
# opens target url or urls
page = urllib2.urlopen('http://simpsons.wikia.com/wiki/Category:Characters').read()
soup = BeautifulSoup(page)
#  get the next200 link
link='http://simpsons.wikia.com'+soup.find(text='next 200').parent['href']
urls.append(link)
while link:
	tpage = urllib2.urlopen(link).read()
	tsoup = BeautifulSoup(tpage)
	tlink = tsoup.find(text='next 200')
	if tlink:
	    link='http://simpsons.wikia.com'+tlink.parent['href']
	else:
		break
	urls.append(link)
	print link

# pdb.set_trace()
for i in urls:
    resultFile.write(i.encode('UTF-8'))
    resultFile.write('\n')

resultFile.close()


# #  get the episodes the character is in
# episodes=soup.find(id='Appearances').find_parent("h2").find_next_sibling('ul').find_all(text="Episode")
# # out put the result as one to one data format into result file
# for episode in episodes:
# 	episode_name = episode.find_parent('i').find_next_sibling('a').string
# 	resultFile.write('"'+character.encode('UTF-8')+'"'+'   ')
# 	resultFile.write('"'+episode_name.encode('UTF-8')+'"')
# 	resultFile.write('\n')
# # pdb.set_trace()


# resultFile.close()
#
import urllib2
from bs4 import BeautifulSoup
import pdb

sources=[]
my_file = open('urloutput.txt', 'r')
temp = my_file.readline()
while temp:
	sources.append(temp)
	temp = my_file.readline()
my_file.close()
# we will use source[index][:-1] as the url

# read the urls for characters

tempurls=[]

for source in sources:

    page = urllib2.urlopen(source[:-1]).read()
    soup = BeautifulSoup(page)
    links = soup.select(".mw-content-ltr")[2].find_all('li')
    for link in links:
    	tempurls.append('http://simpsons.wikia.com'+link.find('a')['href'])
    print(source)

resultFile = open('url2output.txt', 'r+')

for url in tempurls:
	resultFile.write(url.encode('UTF-8'))
	resultFile.write('\n')

resultFile.close()

# pdb.set_trace()
# page = urllib2.urlopen('http://simpsons.wikia.com/wiki/Category:Characters').read()
# soup = BeautifulSoup(page)
# #  get the next200 link
# link='http://simpsons.wikia.com'+soup.find(text='next 200').parent['href']
# urls.append(link)
# while link:
# 	tpage = urllib2.urlopen(link).read()
# 	tsoup = BeautifulSoup(tpage)
# 	tlink = tsoup.find(text='next 200')
# 	if tlink:
# 	    link='http://simpsons.wikia.com'+tlink.parent['href']
# 	else:
# 		break
# 	urls.append(link)
# 	print link

# pdb.set_trace()




# for i in urls:
#     resultFile.write('"'+i.encode('UTF-8')+'"'+'   ')
#     resultFile.write('\n')

# resultFile.close()
import datetime
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
import os  # pour verifier si le chemin existe

#Remplacer ces informations par vos informations personnelles
sender_email = "votre_email@gmail.com"
sender_password = "votre_passwprd"


#charger les donnéés des employés depuis un fichier cvs

def load_employee_data(filename="C:/Users/Desltop/employee_data.csv"):
    """"
    charge les données des employés depuis un fichier csv

    args: 
        filename: le nom du fichier cvs.
    
    Returns: 
           une liste de dictionnaires, où chaque dictionnaire répresente un employé.
    """
    employees = []
    if not os.path.isfile(filename):
        print(f"Erreur : le fichier '{filename}' n'a pas été trouver.")
        return employees
    try:
        with open(filename, "r", encoding="utf-8") as file:
            for line in file:
                name, email, birthdate_str = line.strip().split(",")
                birthdate = datetime.datetime.strptime(birthdate_str, "%Y-%m-%d")
                employees.append({
                    "name": name,
                    "email": email,
                    "birthdate": birthdate
                })
    except Exception as e:
        print(f"Erreur lors de la lecture du fichier : {e}")
    return employees


#envoyer un email d'anniversaire

def send_birthday_email(recipient_email, recipient_name):
    """
    envoie un email d'anniversaire au destinataire spécifié.

    Args:
        recipient_email: Adresse email du destinataire.
        recipient_name: nom du destinataire.
    """
    msg = MIMEMultipart()
    msg['From'] = sender_email
    msg['To'] = recipient_email
    msg['Subject'] = f"Joyeux Anniversaire, {recipient_name}"

    body = f"Cher {recipient_name},\n\nJoyeux Annivaire! Nous, à l' Université ICT, vous souhaithons une merveilleuse journée.\n\ncordialement,\nL équipe de ICTU"
    msg.attach(MIMEText(body, "plain"))

    with smtplib.SMTP_SSL("smtp.gmail.com", 465) as server:
        server.login(sender_email, sender_password)
        server.sendmail(sender_email, recipient_email, msg.as_string())


#fonction principal
def main():
    """
    Fonction principale pour envoyer des emails d'anniversaire.
    """
    employees = load_employee_data()
    today = datetime.date.today()
    for employee in employees:
        if employee["birthdate"].month == today.month and employee["birthdate"].day == today.day:
            send_birthday_email(employee["email"], employee["name"])


if __name__ == "__main__":
    main()
